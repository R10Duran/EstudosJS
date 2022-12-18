/*
Operadores unários

Typeof
delete

*/
console.log(typeof 'Robert') //Typeof vai saber qual o tipo de dado

const person = {
  name: 'Robert',
  age: 25
}
delete person.age //vai procurar a propriedade dentro do objeto e vai deletar aquela propriedade desde que a propriedade exista
console.log(person)
