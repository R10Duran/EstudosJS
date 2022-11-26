//document.querySelector('.tecla_pom'); (querySelector seleciona o primeiro elemento)
//document.querySelector('#som_tecla_pom').play();
//document.querySelectorAll('.tecla')  (querySelectorAll seleciona todos os elementos com o seletor indicado)
//document.querySelectorAll('.tecla').onclick = playSomPom (para ficar mais fácil fazemos uma constante que armazena os valores e chamamos eles pelo seu indice, conforme abaixo)
/*
Eventos no teclado:
onkeydown e onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

Condições no código e operadores lógicos:
estrutura condicional if e else, operador de igualdade ==, estritamente igual (===), e o operador or (||).

Mais condições:
O operador not equals (!=), operador lógico and (&&) e o valor null.

function playSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')
//Usando laço for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]

  // template string
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    playSom(idAudio)
  }

  tecla.onkeydow = function (evento) {
    //onkeydow = quando a tecla é pressionada
    if (evento.code === 'Space' || evento.code == 'Enter') {
      tecla.classList.add('ativa')
      console.log(evento)
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa') //onkeyup = quando a tecla é soltada
  }
}

//let contador = 0
/*
//Enquanto
while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]

  // template string
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    playSom(idAudio)
  }

  contador += 1
  // console.log(contador)


}
*/
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)

  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou seletor inválido')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}` //template string

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
