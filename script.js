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
let mf = 1;
let m = 0;
let item;
for (i = 0; i < arr2.length; i++) {
    for (j = i; j < arr2.length; j++)
    {
        if (arr2[i] == arr2[j])
        m++;
        if (mf<m)
        {
            mf=m;
            item = arr2[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" fois ) ");
//Écrivez un programme JavaScript pour ajouter des éléments dans un tableau vide et afficher les éléments.
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
//On a les tableaux suivants : 
//color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"]
//Ecrire un programme JavaScript pour afficher les couleurs de la manière suivante :
//"1st choice is Blue ."
//"Le 2e choix est vert."
//"Le 3ème choix est Rouge."
let color = ["Bleu ", "Vert ", "Rouge ", "Orange ", "Violet ", "Indigo ", "Jaune "];
function Ordinal(n)
{
let o = ["ème", "er"],
x = n%100;
return x+(o[(x-20)%10] || o[x] || o[0]);
}
for(n = 0; n < color.length; n++){
    let ordinal = n + 1;
    let output = (Ordinal(ordinal) + " choix est " + color[n] + ".");
    console.log(output);
}
//Écrivez un programme JavaScript pour trouver les années bissextiles dans une plage d'années donnée.
function année_rang(debut_année, fin_année) {
    let année_rang = [];
    for (i = debut_année; i <= fin_année; i++) {
        année_rang.push(i);
    }
    let new_array = [];

    année_rang.forEach(
        function(année) {
            if (test_année(année))
            new_array.push(année);
        });
    return new_array;
}

function test_année(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 100 === 0 && année % 400 === 0)) {
        return année;
    } else {
        return false;
    }
}
console.log(année_rang(2000,2012));
//Écrivez un programme JavaScript pour mélanger un tableau
function shuffle(arra1) {
    let ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
//Écrivez un programme JavaScript pour effectuer une recherche binaire.
function binaire_search(items, value){
    let firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

        while(items[middleIndex] != value && firstIndex < lastIndex) {
            if (value < items[middleIndex]) {
                lastIndex = middleIndex - 1;
            }
            else if (value > items[middleIndex]) {
                firstIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lastIndex + firstIndex)/2);
        }
        return (items[middleIndex] != value) ? -1 : middleIndex;
}
let items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binaire_search(items, 1));
console.log(binaire_search(items, 5));
