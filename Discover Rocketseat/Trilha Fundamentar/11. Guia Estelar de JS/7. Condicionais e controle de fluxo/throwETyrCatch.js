// throw (disparar lançar)

//try(tentar)...catch (pegar) // vamos tentar executar uim bloco de código e se der algum erro vai ser disparado esse erro, ent~çao posso capturar esse erro na minha aplicação

function sayMyName(name) {
  if (name === '') {
    throw new Error('Nome é obrigatório') // se o nome estiver vazio, o throw vai disparar a mensagem nome obrigatório
  }

  console.log('despois do erro')
}

// try catch

try {
  sayMyName() // tenta executar a função
} catch (e) { //(e) é o parametro que vou usar, para referencioar o erro
  // o catch vai pegar o disparo do throw
  console.log(e)
}

console.log('após a função de erro')

// ou seja o fluxo da aplicação irá continuar, caso não houvesse o try catch a aplicação iria parar depois do erro e não executaria o cons9ole.log('após a função de erro)
