const levels = [
  {
    id: 1,
    title: "Chapitre 1 : Affichage avec print()",
    lesson:
      "💡 La fonction print()\n\n" +
      "En Python, la fonction print() permet d’afficher du texte ou le contenu d’une variable dans la console.\n\n" +
      "🧱 Syntaxe de base :\n" +
      "print(élément_à_afficher)\n\n" +
      "📌 Pour afficher du texte (une chaîne de caractères), on l’écrit entre guillemets :\n" +
      '➡️ Exemple : print("Bonjour")\n\n' +
      "📌 Pour afficher une variable (déjà définie), on ne met pas de guillemets :\n" +
      "➡️ Exemple :\n" +
      "a = 2\n" +
      "print(a)\n\n" +
      '⚠️ Attention : le texte a besoin de guillemets ("...") mais une variable NON !\n\n' +
      "---\n\n" +
      "🎯 Associer texte + variable :\n\n" +
      "Tu peux combiner du texte et des variables de plusieurs façons :\n\n" +
      "1️⃣ Avec des virgules (les éléments sont séparés automatiquement par un espace) :\n" +
      "➡️ Exemple :\n" +
      "a = 10\n" +
      'print("J\'ai", a, "ans")\n\n' +
      "2️⃣ Avec .format() :\n" +
      "➡️ Exemple :\n" +
      'print("J\'ai {} ans".format(a))\n\n' +
      "Cela place la variable à la place des accolades {}\n\n" +
      "🧠 Résumé :\n" +
      '- print("texte") → affiche du texte\n' +
      "- print(variable) → affiche une variable\n" +
      '- print("texte", variable) ou print("texte {}".format(variable)) → combine les deux\n\n',

    questions: [
      {
        type: "Puzzel",
        number: 1,
        question: "Afficher bonjour",
        choices: ["print", "bonjour", "=", '"', "(", ")", '"', "a"],
        answer: ["print", "(", '"', "bonjour", '"', ")"],
      },
      {
        type: "Troup",
        number: 2,
        question: "Afficher Hello :\nprint(_____)",
        answer: ['print("Hello")'],
      },
      {
        type: "Sortie",
        number: 3,
        question: "print(2 + 3)",
        answer: ["5"],
      },
      {
        type: "Bool",
        number: 4,
        question: "a = 5\nb = 2\nprint(a / b)",
        answer: "correct",
      },
      {
        type: "Puzzel",
        number: 5,
        question:
          "Afficher la phrase : 'J'ai 35 ans', avec comme variable a=35",
        choices: [
          "print",
          "ans",
          "a",
          ",",
          '"',
          '"',
          "(",
          "J'ai",
          ")",
          '"',
          "53",
          '"',
          ",",
        ],
        answer: [
          "print",
          "(",
          '"',
          "J'ai",
          '"',
          ",",
          "a",
          ",",
          '"',
          "ans",
          '"',
          ")",
        ],
      },
      {
        type: "Troup",
        number: 6,
        question: 'Afficher : "Je suis fan du Youtuber x" avec x une variable',
        answer: ['print("Je suis fan du Youtuber", x)'],
      },
      {
        type: "Sortie",
        number: 7,
        question: "x = 14\nprint(x)",
        answer: ["14"],
      },
      {
        type: "Bool",
        number: 8,
        question: "n = 50\n print(tu me dois {}€.format(n))",
        answer: "erreur",
      },
      {
        type: "Puzzel",
        number: 8,
        question:
          "Afficher la phrase avec la méthode .format : 'Il y a x métre()s entre a et b'\nAvec a, b et x qui sont des variables",
        choices: [
          "print",
          "Il y a",
          "a",
          ",",
          "{}",
          "{}",
          "{}",
          '"',
          "(",
          ".",
          "(",
          ")",
          "métre(s) entre",
          "J'ai",
          ")",
          ",",
          ",",
          '"',
          "et",
          "53",
          ",",
        ],
        answer: ["print", "(", 'Il y a', "J'ai", ",", "a", ",", "ans", '"', ")"],
      },
      {
        type: "Sortie",
        number: 10,
        question: "name = 'Axel'\nprint('name')",
        answer: ["name"],
      },
    ],
  },
];
