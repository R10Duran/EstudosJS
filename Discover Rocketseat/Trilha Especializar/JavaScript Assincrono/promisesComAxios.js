// Axios é uma biblioteca que ajuda com as promises, tanto no node como no browser
import axios from 'axios'

axios
  .get('https://api.github.com/users/maykbrito')
  .then(response => {
    const user = response.data

    return axios.get(user.repos_url)
  })
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))
