class Inimigo extends Animacao{
  constructor (matrix, imagem, x, largura, altura, largSprite, altSprite){
    super(matrix, imagem, x, largura, altura, largSprite, altSprite)
    
    this.velocidade = 5;
  }
  
  move(){
    this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura){
      this.x = width;
    }
  }
}