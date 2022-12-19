
// promessas em concorrênciam todas sendo disparadas ao mesmo tempo e pegando elas ao mesmo tempo
import axios from 'axios'

promises.all([
  axios.get('https://api.github.com/users/maykbrito')
  axios.get('https://api.github.com/users/maykbrito/repos')
])
.then(response =>{
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch(err => console.log(err.message))