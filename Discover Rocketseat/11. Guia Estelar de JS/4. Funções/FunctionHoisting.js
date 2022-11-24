// functions hoisting (funções que sofrem elevação)

//essa função assume hoisting (como se ela viesse antes do parametro sayMyName)
sayMyName()

function sayMyName(){
  console.log('Robert')
}

// constante recebendo função anonima não sofre hoinsting, como esse exemplo abaixo... var também não sofre elevação
const sayMyName = function(){
  console.log('Robert')
}