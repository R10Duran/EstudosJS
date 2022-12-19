import { async } from 'postcss-js'

const promessa = new Promise(function (resolve, reject) {
  return resolve('ok')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (error) {
    console.log(erro)
  } finally {
    console.log('Sempre irei executar/rodar')
  }
}

start()

// promessa
//   .then(function(response){
//     console.log(response)
//   })
//   .catch(function (error){
//     console.log(error)
//   })
//   .finally(function(){
//     console.log('Sempre irei executar/rodar')
//   })
