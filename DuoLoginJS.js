let currentLevel = null;
let currentQuestionIndex = 0;
let queue = [];

function afficherCarte() {
  const map = document.getElementById("level-map");
  map.innerHTML = "";

  levels.forEach((level) => {
    const btn = document.createElement("button");
    btn.className = "level-button";
    btn.innerText = `Chapitre ${level.id} \n PRINT`;

    // 🛠️ On définit currentLevel et queue ici
    btn.onclick = () => {
      currentLevel = level;
      queue = [...level.questions];
      currentQuestionIndex = 0;
      showLesson();
    };

    map.appendChild(btn);
  });
}

function selectBool(btn, value) {
  selectedBool = value;
  document
    .querySelectorAll(".bool-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showLesson() {
  if (!currentLevel) return; // Sécurité
  document.getElementById("lesson-screen").style.display = "flex";
  document.getElementById("quiz-screen").style.display = "none";

  document.getElementById("lesson-title").innerText = currentLevel.title;
  document.getElementById("lesson-content").innerText = currentLevel.lesson;
}

function validerBool(choix) {
  const q = queue[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  const correct = choix === q.answer;

  if (!correct) {
    feedback.innerText = `❌ Mauvaise réponse. C'était "${q.answer.toUpperCase()}"`;
    queue.push(q);
  } else {
    feedback.innerText = "✔️ Correct !";
    updateProgressBar();
  }

  // Désactiver boutons
  document
    .getElementById("bool-zone")
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = true));

  // Attendre clic suivant
  document.getElementById("verifier-btn").innerText = "Suivant";
  reponseDonnee = true;
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

  // Reset zones
  document.getElementById("puzzel-zone").style.display = "none";
  document.getElementById("user-input").style.display = "block";
  document.getElementById("question-body").innerText = "";

  if (q.type === "Puzzel") {
    document.getElementById("question-body").innerText = q.question;
    document.getElementById("puzzel-zone").style.display = "block";
    document.getElementById("user-input").style.display = "none";

    const choices = shuffle([...q.choices]);
    const puzzelChoices = document.getElementById("puzzel-choices");
    const puzzelAnswer = document.getElementById("puzzel-answer");

    puzzelChoices.innerHTML = "";
    puzzelAnswer.innerHTML = "";

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

  if (q.type === "Troup" || q.type === "Sortie") {
    document.getElementById("question-body").innerText = q.question;
  }

  if (q.type === "Bool") {
    document.getElementById("question-body").innerText = q.question;
    document.getElementById("user-input").style.display = "none";
    document.getElementById("puzzel-zone").style.display = "none";

    // Supprime les anciens boutons si présents
    const old = document.getElementById("bool-zone");
    if (old) old.remove();

    const boolZone = document.createElement("div");
    boolZone.id = "bool-zone";
    boolZone.innerHTML = `
        <button class="bool-btn" onclick="selectBool(this, 'correct')">✅ Correct</button>
        <button class="bool-btn" onclick="selectBool(this, 'erreur')">❌ Erreur</button>
    `;
    document.getElementById("quiz-screen").appendChild(boolZone);
  }
}

let reponseDonnee = false;
let selectedBool = null;

function valider() {
  const btn = document.getElementById("verifier-btn");
  const feedback = document.getElementById("feedback");

  if (reponseDonnee) {
    // Réinitialiser pour la prochaine question
    currentQuestionIndex++;
    reponseDonnee = false;
    selectedBool = null;
    btn.innerText = "Vérifier";
    afficherQuestion();
    return;
  }

  const q = queue[currentQuestionIndex];
  let correct = false;

  // 🔸 PUZZEL
  if (q.type === "Puzzel") {
    const dropZone = document.getElementById("puzzel-answer");
    const mots = Array.from(dropZone.children).map((el) => el.innerText.trim());
    correct = JSON.stringify(mots) === JSON.stringify(q.answer);
  }

  // 🔸 TROUPE / SORTIE
  else if (q.type === "Troup" || q.type === "Sortie") {
    const input = document
      .getElementById("user-input")
      .value.trim()
      .split(/\s+/);
    correct = JSON.stringify(input) === JSON.stringify(q.answer);
  }

  // 🔸 BOOLÉEN
  else if (q.type === "Bool") {
    if (!selectedBool) {
      feedback.innerText = "❗ Choisis une réponse d'abord.";
      return;
    }
    correct = selectedBool === q.answer;
  }

  // 🔎 Résultat
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

function updateProgressBar() {
  const total = queue.length + currentQuestionIndex;
  const progress = Math.round(((currentQuestionIndex + 1) / total) * 100);
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  ev.target.appendChild(dragged);
}

window.onload = afficherCarte;
