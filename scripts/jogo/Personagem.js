//
class Personagem extends Animacao{
  constructor(matrix, imagem, x, largura, altura, largSprite, altSprite){
    super(matrix, imagem, x, largura, altura, largSprite, altSprite)
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velPulo = 0;
    this.gravidade = 3;
  }

  pula(){
    this.velPulo = -30;
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velPulo;
    this.velPulo = this.velPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
    }
  }
  
  colidindo(inimigo){
    //precisão é necessária devido ao tamanho do quadrado da personagem ser um pouco maior, sendo assim colide antes da hora. Com a precisão considera-se o contorno da própria personagem
     const precisao = .7
    //função nativa do p5.js que confere os valores de quadrado da bruxa e fotinha são iguais, se sim, colide.
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    
    return colisao;
  }
}