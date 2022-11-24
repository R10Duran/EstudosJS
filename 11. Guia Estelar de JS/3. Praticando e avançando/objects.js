// object

const person = {
  name: 'Robert',
  age: 21,
  wight: 71.5,
  isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

const pessoa = {
  nome: 'Felipe',
  idade: 18,
  endereco: {
    rua: 'rua',
    numero: 12
  }
}

console.log(
  `${pessoa.nome} mora na rua ${pessoa.endereco.rua} numero: ${pessoa.endereco.numero}`
)
