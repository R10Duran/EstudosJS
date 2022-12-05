// Composição de funções

const people = ['Robert','Luiza','Carlos','Felipe','Larissa','Duran']
const upperCasePeopleThatStartsWithD = people
  .filter(person => person.startsWith('D')) // filter recebe como argumento uma função, caso a pessoa comece com D maiusculo ela retorna a função
  .map(dperson => dperson.toUpperCase()) // Retorna o novvo array com a pessoa que estiver letra D, tudo com letra maiuscula