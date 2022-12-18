// Eventos

//mouseover --> quando passa o mouse por cima

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)   //o primeiro parametro é o evento, evento de click no caso, o segundo parâmetro é o atalho da função

function print(){
  console.log('print')
}

//----------------------------------------------------------

//outra maneira de adicionar