//const subtrair = document.querySelector('#subtrair')
//const somar = document.querySelector('#somar')

/*
// evento de clique nos braços para somar
somar.addEventListener('click', evento => {
  braco.value = parseInt(braco.value) + 1 // pegue a const braco e seu value e adicione 1, a função parseInt irá transformar a string em número, permitindo a inclusão de forma normal (1, 2 ,3) e não (123) como se fosse string.
})

subtrair.addEventListener('click', evento => {
  braco.value = parseInt(braco.value) - 1 // pegue a const braco e seu value e adicione 1, a função parseInt irá transformar a string em número, permitindo a inclusão de forma normal (1, 2 ,3) e não (123) como se fosse string.
})
*/

// função para descobrir qual elemento foi clicado usando o array trazido pelo queySelectorAll
// adicionamos no forEach o elemento que queremos percorrer, seu evento e

/*
somar.addEventListener('click', () => {
  //dessa forma passamos para a função de clique apenas quem queremos chamar, que no caso é o manipilaDados que vai fazer a sua condicional
  manipulaDados('somar')
})
subtrair.addEventListener('click', () => {
  manipulaDados('subtrair')
})
*/
// Dessa forma trouxe os dados de manipulação a um só lugar, dessa forma preciso mandar os dados para aquele lugar que a operação será realizada

const controle = document.querySelectorAll('[data-controle]') // buscando todos elementos com data-controle
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //o target mostar onde aconteceu o evento, onde o clique aconteceu, o textContent vai buscar o texto, quando for input ao invés de textContent usamos value
    //console.log(evento.target.parentNode) // eu busco o elemento acima, o elemento pai exato
    atualizaEstatistica(evento.target.dataset.controle)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')

  if (operacao === '-') {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatistica(peca){
  estatisticas.forEach((elemento) =>{
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}