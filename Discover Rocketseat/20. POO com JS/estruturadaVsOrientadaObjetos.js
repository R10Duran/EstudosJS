// Estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10/100)
var custoEstimado = valorHora * tempoEstimado - desconto 
console.log(custoEstimado)

// POO
const job = new Job()
job.valorPorHora = 50
job.tempoEstimadoJob = 20
job.descontoJob = 10 
const custoEstimadoJob = job.calcularEstimatica()
console.log(custoEstimadoJob)
// No exemplo orientado a objeto a organização é feita de melhor forma