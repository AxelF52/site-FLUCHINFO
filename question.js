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
        answer: ['print("Hello")', 'print("hello")'],
      },
      {
        type: "Sortie",
        number: 3,
        question: "Donner la sortie du programme :\nprint(2 + 3)",
        answer: ["5"],
      },
      {
        type: "Bool",
        number: 4,
        question:
          "Est ce que le programme suivant est correcte ou comporte une erreur ?\na = 5\nb = 2\nprint(a / b)",
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
        answer: [
          'print("Je suis fan du Youtuber", x)',
          "print('Je suis fan du Youtuber', x)",
          "print('Je suis fan du Youtuber',x)",
          'print("Je suis fan du Youtuber",x)',
        ],
      },
      {
        type: "Sortie",
        number: 7,
        question: "Donner la sortie du programme :\nx = 14\nprint(x)",
        answer: ["14"],
      },
      {
        type: "Sortie",
        number: 8,
        question:
          "Donner la sortie du programme :\nname = 'Bob'\nprint('Je m'appelle {}'.format(name))",
        answer: ["name"],
      },
      {
        type: "Puzzel",
        number: 9,
        question:
          "Afficher la phrase avec la méthode .format : 'Il y a x métre(s) entre a et b'\nAvec a, b et x qui sont des variables",
        choices: [
          "print",
          "Il y a",
          "a",
          ",",
          "{}",
          "{}",
          "{}",
          "format",
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
          "y",
          "b",
          "x",
        ],
        answer: [
          "print",
          "(",
          '"',
          "Il y a",
          "{}",
          "métre(s) entre",
          "{}",
          "et",
          "{}",
          '"',
          ".",
          "format",
          "(",
          "x",
          ",",
          "a",
          ",",
          "b",
          ")",
          ")",
        ],
      },
      {
        type: "Sortie",
        number: 10,
        question:
          "Donner la sortie du programme :\nname = 'Axel'\nprint('name')",
        answer: ["name"],
      },
    ],
  },
  {
    id: 2,
    title: "Chapitre 2 : Les varaiables en python",
    lesson:
      "💡 Les variables en Python\n\n" +
      "Une variable sert à stocker une donnée, un objet ou un résultat dans la mémoire.\n" +
      "On peut ensuite utiliser cette variable à différents endroits dans notre code.\n\n" +
      "🧱 Déclaration d'une variable :\n" +
      "nom_de_variable = valeur (attention le nom d'une variable ne doit pas contenir d'espace !!)\n\n" +
      "🔹 Exemple simple :\n" +
      "a = 5\n" +
      'nom = "Alice"\n\n' +
      "---\n\n" +
      "📌 Les types de données qu'on peut stocker :\n\n" +
      "1️⃣ Texte (chaîne de caractères ou str pour string) → entre guillemets :\n" +
      'nom = "Python"\n\n' +
      "2️⃣ Nombre entier (int) :\n" +
      "age = 25\n\n" +
      "3️⃣ Nombre décimal (float) :\n" +
      "note = 14.5\n\n" +
      "4️⃣ Booléen (True / False) :\n" +
      "est_connecte = True\n\n" +
      "5️⃣ Liste (tableau d'éléments) :\n" +
      'fruits = ["pomme", "banane", "kiwi"]\n\n' +
      "6️⃣ Tuple (liste non modifiable) :\n" +
      "coordonnees = (10, 20)\n\n" +
      "7️⃣ Autre variable :\n" +
      "x = 10\n" +
      "y = x  # y vaut maintenant 10 aussi\n\n" +
      "\n\n" +
      "🔧 Opérations possibles avec des variables :\n\n" +
      "➕ Addition :\n" +
      "x = 3\n" +
      "y = 4\n" +
      "z = x + y   # Résultat : 7\n\n" +
      "🔗 Concaténation de texte :\n" +
      'prenom = "Alice"\n' +
      'message = "Bonjour " + prenom\n' +
      "print(message)  # Bonjour Alice\n\n" +
      "🔁 Réaffecter une variable :\n" +
      "a = 5\n" +
      "a = a + 1 OU a += 1  # maintenant a vaut 6\n\n" +
      "D'autres opérateurs existent :\nmultiplication = * \ndivision = / \npuissance = ** \nquotient (division euclidenne) = // \nreste (division euclidenne) = %" +
      "\n\n" +
      "🧠 Astuce : Python est dynamique ➜ tu n'as pas besoin de préciser le type,\n" +
      "il le déduit automatiquement selon la valeur affectée.\n\nCependant s'il on veut connaître le type d'une variable, il suffit d'afficher son type avec type(). Exemple : \na = 12\nprint(type(variable)) \nLe programme retourne INT qui signifie entier\n\nAttention ! Il n'est pas possilble de faire des opération entre deux type de vraible différents (hormi INT et Float ensemble)\n\nMais il est aussi possible de changer une varaible de type. Exemple :\nbool = True\nprint(str(bool))\nLe programme retroune 'True', c'est devenu du texte !\n\n" +
      "Tu peux utiliser les variables dans :\n" +
      "- des conditions\n" +
      "- des boucles\n" +
      "- des fonctions\n\n" +
      "✅ En résumé :\n" +
      "- Une variable se déclare avec le signe =\n" +
      "- Elle peut contenir du texte, des chiffres, des listes, ou même d'autres variables\n" +
      "- On peut les réutiliser, modifier et combiner à volonté\n\n",

    questions: [
      {
        type: "Puzzel",
        number: 1,
        question: "Initialiser la variable Hello à 'Bonjour'",
        choices: ["'Bonjour'", '"Hello"', "Hello", "Bonjour", "=", "."],
        answer: ["Hello", "=", "'Bonjour'"],
      },
      {
        type: "Troup",
        number: 2,
        question:
          "Ajouter à b la somme de a et 3, sachant que a est une variable de type INT",
        answer: [
          "b = b + a + 3",
          "b = b + 3 + a",
          "b=b+a+3",
          "b=b+3+a",
          "b+=b+a+3",
          "b+= a + 3",
          "b += a + 3",
          "b += 3 + a",
        ],
      },
      {
        type: "Sortie",
        number: 3,
        question: "Donner la sortie du programme :\npi=3.14\nprint(type(pi))",
        answer: ["float"],
      },
      {
        type: "Bool",
        number: 4,
        question:
          "Est ce que le programme suivant est correcte ou comporte une erreur ?\nrendu monnaie = 4.34",
        answer: "erreur",
      },
      {
        type: "Puzzel",
        number: 5,
        question: "retirer 10 à z sachant que z = 10",
        choices: ["z", "-=", "10", "'10'", "'z'", "=-"],
        answer: ["z", "-=", "10"],
      },
      {
        type: "Troup",
        number: 6,
        question:
          "Initaliser une variable p égal au produit de f1 et f2 sachant que f1 et f2 sont des variables de type INT",
        answer: ["p = f1 * f2", "p=f1*f2", "p = f2 * f1", "p=f2*f1"],
      },
      {
        type: "Sortie",
        number: 7,
        question:
          "Donner la sortie du programme :\nbool = True\nprint(not(bool))",
        answer: ["False"],
      },
      {
        type: "Bool",
        number: 8,
        question:
          "Est ce que le programme suivant est correcte ou comporte une erreur ?\nvariable=false\nprint(variable)",
        answer: "erreur",
      },
      {
        type: "Puzzel",
        number: 9,
        question:
          "Afficher la variable pi sous forme d'entier (sans chiffres après la virgule) sachant que pi = 3.14",
        choices: ["print", "(", "int", "(", "pi", ")", ")"],
        answer: ["print", "(", "int", "(", "pi", ")", ")"],
      },
      {
        type: "Sortie",
        number: 10,
        question:
          "Donner la sortie du programme :\na, b, c = 1, 2, 3\nprint(b)",
        answer: [2],
      },
    ],
  },
  {
    id: 3,
    title: "Chapitre 3 : Les conditions (if, elif, else)",
    lesson:
      "💡 Les conditions permettent d'exécuter certaines instructions uniquement si une condition est vraie.\n\n" +
      "🧱 Syntaxe :\n" +
      "if condition:\n    instruction\n" +
      "elif autre_condition:\n    instruction\n" +
      "else:\n    instruction\n\n" +
      "🔹 Exemple :\n" +
      'âge = 18\nif âge >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")\n\n' +
      "📌 Les opérateurs de comparaison : == (égal à), !=(différent de), <, >, <=, >=\n" +
      "📌 Les opérateurs logiques : and, or, not\n\n" +
      "📍 Autres exemples :\n" +
      'note = 15\nif note >= 16:\n    print("Très bien")\nelif note >= 10:\n    print("Moyen")\nelse:\n    print("Insuffisant")\n\n' +
      "🧠 Astuce : Attention à l'indentation (=alinéas) ! Tout ce qui est dans un bloc doit être indenté.",
    questions: [
      {
        type: "Puzzel",
        number: 1,
        question: "Afficher 'OK' si x est égal à 10 sachant que x = 10",
        choices: [
          "x",
          "=",
          "10",
          "if",
          ":",
          "==",
          "print",
          "'OK'",
          "(",
          ")",
          "retours à la ligne + alinéa",
        ],
        answer: [
          "if",
          "x",
          "==",
          "10",
          ":",
          "retours à la ligne + alinéa",
          "print",
          "(",
          "'OK'",
          ")",
        ],
      },
      {
        type: "Troup",
        number: 2,
        question: "Afficher 'Mineur' si age est inférieur à 18",
        answer: [
          "if age < 18:\n    print('Mineur')",
          'if age<18:\n    print("Mineur")',
        ],
      },
      {
        type: "Bool",
        number: 3,
        question: "Est-ce que ce code est valide ?\nif a = 5:\n    print(a)",
        answer: "erreur",
      },
      {
        type: "Sortie",
        number: 4,
        question: "Donner la sortie :\nx = 7\nif x > 5:\n'''''print('ok')",
        answer: ["ok"],
      },
      {
        type: "Puzzel",
        number: 5,
        question: "Afficher 'positif' si n >= 0, sinon 'négatif'",
        choices: [
          "if",
          "n",
          ">=",
          "0",
          "print",
          "'positif'",
          "else",
          "print",
          "'négatif'",
          ":",
          "(",
          ")",
          "(",
          ")",
        ],
        answer: [
          "if",
          "n",
          ">=",
          "0",
          ":",
          "print",
          "(",
          "'positif'",
          ")",
          "else",
          ":",
          "print",
          "(",
          "'négatif'",
          ")",
        ],
      },
      {
        type: "Sortie",
        number: 6,
        question:
          "Donner la sortie :\nx = 3\nif x % 2 == 0:\n    print('pair')\nelse:\n    print('impair')",
        answer: ["impair"],
      },
      {
        type: "Troup",
        number: 7,
        question:
          "Afficher 'Accès autorisé' si mot_de_passe est égal à 'admin'",
        answer: [
          "if mot_de_passe == 'admin':\n    print('Accès autorisé')",
          'if mot_de_passe == "admin":print("Accès autorisé")',
        ],
      },
      {
        type: "Bool",
        number: 8,
        question:
          "Ce code est-il correct ?\nif True or False:\n    print('yes')",
        answer: "correct",
      },
      {
        type: "Puzzel",
        number: 9,
        question: "Afficher 'Ado' si age >= 13 et age < 18",
        choices: [
          "if",
          "age",
          ">=",
          "13",
          "and",
          "age",
          "<",
          "18",
          ":",
          "print",
          "(",
          "'Ado'",
          ")",
          "<",
          "and",
        ],
        answer: [
          "if",
          "age",
          ">=",
          "13",
          "and",
          "age",
          "<",
          "18",
          ":",
          "print",
          "(",
          "'Ado'",
          ")",
        ],
      },
      {
        type: "Sortie",
        number: 10,
        question:
          "Donner la sortie :\nnote = 8\nif note >= 10:\n    print('Réussi')\nelse:\n    print('Échec')",
        answer: ["Échec"],
      },
    ],
  },

  {
    id: 4,
    title: "Chapitre 4 : Les boucles (for, while)",
    lesson:
      "💡 Les boucles permettent de répéter un bloc d'instructions plusieurs fois.\n\n" +
      "🔁 La boucle for (quand on connaît le nombre d’itérations) :\nfor i in range(n):\n    instruction\n\n" +
      "🔄 La boucle while (tant qu'une condition est vraie) :\nwhile condition:\n    instruction\n\n" +
      "🔹 Exemple for :\nfor i in range(3):\n    print(i)  # 0, 1, 2\n\n" +
      "🔹 Exemple while :\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1\n\n" +
      "📌 La fonction range(n) génère les nombres de 0 jusqu’à n-1.\n📌 Pour éviter les boucles infinies, il faut modifier la condition dans la boucle while !\n\n" +
      "🎯 Astuce : Utilise for pour les listes, et while pour les conditions dynamiques.",
    questions: [
      {
        type: "Troup",
        number: 1,
        question: "Afficher les nombres de 0 à 4 avec une boucle for",
        answer: [
          "for i in range(5):\n    print(i)",
          "for i in range(0,5):\n    print(i)",
        ],
      },
      {
        type: "Sortie",
        number: 2,
        question:
          "Donner la sortie du code :\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1",
        answer: ["0", "1", "2"],
      },
      {
        type: "Bool",
        number: 3,
        question:
          "Ce code tourne-t-il à l'infini ?\nx = 0\nwhile x < 5:\n    print(x)",
        answer: "oui",
      },
      {
        type: "Puzzel",
        number: 4,
        question: "Compléter : afficher tous les éléments de la liste fruits",
        choices: [
          "for",
          "in",
          "fruit",
          "fruits",
          ":",
          "print",
          "(",
          "fruit",
          ")",
        ],
        answer: [
          "for",
          "fruit",
          "in",
          "fruits",
          ":",
          "print",
          "(",
          "fruit",
          ")",
        ],
      },
      {
        type: "Troup",
        number: 5,
        question: "Afficher les nombres pairs de 0 à 10 avec une boucle for",
        answer: ["for i in range(0, 11, 2):\n    print(i)"],
      },
      {
        type: "Puzzel",
        number: 6,
        question: "Boucle while qui décrémente x de 5 à 1",
        choices: [
          "x",
          "=",
          "5",
          "while",
          "x",
          ">",
          "0",
          ":",
          "print",
          "(",
          "x",
          ")",
          "x",
          "-=",
          "1",
        ],
        answer: [
          "x",
          "=",
          "5",
          "while",
          "x",
          ">",
          "0",
          ":",
          "print",
          "(",
          "x",
          ")",
          "x",
          "-=",
          "1",
        ],
      },
      {
        type: "Sortie",
        number: 7,
        question: "Donner la sortie :\nfor i in range(3):\n    print(i * 2)",
        answer: ["0", "2", "4"],
      },
      {
        type: "Bool",
        number: 8,
        question: "Ce code est-il correct ?\nfor x in range(5)\n    print(x)",
        answer: "erreur",
      },
      {
        type: "Troup",
        number: 9,
        question: "Afficher chaque caractère de la chaîne 'chat'",
        answer: ["for lettre in 'chat':\n    print(lettre)"],
      },
      {
        type: "Puzzel",
        number: 10,
        question: "Boucle for qui affiche 5 fois 'Hello'",
        choices: ["for", "in", "range", "5", ":", "print", "(", "'Hello'", ")"],
        answer: [
          "for",
          "i",
          "in",
          "range",
          "(",
          "5",
          ")",
          ":",
          "print",
          "(",
          "'Hello'",
          ")",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Chapitre 5 : Les fonctions",
    lesson:
      "💡 Une fonction est un bloc de code réutilisable que l'on peut appeler avec un nom, et qui peut prendre des paramètres.\n\n" +
      "🧱 Déclaration d'une fonction :\ndef nom_de_fonction(paramètres):\n    instruction\n\n" +
      '🔹 Exemple :\ndef saluer():\n    print("Bonjour !")\n\n' +
      '🔹 Exemple avec paramètre :\ndef bonjour(nom):\n    print("Bonjour", nom)\n\n' +
      '📌 Appel : saluer() ou bonjour("Alice")\n\n' +
      "🎯 Une fonction peut aussi **retourner** une valeur avec `return`.\n\n" +
      "🔹 Exemple de fonction avec `return` :\n" +
      "def addition(a, b):\n    return a + b\n\n" +
      "📌 Une fonction peut être appelée plusieurs fois avec des valeurs différentes.",
    questions: [
      {
        type: "Troup",
        number: 1,
        question: "Créer une fonction qui affiche 'Coucou'",
        answer: [
          "def dire_bonjour():\n    print('Coucou')",
          'def dire_bonjour():\n    print("Coucou")',
        ],
      },
      {
        type: "Puzzel",
        number: 2,
        question: "Créer une fonction appelée somme qui retourne a + b",
        choices: [
          "def",
          "somme",
          "(",
          "a",
          ",",
          "b",
          ")",
          ":",
          "return",
          "a",
          "+",
          "b",
        ],
        answer: [
          "def",
          "somme",
          "(",
          "a",
          ",",
          "b",
          ")",
          ":",
          "return",
          "a",
          "+",
          "b",
        ],
      },
      {
        type: "Sortie",
        number: 3,
        question:
          "Donner la sortie du code suivant :\ndef identite(nom):\n    return \"Je suis \" + nom\nprint(identite('Sam'))",
        answer: ["Je suis Sam"],
      },
      {
        type: "Bool",
        number: 4,
        question: "Est-ce correct ?\ndef f(x):\nprint(x)",
        answer: "erreur",
      },
      {
        type: "Troup",
        number: 5,
        question:
          "Créer une fonction qui prend deux paramètres, x et y, et retourne leur produit",
        answer: ["def multiplier(x, y):\n    return x * y"],
      },
      {
        type: "Puzzel",
        number: 6,
        question:
          "Créer une fonction qui affiche la phrase 'Salut {nom}' où nom est un paramètre",
        choices: [
          "def",
          "saluer",
          "(",
          "nom",
          ")",
          ":",
          "print",
          "(",
          "'Salut '",
          "+",
          "nom",
          ")",
        ],
        answer: [
          "def",
          "saluer",
          "(",
          "nom",
          ")",
          ":",
          "print",
          "(",
          "'Salut '",
          "+",
          "nom",
          ")",
        ],
      },
      {
        type: "Sortie",
        number: 7,
        question:
          "Donner la sortie du code suivant :\ndef carre(x):\n    return x * x\nprint(carre(4))",
        answer: ["16"],
      },
      {
        type: "Bool",
        number: 8,
        question: "Est-ce correct ?\nif f():\n    print('ok')",
        answer: "erreur",
      },
      {
        type: "Troup",
        number: 9,
        question:
          "Créer une fonction qui renvoie True si le nombre est pair, sinon False",
        answer: ["def est_pair(n):\n    return n % 2 == 0"],
      },
      {
        type: "Puzzel",
        number: 10,
        question:
          "Compléter le code pour que la fonction addition retourne la somme de 5 et 8",
        choices: [
          "def",
          "addition",
          "(",
          "a",
          ",",
          "b",
          ")",
          ":",
          "return",
          "a",
          "+",
          "b",
        ],
        answer: [
          "def",
          "addition",
          "(",
          "a",
          ",",
          "b",
          ")",
          ":",
          "return",
          "a",
          "+",
          "b",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Chapitre 6 : Les listes",
    lesson:
      "📦 Une liste est une structure de données qui peut contenir plusieurs éléments (nombres, chaînes, etc.).\n\n" +
      "🧱 Déclaration :\nma_liste = [1, 2, 3, 4]\n\n" +
      "🔢 Accès à un élément :\nprint(ma_liste[0])  # Affiche 1\n\n" +
      "🔁 Parcourir une liste :\nfor element in ma_liste:\n    print(element)\n\n" +
      "🔧 Fonctions utiles :\n- len(liste) : retourne la taille\n- liste.append(x) : ajoute un élément\n- liste.remove(x) : supprime le premier x\n- liste.pop(i) : supprime l’élément à l’index i\n- liste.sort() : trie la liste\n\n" +
      "📌 Les indices commencent à 0\n📌 Les listes peuvent contenir des éléments de types différents\n\n" +
      "🧠 Astuce : Tu peux modifier une liste en assignant directement une valeur à un index (ex: liste[0] = 99)",
    questions: [
      {
        type: "Troup",
        number: 1,
        question: "Créer une liste contenant les nombres 1, 2, 3",
        answer: ["ma_liste = [1, 2, 3]"],
      },
      {
        type: "Puzzel",
        number: 2,
        question: "Afficher le premier élément de la liste fruits",
        choices: ["print", "(", "fruits", "[", "0", "]", ")"],
        answer: ["print", "(", "fruits", "[", "0", "]", ")"],
      },
      {
        type: "Sortie",
        number: 3,
        question:
          "Donner la sortie :\nanimaux = ['chat', 'chien']\nprint(len(animaux))",
        answer: ["2"],
      },
      {
        type: "Bool",
        number: 4,
        question:
          "Ce code est-il correct ?\nma_liste = [1, 2, 3]\nprint(ma_liste[3])",
        answer: "erreur",
      },
      {
        type: "Troup",
        number: 5,
        question: "Ajouter le nombre 4 à la fin de la liste chiffres",
        answer: ["chiffres.append(4)"],
      },
      {
        type: "Puzzel",
        number: 6,
        question: "Supprimer 'banane' de la liste fruits",
        choices: ["fruits", ".", "remove", "(", "'banane'", ")"],
        answer: ["fruits", ".", "remove", "(", "'banane'", ")"],
      },
      {
        type: "Sortie",
        number: 7,
        question:
          "Donner la sortie :\nnotes = [10, 20, 15]\nnotes.sort()\nprint(notes)",
        answer: ["[10, 15, 20]"],
      },
      {
        type: "Bool",
        number: 8,
        question: "Est-ce correct ?\nliste = []\nliste.append('ok')",
        answer: "oui",
      },
      {
        type: "Troup",
        number: 9,
        question:
          "Afficher tous les éléments de la liste animaux avec une boucle",
        answer: ["for animal in animaux:\n    print(animal)"],
      },
      {
        type: "Puzzel",
        number: 10,
        question: "Remplacer le premier élément de la liste par 100",
        choices: ["liste", "[", "0", "]", "=", "100"],
        answer: ["liste", "[", "0", "]", "=", "100"],
      },
    ],
  },
  {
    id: 7,
    title: "Chapitre 7 : Les dictionnaires",
    lesson:
      "🗃️ Un dictionnaire permet de stocker des données sous forme de paires **clé:valeur**.\n\n" +
      "🧱 Déclaration :\npersonne = { 'nom': 'Alice', 'âge': 30 }\n\n" +
      "🔍 Accéder à une valeur :\nprint(personne['nom'])  # Affiche 'Alice'\n\n" +
      "➕ Ajouter ou modifier :\npersonne['ville'] = 'Paris'\npersonne['âge'] = 31\n\n" +
      "❌ Supprimer une clé :\ndel personne['ville']\n\n" +
      "🔄 Parcourir un dictionnaire :\nfor clé in personne:\n    print(clé, personne[clé])\n\n" +
      "📌 Les clés sont uniques\n📌 Les valeurs peuvent être de tout type (nombres, chaînes, listes…)\n\n" +
      "📚 Fonctions utiles :\n- dict.keys() : liste des clés\n- dict.values() : liste des valeurs\n- dict.items() : liste des paires (clé, valeur)",
    questions: [
      {
        type: "Troup",
        number: 1,
        question:
          "Créer un dictionnaire personne avec 'nom' = 'Léo' et 'âge' = 25",
        answer: [
          "personne = { 'nom': 'Léo', 'âge': 25 }",
          "personne = {'nom': 'Léo', 'âge': 25}",
        ],
      },
      {
        type: "Puzzel",
        number: 2,
        question: "Afficher la valeur associée à la clé 'nom'",
        choices: ["print", "(", "personne", "[", "'nom'", "]", ")"],
        answer: ["print", "(", "personne", "[", "'nom'", "]", ")"],
      },
      {
        type: "Sortie",
        number: 3,
        question:
          "Donner la sortie :\nd = { 'x': 10 }\nd['x'] += 5\nprint(d['x'])",
        answer: ["15"],
      },
      {
        type: "Bool",
        number: 4,
        question:
          "Ce code est-il correct ?\ninfo = { 'nom': 'Sam' }\nprint(info['age'])",
        answer: "erreur",
      },
      {
        type: "Troup",
        number: 5,
        question:
          "Ajouter une clé 'ville' avec la valeur 'Paris' au dictionnaire personne",
        answer: ["personne['ville'] = 'Paris'"],
      },
      {
        type: "Puzzel",
        number: 6,
        question: "Supprimer la clé 'âge' du dictionnaire",
        choices: ["del", "personne", "[", "'âge'", "]"],
        answer: ["del", "personne", "[", "'âge'", "]"],
      },
      {
        type: "Sortie",
        number: 7,
        question:
          "Donner la sortie :\ninfos = {'a':1, 'b':2}\nfor k in infos:\n    print(k)",
        answer: ["a", "b"],
      },
      {
        type: "Bool",
        number: 8,
        question:
          "Ce code est-il correct ?\nd = {'a': 1, 'a': 2}\nprint(d['a'])",
        answer: "oui",
      },
      {
        type: "Troup",
        number: 9,
        question:
          "Parcourir les paires (clé et valeur) du dictionnaire utilisateur",
        answer: [
          "for clé, valeur in utilisateur.items():\n    print(clé, valeur)",
        ],
      },
      {
        type: "Puzzel",
        number: 10,
        question: "Afficher toutes les valeurs d’un dictionnaire",
        choices: [
          "for",
          "v",
          "in",
          "dico",
          ".",
          "values",
          "(",
          ")",
          ":",
          "print",
          "(",
          "v",
          ")",
        ],
        answer: [
          "for",
          "v",
          "in",
          "dico",
          ".",
          "values",
          "(",
          ")",
          ":",
          "print",
          "(",
          "v",
          ")",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Chapitre 9 : Algorithmie de base",
    lesson:
      "🧠 L’algorithmie consiste à résoudre des problèmes étape par étape à l’aide de code.\n\n" +
      "📌 Les outils essentiels :\n- Variables\n- Boucles\n- Conditions\n- Fonctions\n\n" +
      "🎯 Exemples de problèmes classiques :\n" +
      "- Calculer la somme des éléments d’une liste\n" +
      "- Trouver le plus grand élément\n" +
      "- Rechercher un élément dans une liste\n" +
      "- Compter les occurrences\n" +
      "- Trier une liste\n\n" +
      "🔧 Exemple - somme d'une liste :\n" +
      "nombres = [1, 2, 3]\nsomme = 0\nfor n in nombres:\n    somme += n\nprint(somme)  # 6\n\n" +
      "🔧 Exemple - trouver le max :\n" +
      "max_val = nombres[0]\nfor n in nombres:\n    if n > max_val:\n        max_val = n\nprint(max_val)\n\n" +
      "💡 Ces algorithmes sont la base de la résolution de problèmes en Python.",
    questions: [
      {
        type: "Troup",
        number: 1,
        question: "Calculer la somme des éléments de la liste notes",
        answer: [
          "somme = 0\nfor note in notes:\n    somme += note\nprint(somme)",
        ],
      },
      {
        type: "Puzzel",
        number: 2,
        question: "Trouver le plus grand nombre dans la liste valeurs",
        choices: [
          "maxi",
          "=",
          "valeurs",
          "[",
          "0",
          "]",
          "for",
          "v",
          "in",
          "valeurs",
          ":",
          "if",
          "v",
          ">",
          "maxi",
          ":",
          "maxi",
          "=",
          "v",
        ],
        answer: [
          "maxi",
          "=",
          "valeurs",
          "[",
          "0",
          "]",
          "for",
          "v",
          "in",
          "valeurs",
          ":",
          "if",
          "v",
          ">",
          "maxi",
          ":",
          "maxi",
          "=",
          "v",
        ],
      },
      {
        type: "Sortie",
        number: 3,
        question:
          "Donner la sortie :\nn = [1, 2, 3, 4]\nres = 1\nfor x in n:\n    res *= x\nprint(res)",
        answer: ["24"],
      },
      {
        type: "Bool",
        number: 4,
        question:
          "Ce code retourne-t-il la bonne moyenne ?\ns = sum(notes)/len(notes)",
        answer: "oui",
      },
      {
        type: "Troup",
        number: 5,
        question: "Compter combien de fois 'a' apparaît dans la liste lettres",
        answer: [
          "compte = 0\nfor l in lettres:\n    if l == 'a':\n        compte += 1\nprint(compte)",
        ],
      },
      {
        type: "Puzzel",
        number: 6,
        question:
          "Rechercher 10 dans la liste chiffres et afficher 'trouvé' si présent",
        choices: [
          "for",
          "c",
          "in",
          "chiffres",
          ":",
          "if",
          "c",
          "==",
          "10",
          ":",
          "print",
          "(",
          "'trouvé'",
          ")",
        ],
        answer: [
          "for",
          "c",
          "in",
          "chiffres",
          ":",
          "if",
          "c",
          "==",
          "10",
          ":",
          "print",
          "(",
          "'trouvé'",
          ")",
        ],
      },
      {
        type: "Sortie",
        number: 7,
        question: "Donner la sortie :\nl = [3, 1, 2]\nl.sort()\nprint(l)",
        answer: ["[1, 2, 3]"],
      },
      {
        type: "Bool",
        number: 8,
        question: "Ce code renvoie-t-il le plus petit élément ?\nmin(liste)",
        answer: "oui",
      },
      {
        type: "Troup",
        number: 9,
        question: "Écrire un algorithme qui inverse une liste appelée données",
        answer: ["donnees.reverse()", "donnees = donnees[::-1]"],
      },
      {
        type: "Puzzel",
        number: 10,
        question: "Créer une liste triée sans modifier l’originale",
        choices: ["triée", "=", "sorted", "(", "liste", ")"],
        answer: ["triée", "=", "sorted", "(", "liste", ")"],
      },
    ],
  },
];
