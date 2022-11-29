# Document
Podemos ao invés de utilizar getDocumentById ou ByClassName, podemos usar o querySelector('.classeDesejada') ou querySelector('#idDesejado'), lembrando que o querySelector sem o All vai pegar apenas o primeiro elemento que encontrar.

document --> retorna todo documento HTML
document.URL --> retorna a URL da página usada pelo navegador
document.head --> retorna o head 
document.title --> retorna o title do html
document.body --> retorna todo o body da página
com o document podemos acessar praticamente todos elementos da página

---------------------------------------------------------------------------------------------------------------------------------

alert("") --> traz um popup com a informação que passar para ele

---------------------------------------------------------------------------------------------------------------------------------
onclick --> evento de clique no elemento
addEventListenner --> escutador de eventos, com ele que adicionamos a opção de onlick etc () ele sempre recebe 2 parâmetros o primeiro é o evento (click) o segundo é o que ele vai executar, na maioria das vezes é uma função determinada.
document.querySelector(#robotron).addEventListenner('click', função que vai executar ao id #robotron ser clicado)

Exemplo:
const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})

---------------------------------------------------------------------------------------------------------------------------------
function --> funções usadas para armazenar código que serão repetidos várias vezes no programa, elas podem ser nomeadas ou podem ser anônimas (sem nome), quando anônimas só podem ser usadas apenas uma vez, quando nomeadas podem ser chamadas mais vezes.

() => (função de seta, desta maneira ela é anônima de igual forma, a diferença é que ela vai ser mais clean) 

a função pode ter parâmetros pré-estabelecidos, por exemplo --> function somar (number1 + number2){
  number1 + number2
} --> agora eu chamo a função passando o parâmtro --> somar(10+5) --> console.log(somar)

---------------------------------------------------------------------------------------------------------------------------------
splice() --> o primeiro parâmetro a ser informado é a posição do item a ser removido, e o segundo parâmetro informa quantos itens serão removidos a partir de sua posição.

exemplo:

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1,1)

console.log(lista);
---------------------------------------------------------------------------------------------------------------------------------

Data atrributes, usado para buscar elementos usando data