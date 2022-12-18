// Polimorfismo

// Class Atleta
class Atleta{
  peso;
  categoria;
  constructor(peso){
    this.peso = peso;
  }
  definirCategoria(){
    if(this.peso <= 50){
      this.categoria = 'Infantil'
    }
    else if(this.peso <= 65){
      this.categoria = 'juvenil'
    } else {
    this.categoria = 'Adulto'
    }
  }
}

// Lutador herda caracteristicas de atleta, porém é preciso redefinir as caracteristicas das categorias, pois cada um tem sua categoria, isso é polimorfismo, herdar caracteristicas, porem redefinir informações caso preciso
class Lutador extends Atleta{
  constructor(peso){
    super(peso);
  }
  definirCategoria(){
    if(this.peso <= 54){
      this.categoria = 'pluma'
    } else if(this.peso <= 60){
      this.categoria = 'leve'
    } else if(this.peso <= 75){
      this.categoria = 'meio-leve'
    } else{
      this.categoria ='pesado'
    }
  }
}