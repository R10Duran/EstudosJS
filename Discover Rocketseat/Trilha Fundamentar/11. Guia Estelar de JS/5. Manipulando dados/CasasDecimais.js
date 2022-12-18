//Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
let number = 524122532.56655565
console.log(number.toFixed(2).replace('.', ',')) // toFixed é atrelada ao number, escolhemos dentro dele quantas casas decimais queremos e a função replace podemos usar para trocar um caractere, o primeiro valor é o que queremos trocar o segundo é pelo o que será trocado.
