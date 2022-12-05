// Estrutural
//let altura = 50
//let largura = 60

//function calcularArea(){
//  return altura * largura
//}

//let area = calcularArea()


//-----------------------------------------------------------------------------------
// Orientado a Objetos
class Poligono{
  constructor(altura, largura){
    this.altura = altura
    this.largura = largura  
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea(){
    return this.altura * this.largura
  }

}

// Criando o objeto
let Poligono = new Poligono(50,60)
console.log(Poligono.area) // se colocar console.log(Poligono.#calcularArea()) Você não terá acesso a essa função fora da classe Pologono