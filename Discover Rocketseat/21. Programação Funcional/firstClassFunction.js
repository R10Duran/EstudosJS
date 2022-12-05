// First-class function

const sayMyName = () => console.log('Robert')
const runFunction = fn => fn()  // serve para rodar funções, ela recebe uma função como argumento (fn) e executa uma função (fn())

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random))