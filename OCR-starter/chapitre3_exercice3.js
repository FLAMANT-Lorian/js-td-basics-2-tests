// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
// Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

let hour = 23;
let minute = 59;
let second = 58;

second++;

if (second >= 59){
    second = 0;
    if (minute >= 59){
        minute = 0;
        if (hour >= 23){
            hour = 0;
        }
    }
} else {
    hour++;
}
console.log(`Il est exactement ${hour} heures, ${minute} minutes et ${second} secondes`);


/*
let hour = 23;
let minute = 59;
let second = 59;

second++;

if (second > 59) {
    second = 0;
    minute++;
    if (minute > 59) {
        minute = 0;
        hour++;
        if (hour > 23) {
            hour = 0;
        }

    }
}
console.log(`Il est exactement ${hour} heures, ${minute} minutes et ${second} secondes`);
*/

