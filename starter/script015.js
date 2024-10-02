/*****************************
 * 15 - Logique booléenne
 */

// Préliminaires
/*
(source : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions)
*/

// 15-1. - LES OPÉRATEURS LOGIQUES

// 1°) L'opérateur logique ET

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true ET false
// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false

// Une condition qui utilise l'opérateur logique ET

const a = 14;
if (a> 10 && a<16) {
    console.log('GOOD !');
} else {
    console.log('NOT GOOD !');
}
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Testez si le nombre est dans l'intervalle [0, 100]. Autrement dit, testez si 0 <= nombre <= 100. Si c'est le cas, affichez "… est compris entre 0 et 100".

const userNumberA = Number(prompt('Veuillez entrer un nombre :'));
if (userNumberA >= 0 && userNumberA <= 100){
    console.log(`${userNumberA} est compris entre 0 et 100`);
}

// 2°) L'opérateur logique OU

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true OU false
// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
console.log(true || true); // True
console.log(true || false); // True
console.log(false || false); // False
console.log(false || true); // True
// Une condition qui utilise l'opérateur logique OU

const b = 12
if (b > 10 || b === 15){
    console.log('GOOD !')
}
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Testez si le nombre est en dehors de l'intervalle [0, 100]. Si c'est le cas, affichez "… est en dehors de l'intervalle [0, 100]".

const userNumberB = Number(prompt('Veuillez entrer un nombre :'));
if (userNumberB > 100 || userNumberB < 0){
    console.log(`${userNumberB} est n'est pas compris entre 0 et 100`);
}
// 3°) L'opérateur logique NOT

// Affichez dans la console le résultat NOT true puis le résultat de NOT false

console.log(!true);
console.log(!false);

// Une condition qui utilise l'opérateur logique NOT

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Si ce nombre n'est pas supérieur à 100, affichez "… est inférieur ou égal à 100".

const userNumberC = Number(prompt('Veuillez entrer un nombre :'));
if (!(userNumberC > 100)){
    console.log(`${userNumberC} est inférieur ou égal à 100`);
}

// 15-2. - LES ALTERNATIVES MULTIPLES

// 1°) Imbriquer des conditions
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Si ce nombre est positif, affichez "… est positif", sinon (c'est donc qu'il est négatif ou nul), vous allez faire un sous-test :
// 1°) s'il est négatif, affichez "… est négatif",
// 2°) sinon, affichez "… est nul"

const userNumbersD = Number(prompt('Veuillez entrer un nombre :'));
if (userNumbersD > 0) {
    console.log(`${userNumbersD} est positif`);
} else {
    if (userNumbersD < 0) {
        console.log(`${userNumbersD} est négatif`);
    } else {
            console.log(`${userNumbersD} est nul`);
    }
}

// 2°) Autre écriture pour le même test : le if / else if / else
// BUT : réaliser le même test que l'exercice précédent mais avec l'écriture if / elseif / else
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
// 2. Affichez "… est positif", "… est négatif" ou "… est nul" selon le cas

if (userNumbersD > 0){
    console.log(`${userNumbersD} est positif`);
} else if (userNumbersD < 0){
    console.log(`${userNumbersD} est négatif`);
} else {
    console.log(`${userNumbersD} est nul`);
}

// Une application

// 1. Stockez le prénom de la personne dans une variable firstName
// 2. Stockez son âge dans une variable age
// 3. a) Si la personne a moins de 13 ans, affichez le message "… est un petit garçon."
// b) Si elle a entre 13 et 20 ans, affichez "… est un adolescent."
// c) Si elle a entre 20 et 30 ans, affichez "… est un jeune homme."
// d) sinon, affichez "… est un homme."

const firstName = prompt('Quel est votre prénom ?');
const age = Number(prompt('Quel est votre age ?'));
if (age < 13){
    console.log(`${firstName} est un petit garçon.`);
} else if (age > 13 && age <= 20){
    console.log(`${firstName} est un adolescent.`);
} else if (age > 20 && age <= 30){
    console.log(`${firstName} est un jeune homme.`);
} else {
    console.log(`${firstName} est un homme.`)
}

// Autre application

// 1. Demandez à l'utilisateur d'entrer l'information
//  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
//  soleil, vent, pluie ou neige."
// 2. Stockez cette information dans une variable meteo
// 3. a) s'il fait soleil, affichez le message "Sortez en t-shirt."
// b) s'il y a du vent, affichez "Sortez en pull."
// c) s'il pleut, affichez "Sortez en blouson."
// d) s'il neige, affichez "Restez au chaud à la maison."
// e) dans tous les autres cas (si la personne n'a

const meteo = prompt("Quel temps fait-il dehors ? \n --> Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.");
if (meteo === 'soleil'){
    console.log("Sortez en t-shirt.");
} else if (meteo === 'vent') {
    console.log("Sortez en pull.");
} else if (meteo === 'pluie') {
    console.log("Sortez en blouson.");
} else if (meteo === 'neige') {
    console.log("Restez au chaud à la maison.");
} else {
    console.log('ERREUR : veuillez renseignez un des 4 mots proposés');
}










