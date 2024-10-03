/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

const jhonPointMoyenne = (54 + 794 + 123)/3;
const mikePointMoyenne = (98 + 87 + 122)/3;
const maryPointMoyenne = (97 + 134 + 105)/3;

if (jhonPointMoyenne > mikePointMoyenne && jhonPointMoyenne > maryPointMoyenne){
    console.log(`C'est l'équipe de Jhon qui gagne avec un score moyen de ${jhonPointMoyenne} point.`);
} else if (jhonPointMoyenne < mikePointMoyenne && mikePointMoyenne > maryPointMoyenne) {
    console.log(`C'est l'équipe de Mike qui gagne avec un score moyen de ${mikePointMoyenne} point.`);
} else if (jhonPointMoyenne < maryPointMoyenne && mikePointMoyenne < maryPointMoyenne){
    console.log(`C'est l'équipe de Mary qui gagne avec un score moyen de ${maryPointMoyenne} point.`)
}
else {
    console.log(`Les deux équipes ont un score moyen exactement équivalent avec ${jhonPointMoyenne} point.`);
}




// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
