// Manipulando conteúdo
// textContent
const element = document.querySelector('h1')

element.textContent +=
  ' Olá Devs, eu sou uma palavra manipulada com textContent' // alterei o conteúdo de texto do elemento e também consigo pegar ele e adicionar algo na frente caso queira concatenar, por exemplo, para isso basta colocar o += na frente

console.log(element.textContent)
