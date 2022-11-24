// Manipulando Strings e Números

// Separe o texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram textos onde eram espaços, coloque _

let frase = 'Eu quero ter um amor'
let myArray = frase.split(" ") // split recebe por argumento o que eu quero separar nessa frase (pode separa por espços no texto, por letras, numeros etc)
console.log(myArray)

let fraseArray = myArray.join("_") //Método join aplicado em um array vai juntar o que eu passar de parâmetro
console.log(fraseArray)