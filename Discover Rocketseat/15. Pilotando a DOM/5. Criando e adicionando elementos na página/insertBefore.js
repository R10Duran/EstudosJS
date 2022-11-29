// Criando e adicionando elementos

// CreatElement
const div = document.createElement('div') // criando uma div
div.innerText = 'Olá Devs'

// append prepend (escolhendo o ponto onde adicionar a div)
const body = document.querySelector('body')

body.append(div) //adicionando a div depois do body
body.prepend(div) //vai adicionar a div antes do header, lá no body, vai ser o primeiro elemento a ser adicionado no body

// insertBefore (insira antes) usado por exemplo quando queremos posicionar entre divs e elementos
const script = body.querySelector('script')
body.insertBefore(div, script) // recebe dois argumentos, o primeiro qual tag vou adicionar e o segundo vai ser o nó de referência, insira a div antes da primeira tag que achar script no body


// Para adicionar depois, não há a tag afterSelector
// por exemplo:
body.insertBefore(div, header.nextSibling)