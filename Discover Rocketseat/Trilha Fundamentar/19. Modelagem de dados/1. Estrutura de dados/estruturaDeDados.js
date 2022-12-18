// Estruturar dados

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// aindexação (index) começa pelo 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// acessar o tamnho do array
console.log(pilotos.length)

// iterável
// Estruturas iteráveis podem ser usadas com for of
for (let piloto of pilotos) {
  console.log(piloto) //faz uma lista uma abaixo da outra com a informação piloto trazendo o nome de cada um
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna') // para cada piloto dentro de pilotos vai rodar a função e vai pegar o piloto e coloicar na função como argumento
console.log(senna)
// se tiver muitos dados no array não é muito interessante o uso do find, pois ele irá verificar 1 a 1 para ver se bate com a informação desejada

// Deletar um elemento
pilotos.splice(1, 1) // da posição 1 delete o 1 elemento
console.log(pilotos)

//----------------------------------------------------------------------------------------------------------------------------------

// Matriz ou Array Multidimencional (array dentro de array)

const students = [
  ['Joseph', 23, 'MG'],
  ['Robert', 22, 'SP'],
  ['Priscila', 30, 'SP']
]
console.log([0][1]) // no arrat de posição 0, ou seja, Joseph, pegue o segundo array de posição 1, ou seja 23.

//----------------------------------------------------------------------------------------------------------------------------------

// Stack (pilha)

// passo 1: Modelando
class stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++ // adicionando mais um ao top, fazendo ele se tornar zero
    this.data[this.top] = value // o data recebe na posição 0, o valor que coloco no top
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top] // deletando o ultimo elemento, após isso temos que referenciar o decremento abaixo
    this.pop-- //decrementando o elemento pop, pois deletamos 1
    return poppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined // Se o this.top for maior ou igual a zero então pegue o ultimo da pilha, se não undefined pois não tem o ultimo da pilha
  }
}

// passo 2: Utilizando
const stack = new stack() //referencia o Stack com o new e assim torna-se um novo objeto

// Adicionar os dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek()) // lê o ultimo elemento

// remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())

//----------------------------------------------------------------------------------------------------------------------------------

// Passo 1: Modelando
class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
  }
}

// Passo 2: Utilizando
const fila = new Queue()

// Ordem de entra dos elementos
fila.enqueue('Hebert')
fila.enqueue('Priscila')
fila.enqueue('Robert')
fila.enqueue('Luiza')
fila.enqueue('Carlos')
fila.dequeue() // ordem de saída dos elementos
fila.dequeue()
fila.dequeue()
