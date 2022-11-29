// Eventos
const input = document.querySelector('input')

input.onkeydown = function () {
  console.log('roda para baixo quando clicado para baixo')
}

input.onkeyup = function () {
  console.log('roda para cima quando clicado para cima')
}

input.onkeypress = function () {
  console.log('roda a tecla ao ser pressionado')
}
