/*****************************
 * 17 - Les valeurs Truthy et Falsy et les opérateurs d'égalité
 */

// 17 - 1. Les valeurs Truthy et Falsy
// falsy values: undefined, null, 0, '', NaN (correspond aux cas où il n'y a rien)
// truthy values: NOT falsy values (tous les autres cas : il y a quelque chose)

/*
falsy
if (null)
if (undefined)
if (0)
if (null)
if (NaN)

Truthy
tout le reste
*/



// 1. Déclarez la variable height
// 2. Affectez-lui la valeur 23
// 3. Testez si la variable height est définie et affichez "La variable height est définie" ou "La variable height n'est PAS définie" selon le cas
// 4. Testez différents cas de figure en changeant la valeur de height (par exemple 0, ou NaN) ou en ne lui affectant pas de valeur… ATTENTION, votre script doit bien dire que "La variable height est définie" dans le cas où on a donné à height une valeur de 0…
let height = 23;

if (height >= 0){
    console.log("La variable height est définie");
} else {
    console.log("La variable height n'est PAS définie");
}
if (height){
    console.log("Cette variable contient bien une valeur non nulle");
} else {
    console.log("Cette variable est nulle ou non définie");
}
// 17 - 2. Les opérateurs d'égalité
// 1. Écrivrez une instruction conditionnelle qui affiche bien à propos "J'ai testé si 23 était égal à '23' sans vérifier le type. L'opérateur que j'ai utilisé a opéré une conversion de type"
// 2. Changez ensuite en utilisant l'opérateur d'égalité stricte pour vérifier que cette phrase ne s'affiche plus
a = 23;
b= '23';
if (a == b){
    console.log("J'ai testé si 23 était égal à '23' sans vérifier le type. L'opérateur que j'ai utilisé a opéré une conversion de type");
}

if (a === b){
    console.log("J'ai testé si 23 était égal à '23' en vérifier le type. L'opérateur que j'ai utilisé n'a pas opéré une conversion de type");
}