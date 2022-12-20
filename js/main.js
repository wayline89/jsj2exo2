// ## Exercice 1 JavaScript -> Array
// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

const coding = ["coding 20","coding 21","coding 22"];     
console.log(coding)

// 2. Afficher les éléments de l'array

console.log(coding)

// 3. Afficher le nombre d'éléments de l'array

let length = coding.length;
console.log(length)

// 4. Afficher les éléments de l'array 1 par 1
console.log(coding[0])
console.log(coding[1])
console.log(coding[2])

// ## Exercice 2 JavaScript -> Array

// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

const EXO2 = [" UN"," DEUX","TROIS"];     
console.log(EXO2)

// 2. Afficher les éléments de l'array
console.log(EXO2)
// 3. Ajouter et afficher votre prénom a l'array

EXO2.push("laurent")


// ## Exercice 3 JavaScript -> Array
// 1. Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22

const EXO3 = ["quatre","cinq","six"];     
console.log(EXO3)

// 2. Afficher les éléments de l'array

console.log(EXO3)
console.log(EXO3[0])
console.log(EXO3[1])
console.log(EXO3[2])

// 3. Ajouter et afficher votre prenom a l'array
EXO3.push("laurent")
console.log(EXO3)
// 4. Remplacer et afficher un élément de l'array par autre chose

EXO3.splice(1,1,'BOB');
console.log(EXO3)


// ## Exercice 4 JavaScript -> Array


// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

let EXO4 = ["bulle","tasse","ordi"];     
console.log(EXO4)

// 2. Afficher les éléments de l'array

console.log(EXO4)
console.log(EXO4[0])
console.log(EXO4[1])
console.log(EXO4[2])

// 3. Ajouter et afficher votre prenom a l'array

EXO4.push("laurent")
console.log(EXO4)

// 4. Remplacer et afficher un élément de l'array par autre chose

EXO3.splice(1,1,'BOB');
console.log(EXO3)

// 5. Effacer un élément de l'array
console.log(EXO4)

delete EXO4[2];

// 6. Afficher le contenu le d'array


console.log(`EXO4 values: ${EXO4}`);

