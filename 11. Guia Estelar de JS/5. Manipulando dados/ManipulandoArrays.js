//Manipulando arrays

let techs = ['html', 'css', 'js']

// adicionar um elemento no fim
console.log(techs.push('nodejs'))

// adicionar no começo
console.log(techs.unshift('sql'))

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 4)) //slice vai (cortar) vai alterar sem mudar posições no array, ele recebe dois argumentos, o primeiro a posição de inicio que eu quero que ele inicie e o segundo até onde eu qeuro que ele vá, por exemplo do 1 até o 4

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)// nome parecido com o slice, porém o splice remove 1 ou mais itens em qualquer posição no array, o primeiro é o qual eu quero começa a retirar e o segundo é até onde retirar, por exemplo retire do 1 até o indice 2 

// encontrar a posição de um elemento no array
let index = techs.indexOf('css') // vai trazer qual a posição do index do elemento que você informar