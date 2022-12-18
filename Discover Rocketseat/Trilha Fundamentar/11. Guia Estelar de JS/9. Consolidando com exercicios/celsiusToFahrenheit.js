/*
### Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    
C = (F - 32) * 5/9 
F = C * 9/5 + 32
*/

//transforme
function transformeGrau(grau) {
  const celsiusExiste = grau.toUpperCase().includes('C')
  const fahrenheitExiste = grau.toUpperCase().includes('F')

  if (!celsiusExiste && !fahrenheitExiste) {
    throw new Error('Grau não identificado')
  }

  // fluxo fahrenheit para celsius
  let updateGrau = Number(grau.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  grauSign = 'C'

  // fluxo celsius para fahrenheit
  if (celsiusExiste) {
    updateGrau = Number(grau.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    grauSign = 'F'
  }

  return formula(updateGrau) + grauSign
}

try {
  console.log(transformeGrau('50F'))
  console.log(transformeGrau('10C'))
  transformeGrau('10z')
} catch (error) {
  console.log(error.message)
}
