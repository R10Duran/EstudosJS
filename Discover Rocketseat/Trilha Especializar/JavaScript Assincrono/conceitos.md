### Callback

// Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado){
console.log();
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
// Posso também criar funções em funções
// callback é chamar de volta, chame de volta
imprimirDado(function(){
return 'Olá mundo'
})

function imprimirDado(dado){
console.log('Outras tarefas');
console.log(dado())
}

Resultado no console:
Outras tarefas
Olá mundo

### setTimeout(function, delay)

// recebe uma função como parâmetro e executa ela após certo tempo
setTimeout(function(){
console.log('Depois de 1s')
}, 1000)
