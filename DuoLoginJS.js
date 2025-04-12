let currentLevel = null;
let currentQuestionIndex = 0;
let queue = [];
let totalQuestions = 0;
let reponseDonnee = false;
let selectedBool = null;

function afficherCarte() {
  const map = document.getElementById("level-map");
  map.innerHTML = "";

  levels.forEach((level) => {
    const btn = document.createElement("button");
    btn.className = "level-button";
    if (level.id === 1) {
      btn.innerText = `Chapitre ${level.id}\nPRINT`;
    } else if (level.id === 2) {
      btn.innerText = `Chapitre ${level.id}\nVARIABLES`;
    } else if (level.id === 3) {
      btn.innerText = `Chapitre ${level.id}\nCONDITIONS`;
    } else if (level.id === 4) {
      btn.innerText = `Chapitre ${level.id}\nBOUCLES`;
    } else if (level.id === 5) {
      btn.innerText = `Chapitre ${level.id}\nFONCTIONS`;
    } else if (level.id === 6) {
      btn.innerText = `Chapitre ${level.id}\nLISTES`;
    } else if (level.id === 7) {
      btn.innerText = `Chapitre ${level.id}\nDICOS`;
    } else if (level.id === 8) {
      btn.innerText = `Chapitre ${level.id}\nCLASS D'OBJETS`;
    } else if (level.id === 9) {
      btn.innerText = `Chapitre ${level.id}\nALGORITME`;
    } else {
      btn.innerText = `Chapitre ${level.id}`;
    }
    btn.onclick = () => {
      currentLevel = level;
      queue = [...level.questions];
      currentQuestionIndex = 0;
      totalQuestions = level.questions.length;
      showLesson();
    };

    map.appendChild(btn);
  });
}

function showLesson() {
  if (!currentLevel) return;
  document.getElementById("lesson-screen").style.display = "flex";
  document.getElementById("quiz-screen").style.display = "none";

  document.getElementById("lesson-title").innerText = currentLevel.title;
  document.getElementById("lesson-content").innerText = currentLevel.lesson;
}

function startQuestions() {
  document.getElementById("lesson-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  afficherQuestion();
}

function afficherQuestion() {
  const old = document.getElementById("bool-zone");
  if (old) old.remove();

  if (currentQuestionIndex >= queue.length) {
    document.getElementById("quiz-screen").innerHTML = `
      <h2>🎉 Bravo ! Tu as validé le Chapitre à 100% !</h2>
      <button onclick='window.location.reload()'>Retour à la carte</button>
    `;
    return;
  }

  const q = queue[currentQuestionIndex];
  document.getElementById("quiz-title").innerText = currentLevel.title;
  document.getElementById("question-title").innerText = `Question ${q.number}`;
  document.getElementById("user-input").value = "";
  document.getElementById("feedback").innerText = "";

  document.getElementById("puzzel-zone").style.display = "none";
  document.getElementById("user-input").style.display = "block";
  document.getElementById("question-body").innerText = "";

  // 🎯 PUZZEL
  if (q.type === "Puzzel") {
    document.getElementById("question-body").innerText = q.question;
    document.getElementById("puzzel-zone").style.display = "block";
    document.getElementById("user-input").style.display = "none";

    const choices = shuffle([...q.choices]);
    const puzzelChoices = document.getElementById("puzzel-choices");
    const puzzelAnswer = document.getElementById("puzzel-answer");

    puzzelChoices.innerHTML = "";
    puzzelAnswer.innerHTML = "";

    puzzelChoices.ondragover = allowDrop;
    puzzelChoices.ondrop = drop;

    puzzelAnswer.ondragover = allowDrop;
    puzzelAnswer.ondrop = drop;

    choices.forEach((word, index) => {
      const div = document.createElement("div");
      div.id = `drag-${index}`;
      div.className = "draggable";
      div.innerText = word;
      div.draggable = true;
      div.ondragstart = drag;
      puzzelChoices.appendChild(div);
    });
  }

  // 📝 Troup ou Sortie
  if (q.type === "Troup" || q.type === "Sortie") {
    document.getElementById("question-body").innerText = q.question;
  }

  // 🧠 BOOL
  if (q.type === "Bool") {
    document.getElementById("question-body").innerText = q.question;
    document.getElementById("user-input").style.display = "none";
    document.getElementById("puzzel-zone").style.display = "none";

    const boolZone = document.createElement("div");
    boolZone.id = "bool-zone";
    boolZone.innerHTML = `
      <button class="bool-btn" onclick="selectBool(this, 'correct')">✅ Correct</button>
      <button class="bool-btn" onclick="selectBool(this, 'erreur')">❌ Erreur</button>
    `;
    document.getElementById("quiz-screen").appendChild(boolZone);
  }
}

function selectBool(btn, value) {
  selectedBool = value;
  document
    .querySelectorAll(".bool-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function valider() {
  const btn = document.getElementById("verifier-btn");
  const feedback = document.getElementById("feedback");

  if (reponseDonnee) {
    currentQuestionIndex++;
    reponseDonnee = false;
    selectedBool = null;
    btn.innerText = "Vérifier";
    afficherQuestion();
    return;
  }

  const q = queue[currentQuestionIndex];
  let correct = false;

  // Puzzel
  if (q.type === "Puzzel") {
    const dropZone = document.getElementById("puzzel-answer");
    const mots = Array.from(dropZone.children).map((el) => el.innerText.trim());
    correct = JSON.stringify(mots) === JSON.stringify(q.answer);
  }

  // Troup ou Sortie
  else if (q.type === "Troup" || q.type === "Sortie") {
    const input = document
      .getElementById("user-input")
      .value.trim()
      .split(/\s+/);
    if (Array.isArray(q.answer)) {
      correct = q.answer.some((ans) => {
        const expected = ans.trim().split(/\s+/);
        return JSON.stringify(input) === JSON.stringify(expected);
      });
    } else {
      correct = JSON.stringify(input) === JSON.stringify(q.answer);
    }
  }

  // Bool
  else if (q.type === "Bool") {
    if (!selectedBool) {
      feedback.innerText = "❗ Choisis une réponse d'abord.";
      return;
    }
    correct = selectedBool === q.answer;
  }

  if (!q.validated && correct) q.validated = true;

  if (!correct) {
    feedback.innerText = `❌ Faux ! Bonne réponse : ${
      q.answer.join ? q.answer.join(" ") : q.answer
    }`;
    queue.push(q);
  } else {
    feedback.innerText = "✔️ Correct !";
    updateProgressBar();
  }

  btn.innerText = "Suivant";
  reponseDonnee = true;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  if (!ev.target.contains(dragged)) {
    ev.target.appendChild(dragged);
  }
}

function updateProgressBar() {
  const validées = totalQuestions - queue.filter((q) => !q.validated).length;
  const percent = Math.round((validées / totalQuestions) * 100);
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

window.onload = afficherCarte;
