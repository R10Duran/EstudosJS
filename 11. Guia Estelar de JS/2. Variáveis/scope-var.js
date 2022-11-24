/*

* Scope
  #escopo determina a visibilidade de alguma variável no JS

* Block statement (declaração de bloco)
``` js

//iniciando um bloco
{

  //aqui dentro é um bloco e posso colocar qualquer código


} //aqui fechamos o bloco

  # o bloco também criará um novo escopo. Chamamos de `block-scoped`

*/

//var é global e também local
var x
console.log('>existe x antes do bloco?', x)
//hoisting (elevação)
{
  x = 0
}

console.log('existe x depois do bloco?', x)
