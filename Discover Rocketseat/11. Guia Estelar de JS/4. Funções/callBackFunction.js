//callback function

//chama uma função (sayMyName) e chama outra de volta (name)
function sayMyName(name){
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a callback')
}

sayMyName(
  () =>{
    console.log('Estou em uma callback') //chamar de volta 
  }
)