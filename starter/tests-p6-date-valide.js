/*
TESTS - PRÉPA 6 : Date valide

Écrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas.

AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
- le 31 janvier 2019 est une date valide
- le 28 février 2019 est une date valide
- le 29 février 2019 n'est PAS une date valide
- le 29 février 2020 est une date valide
- le 30 février 2020 n'est PAS une date valide
- le 30 avril 2020 est une date valide
- le 31 avril 2020 n'est PAS une date valide

Étapes :
1. Demandez à l'utilisateur d'entrer une date sous forme de jour, mois et année, puis stockez ces valeurs dans des variables (par exemple, day, month, year).
2. Initialisez une variable maxDays pour stocker le nombre maximum de jours autorisés pour le mois.
3. Utilisez une série de conditions pour déterminer maxDays en fonction du mois (y compris le cas de février avec gestion bissextile).
4. Utilisez une autre condition pour vérifier si la date est valide en comparant le jour entré par l'utilisateur avec maxDays.
5. Affichez dans la console si la date est valide ou non : "La date … est valide" ou "La date … n'est PAS valide".

N'oubliez pas de tester votre programme avec diverses dates pour vous assurer qu'il fonctionne correctement.

Vous pouvez utiliser les exemples que vous avez fournis comme point de départ.
*/

// Solution 1
/*
const day = parseInt(prompt('Indiquer le jour (en nombres) :'));
const month = String(prompt('Indiquer le mois (en lettres sans majuscule) :'));
const years = parseInt(prompt("Indiquer l'année (en nombres):"));
let maxDay;


if (month === 'février' && years > 0 && day <=29) {
    if ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0) && day === 29) {
        console.log(`La date : ${day} ${month} ${years} existe bien.`);
        } else if (day >= 28){
            console.log(`La date : ${day} ${month} ${years} existe bien.`);
        } else {
        console.log(`La date : ${day} ${month} ${years} n'existe pas.`);
    }
} else if (month === 'janvier' || month === 'mars' || month === 'mai' || month === 'juillet' || month === 'août' || month === 'octobre' || month === 'décembre' && years > 0 && day <= 31){
    maxDay = 31;
    if (day <= maxDay){
    console.log(`La date : ${day} ${month} ${years} existe bien.`);
    } else {
        console.log(`La date : ${day} ${month} ${years} n'existe pas.`);
    }
} else if (month === 'avril' || month === 'juin' || month === 'septembre' || month === 'novembre' && years > 0 && day <= 30) {
    maxDay = 30;
    if (day <= maxDay){
        console.log(`La date : ${day} ${month} ${years} existe bien.`);
    } else {
        console.log(`La date : ${day} ${month} ${years} n'existe pas.`);
    }
} else {
    console.log(`La date : ${day} ${month} ${years} n'existe pas.`);
}
*/

// Solution 2 : la meilleure
const day = parseInt(prompt('Indiquer le jour (en nombres) :'));
const month = parseInt(prompt('Indiquer le mois (en nombres) :'));
const years = parseInt(prompt("Indiquer l'année (en nombres):"));
let maxDays = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        maxDays = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        maxDays = 30;
        break;
    case 2:
        maxDays = 28;
        if (year % 4 === 0 && year % 100 !== 0) {
            maxDays = 29;
        } else if (year % 400 === 0) {
            maxDays = 29;
        }
        break;
}

if (day && month && years) { // Valeurs thrusty et falsy, elles doivent toutes êtres true pour que ça fonctionne, ca doit être des nombes partout pour que ça marche (exemple : si on met toto a day , ca va faire parsInt('toto') et nous retourné 'NaN' donc False !
    if (day > 0 && month > 0 && years > 0) {
        if (month >= 1 && month <= 12) {
            if (day <= maxDays) {
                console.log(`La date ${day} / ${month} / ${year} existe bien !`);
            } else {
                console.log(`Le nombre du mois ${month} doit être inférieur à ${maxDays}`);
            }
        } else {
        console.log('Le mois doit être compris entre 1 et 12 !');
        }
    } else {
        console.log("le jour, le mois et l'année doivent être positifs !");
    }
} else {
    console.log("le jour, le mois et l'année doivent être des nombres !");
}