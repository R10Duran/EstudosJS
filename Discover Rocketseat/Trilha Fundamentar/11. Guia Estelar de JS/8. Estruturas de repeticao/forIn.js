// for...in
// Cria um loop em cima de um objeto

let pessoa = {
  nome: 'Robert',
  idade: 22,
  peso: 71.5
}

for (let property in pessoa) {
  console.log(property)
  console.log(pessoa[property])
}
