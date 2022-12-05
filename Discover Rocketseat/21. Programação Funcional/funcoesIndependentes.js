// Funções Independetes

const random = (number, Math) => // preciso passar a Math para ela pois está no mundo externo, preciso receber ela para dentro da função como foi feito acima (number, Math)
  Math.floor(Math.random() * number)

// recursive
// find the factorial of a number
const factorial = x => {
  // if number is 0
  if (x === 0){
    return 1
  }
  return x * factorial(x - 1)
}