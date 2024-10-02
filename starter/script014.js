/*****************************
 * 14 - Les instructions If / Else
 */

// TEST = STRUCTURE DE CONTRÔLE N° 1 = MOYEN DE CONTRÔLER L'EXÉCUTION DES INSTRUCTIONS :
// L'instruction ne s'exécutera que si une certaine condition est remplie (c.-à-d. vraie)

// 1. Exprimez une condition : IF
const a = 4;

if (a === 3){
    console.log('Waw !');
}

// 1. Écrivez un test dont la condition est true
const b = true;
if (b === true){
    console.log("Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher");
}
// 2. Dans le bloc, affichez "Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher"

// Et l'inverse :
// 1. Écrivez un test dont la condition est false
// 2. Dans le bloc, affichez "Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher"
const c = false;
if (c === true){
    console.log("Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher");
}
// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre (ATTENTION, prenez bien soin qu'il s'agisse bien d'un nombre et pas d'une chaîne de caractères !) dans une constante nombre
// 2. Si ce nombre est positif (et seulement dans ce cas), affichez "… est positif"
const nombreA = Number(prompt('Veuillez insérer un nombre :'));
if (nombreA > 0){
    console.log(`${nombreA} est positif !`);
}
// Écrivez un programme qui dit "Bonjour" à l'utilisateur et n'accepte de lui répondre que si celui-ci lui dit "Bonjour" à son tour. Dans ce cas, le programme lui répond "Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?". Il enregistre alors l'entrée dans une variable nom et, seulement si l'utilisateur a bien entré quelque chose dans le champ (il prend la peine de vérifier avant), il lui répond (dans la console), "Je t'aime bien, …".
const bonjour = prompt('Bonjour !');

if (bonjour === 'Bonjour' || bonjour === 'bonjour'){
    const nom = prompt("Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?");
    console.log(`Je t'aime bien ${nom}`);
} else {
    console.log(`Tu n'est pas très gentil !`)
}
// 2. Exprimez une alternative : if / else

// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre dans une constante nombre
// 2. Si ce nombre est positif, affichez "… est positif", sinon, affichez "… est négatif ou nul"
const nombreB = Number(prompt('Veuillez insérer un nombre :'));
if (nombreB > 0){
    console.log(`${nombreB} est positif !`);
} else if (nombreB <= 0){
    console.log(`${nombreB} est négatif ou nul !`);
}
// 1. Initialisez la variable firstName à John et enregistrez son état civil ('single') dans une variable civilStatus
// 2. Si l'état civil est 'married', affichez "John est marié !", sinon affichez "John va, on l\'espère, bientôt se marier :)"
// 3. Changez l'état civil de John à ('married') et retestez

const firtsName = 'Jhon';
const civilStatus = 'married';

if (civilStatus === 'married') {
    console.log('Jhon est marié !');
} else {
    console.log("John va, on l'espère, bientôt se marier :)");
}

// 1. Créez à présent une variable isMarried pour enregistrer l'état civil de John et, en imaginant qu'il est marié, initialisez-la à true
// 2. Servez-vous à présent de cette variable pour afficher "John est marié !" ou "John va, on l\'espère, bientôt se marier :)" selon qu'il est marié ou pas
// 3. Retestez votre code après avoir changé la valeur de isMarried à false

const isMarried = false;

if (isMarried === true) {
    console.log("John est marié !");
} else {
    console.log("John va, on l'espère, bientôt se marier :)");
}

// 1. Enregistrez la taille et le poids de John (78 kg, 1.69 m) et de Mark (92 kg, 1.95 m) dans 4 variables
// 2. Calculez leur BMI et affichez, selon le cas, "Le BMI de Mark est plus élevé que celui de John" ou "Le BMI de John est plus élevé que celui de Mark"

const jhonWeight = 78;
const jhonHeight = 1.69;
const jhonBMI = jhonWeight / Math.pow(jhonHeight, y=2);

const markWeight = 92;
const markHeight = 1.95;
const markBMI = markWeight / Math.pow(markHeight, y=2);

//const isMarkIsBiggerThanJhon = markBMI > jhonBMI;

if (markBMI > jhonBMI) {
    console.log("Le BMI de Mark est plus élevé que celui de John");
} else {
    console.log("Le BMI de John est plus élevé que celui de Mark");
}
// Écrire un programme qui teste si un nombre entré par l’utilisateur est pair ou impair.

const nombreC = Number(prompt('Veuillez entrer un nombre entier :'));

if (nombreC%2 === 0){
    console.log('Votre nombre est pair');
} else if (nombreC%2 === 1) {
    console.log('Votre nombre est impair');
} else {
    console.log("Le format que vous avez entré n'est pas le format demandé !!");
}