//Herança
class Veiculo{
  rodas = 4;

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo{
  constructor(){
    super() // puxar atributos e métodos do pai
    this.rodas = 2 // a moto vai ter 2 rodas e o mover e virar ja vai existir na moto pois estamos puxando isso do pai
  }

}
// Um objeto pode extender de outro objeto que pode extender de outro objeto e assim por diante
// fica fácil a reutilização de código
// No JS a herança via prototipo __protorype__ existe por padrão como exemplo de strings e number