//const e let são locais e só funcionam no escopo onde foi criada
// ele não faz hoisting
// posso declarar variável de mesmo nome em escopo diferentes com let, por exemplo
console.log('existe y antes do bloco?', y)

{
  let y = 0
}

// console.log('existe y depois do bloco?', y)