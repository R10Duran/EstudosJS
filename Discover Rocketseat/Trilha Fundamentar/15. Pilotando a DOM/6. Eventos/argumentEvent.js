// Eventos
// Argumentos

const input = document.querySelector('input')

input.onkeypress = function(event){
  console.log(event.key) //event mostra no console a sua categoria, se ela foi por mouse ou por teclado
}
//event.key --> pega qual foi a tecla digitada
//event.currentTarget.value --> alvo do disparo do evento, o .value pega os valores do input