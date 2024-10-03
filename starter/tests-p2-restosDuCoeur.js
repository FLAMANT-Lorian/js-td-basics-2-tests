/*
TESTS - PRÉPA 2 : Les restos du cœur

Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.

Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.

Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

// 1. Demandez à l'utilisateur d'entrer le montant total des achats.
// 2. Vérifiez si le montant des achats est supérieur à 25€.
//    a) Si la condition est vraie, calculez la remise de 10% sur le montant total (0.1 * montant total).
//    b) Si la condition est fausse, la remise est de 0€.
// 3. Vérifiez si la remise est supérieure à 5€.
//    a) Si la condition est vraie, calculez la somme versée aux restos du cœur en prenant 10% de la remise (0.1 * remise).
//       Assurez-vous que le montant versé aux restos du cœur ne dépasse pas 2€ (utilisez Math.min(2, montant versé)).
//    b) Si la condition est fausse, la somme versée aux restos du cœur est de 0€.
// 4. Affichez la somme versée aux restos du cœur dans la console.

const montantTotale = Number(prompt('Veuillez entrer le montant totale de vos achats :'));

if (montantTotale > 25) {
    const ristourne = (0.1 * montantTotale);
        if (ristourne > 5){
           let don = 0.1 * ristourne;
           don = Math.min(2, don);
            console.log(`Vous avez versé ${don} € aux restos du cœur.`)
        } else {
            console.log(`Vous n'avez pas versé d'argent aux restos du cœur.`);
        }
} else {
    console.log(`Vous n'avez pas versé d'argent aux restos du cœur.`);
}

