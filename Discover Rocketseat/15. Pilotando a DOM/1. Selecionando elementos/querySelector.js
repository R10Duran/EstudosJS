//querySelector();
//pegue pelo seletor, seletor CSS, pesquise pelo seletor
// querySelector pega o primeiro que ele achar na página


//const element = document.querySelector('[src]')
//console.log(element)

//------------------------------------------------------------

// o All no final pega todos os seletores que tem o atributo (src), traz uma coleção de nós
const elements = document.querySelectorAll('#teste-title')
console.log(element)

//querySelectorAll() --> aceita que se use o forEach, já o getElementByClass() não aceita
elements.forEach(el=> console.log(el))