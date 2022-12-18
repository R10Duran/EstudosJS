/*

function() constructor

  *expressão new
  *criar um novo objeto
  *this keyword 

*/

function Person() {
  this.name = this.name //vai referenciar o robert lá fora e o robert vai referenciar o this aqui dentro
  this.walk = function(){
    return this.name + "está andando"
  }
}
      //objeto
const robert = new Person("Robert")
const carlos = new Person("Carlos")
console.log(robert.walk())
console.log(carlos.walk())

