//Créer une méthode qui supprime le dernier élément d’une méthode//
let prenom1 = ['Calderon', 'Ilyana', 'Nohlan', 'Adryan'];
console.log(prenom1);
let supprDernier = prenom1.pop();
console.log(prenom1);
//Créer une méthode qui ajoute un nouvel élément à un tableau (à la fin)//
let ajoutFin = prenom1.push('Samuel');
console.log(prenom1);
//Créer un nouveau tableau en fusionnant (concaténant) des tableaux existants.//
let prenom2 = ['Graziella', 'Jean', 'Sylvie'];
let prenoms = prenom1.concat(prenom2);
console.log(prenoms);
//Créer une méthode qui ajoute un nouvel élément à un tableau (au début) et "décale" les
//anciens éléments
let ajoutDebut = prenoms.unshift('Loevan');
console.log(prenoms);
//Créer une méthode qui convertit un tableau en une chaîne de valeurs de tableau (séparées
//par des virgules).
document.write(prenoms);
//Écrivez un programme JavaScript simple pour joindre tous les éléments du tableau suivant
//dans une chaîne.
let myColor = ["Red","Green","White","Black"];
let chaine = new String(myColor);
console.log(chaine);
//Écrivez un programme JavaScript pour trier les éléments d'un tableau.
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort();
document.write(arr1.join(", "));
//Écrivez un programme JavaScript pour trouver l'élément le plus fréquent d'un tableau. 
let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let taille = arr2.length;
for (i =0; i < taille; i++) {
    var count = 0;
   // console.log(count)
    for (j = 0; j < taille; j++) {
        if (arr2[i] == arr2[j])
        count++;
       // console.log([j])
       // console.log(count)
        console.log("L'élément le plus fréquent dans le tableau est le :" + arr2[i] + " " + count + " fois");
    }
};