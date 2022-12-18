// Navegando pelos elementos
// childNodes children
const el = document.querySelector('body')

console.log(el.childNodes) // vai pegar todos os filhos em formato de nodeList, ou seja, vai trazer os espaços que também há
console.log(el.children) // traz em formato de HTML collection, onde traz apenas o HTML, sem levar em conta os espaços vazios

// firstChild firstElementChild
console.log(el.firstChild) // pega o primeiro elemento, incluisive o espaço(texto vazio)
console.log(el.firstElementChild) //pega o primeiro elemento sem levar em consideração o espaço vazio,
// lastChild lastElementChild
console.log(el.lastChild) // faz o mesmo que o firstChild porém com o último elemento, seja ele espaço ou html
console.log(el.lastElementChild) // faz o mesmo que o firstChild porém com o último elemento html
