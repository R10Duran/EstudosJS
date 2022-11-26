/*
### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 D
* menor que 60 - F
*/

function getNota(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota < 60 && nota >= 0

  let NotaFinal

  if (notaA) {
    NotaFinal = 'A'
  } else if (notaB) {
    NotaFinal = 'B'
  } else if (notaC) {
    NotaFinal = 'C'
  } else if (notaD) {
    NotaFinal = 'D'
  } else if (notaF) {
    NotaFinal = 'F'
  } else {
    NotaFinal = 'Inválida'
  }
  return NotaFinal
}

console.log(getNota(101))
console.log(getNota(-1))
console.log(getNota(10))
console.log(getNota(65))
console.log(getNota(95))
console.log(getNota(88))
console.log(getNota(55))
console.log()
