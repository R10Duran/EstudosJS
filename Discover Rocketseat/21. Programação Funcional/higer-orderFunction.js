// Higher-order function

const numbers = [2,4,8,16]

const square = n => n * n // SQUARE = AO QUADRADO

const squareNumber = numbers.map(square) // cada array de numbers vai passar por um map e vai retornar um novo array com os números ao quadrado, ou seja, a lógica informada irá passar por cada elemento e irá retornar um novo array com o resultado.

// Exemplo de um retorno de função
// (curryring ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600) (() => console.log('Waiting 600ms'))
// pause é a primeira função  e a segunda é a arrow function e recebendo os dois valores informados por ela fn e o wait

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('Waiting 200ms'))
wait1000(() => console.log('Waiting 1000ms'))