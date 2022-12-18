// Definir classe
class Pessoa{
  constructor(nome){
    this.id = ~~(Math.random() * 10000)
    this.nome = nome
  }

  dizerNome(){
    console.log(this.nome)
  }
}

