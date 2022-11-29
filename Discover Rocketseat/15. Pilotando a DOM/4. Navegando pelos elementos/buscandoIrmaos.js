// Navegando pelos elementos

const brothers = document.querySelector('body script')

// nextSibling nextElementSibling
console.log(brothers.nextSibling) // pega o próximo irmão, mesmo que seja um espaço vazio
console.log(brothers.nextElementSibling) // vai pegar o próximo irmão(primeiro) (html) que no caso será o 'script'

// previousSibling previousElementSibling
console.log(brothers.previousSibling) // leva em consideração os espços vazios e pega o irmão anterior seja texto ou html
console.log(brothers.previousElementSibling) // não leva em consideração o espaço vazio, ele pega o irmão anterior
