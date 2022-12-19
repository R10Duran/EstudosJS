// fetch('URL que deseja buscar')
//fetch --> buscar
// fetch de certa forma é uma promise

fetch('https://api.github.com/users/maykbrito')
  .then(response => response.json())
  .then(data => fetch(data.respos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err))
