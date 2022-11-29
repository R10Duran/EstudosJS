// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header') // estou adicionando atributo do tipo id ao header com o nome header

const headerID = document.querySelector('#header') // pesquisei no documento pelo id header

// Ao invés de só definir, podemos pegar os atributos que existem lá dentro, conforme exemplo abaixo
console.log(headerI.getAtribute('id')) //get (pegar), estou pegando o atributo id, mas poderia ser uma class por exemplo
console.log(headerI.getAtribute('class')) // pegando o atributo pela clase, vai retornar a classe 'manipulando do header

header.removeAttribute('id') // eu posso remover o atributo desejado, por exemplo, estou removendo o atributo id do header
header.removeAttribute('class') // de igual forma posso remover a classe caso necessário do header, deixando o exemplo do header limpinho

//setAttribute() --> permite que coloquemos o que desejamos adiconar, por exemplo, poderia querer adicoonar varias classes seguindo o exemplo abaixo
header.setAttribute('class', 'bg header etc') // adicionando classes através do set attribute