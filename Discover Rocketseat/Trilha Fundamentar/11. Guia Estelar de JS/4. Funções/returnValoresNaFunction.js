//function expression
//função anônima (não tem um nome)
// sum = somar

//parametros da função (number1 e number2)
const sum = function (number1, number2) {
  let total = number1 + number2
  return total // Se não tiver o return, irá retornar Undefined
}

let number1 = 34
let number2 = 25

sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma do number1 e number2 é ${sum(number1 + number2)}`)
console.log(total)


// ============================================================================


//Outra maneira de entender funções

function fazerSuco(fruta1, fruta2){
  return 'Suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã') //const copo recebe o suco

console.log(copo)
