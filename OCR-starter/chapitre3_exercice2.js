// Baccalauréat

/*
1. Stockez la moyenne du candidat (un nombre) dans une constante.
2. Écrivez un test qui affiche dans la console :
   - "Le candidat est recalé" si la moyenne est inférieure à 10.
   - "Le candidat est reçu" si la moyenne est entre 10 et 12.
   - "Le candidat est reçu avec mention" si la moyenne est supérieure ou égale à 12.
*/

// Exemple : si la moyenne du candidat est de 11, le programme devrait afficher "Le candidat est reçu."

// N'oubliez pas de tester votre programme avec différentes moyennes pour couvrir tous les cas de figure.

const moyenneCandidat = 11;

if (moyenneCandidat < 10){
    console.log("Le candidat est recalé.");
} else if (moyenneCandidat > 10 && moyenneCandidat < 12){
    console.log("Le candidat est reçu.");
} else if  (moyenneCandidat >= 12 && moyenneCandidat <= 20) {
    console.log("Le candidat est reçu avec mention.");
} else {
    console.log("Erreur : la note de l'étudiant(e) doit être compris entre 0 et 20 !");
}