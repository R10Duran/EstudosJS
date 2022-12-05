// Função Impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro
function calculateCircunference(radius){ // como o Math não foi colocado como parâmetro, se algo acontecer la fora e alterar o Math.PI, ela podera apresentar inconsistencias
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
  nome: 'Robert Duran',
  idade: 'Jovem'
}

function changeName(nome){
  person.nome = nome
}


// Função Pura

// Exemplo 1: 
const calculateCircunference = function(pi, radius){
  return pi * (radius + radius)
} // a função está pura, não depende de nada externo para poder ser executada sem problemas e sem efeitos colaterais

// com arrow function
const calculateCircunference = (pi, radius) =>
  pi * (radius + radius) // mesma ideia que a de cima, porém com arrow function

const changePersonName = (person, nome) => ({...person, nome}) // pega um novo objeto pessoa para poder alterar o nome da pessoa