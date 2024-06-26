
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

<<<<<<< HEAD
const { arrow1 } = require("./04_arrow")

const multiplyByTwo =(array)=>{(value)=>value
  return array.map=array
}
=======
const multiplyByTwo = (array) => array.map( (value)  => value * 2 )

>>>>>>> a5a5389a8148df444cf987bb5d54e819dfa03b07


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

<<<<<<< HEAD
const filterNameStartByA= (array)=>array.filter ((value)=>value[0]==="A")
=======
const filterNameStartByA = (array) => array.filter( (value) => value[0] === '5' )

// 5 == "5" // true
// 5 ==="5" // false

>>>>>>> a5a5389a8148df444cf987bb5d54e819dfa03b07
/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */
<<<<<<< HEAD
const array =[1, 2, 3, 4, 5]
const sum (array)=>array.reduce ((acc,value)=> acc+value , 0)
=======

const array = [1,2,3,4,5]

const sum = (array) => array.reduce( (acc, value) => acc + value, 0 )
>>>>>>> a5a5389a8148df444cf987bb5d54e819dfa03b07
/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => array.find( (value) => value.id === id ).name


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};