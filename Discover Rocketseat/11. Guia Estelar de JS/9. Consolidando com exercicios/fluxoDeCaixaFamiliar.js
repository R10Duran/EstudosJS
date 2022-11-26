/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let fluxoFamilia = {
  receita: [2300, 522, 300],
  despesa: [1850, 5000]
}

function soma(array) {
  let total = 0
  for (let value of array) {
    total += value
  }

  return total
}

function calcularFluxo() {
  const calcularReceita = soma(fluxoFamilia.receita)
  const calcularDespesa = soma(fluxoFamilia.despesa)

  const total = calcularReceita - calcularDespesa

  const saldoPositivo = total >= 0
  let saldoTexto = 'negativo'

  if (saldoPositivo) {
    saldoTexto = 'Positivo'
  }

  console.log(`Seu saldo é ${saldoTexto}:R$ ${total.toFixed(2)}`)
}

calcularFluxo()
