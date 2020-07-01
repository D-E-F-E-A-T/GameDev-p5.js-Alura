class Inimigo extends Animacao {
  constructor(matrix, imagem, x, varY, largura, altura, largSprite, altSprite, vel, delay) {
    super(matrix, imagem, x, varY, largura, altura, largSprite, altSprite)

    this.vel = vel;
    this.delay = delay; //variável instanciada para calcular quanto tempo o inimigo vai aparecer novamente na tela depois da primeira
    this.x = width - this.delay;
  }

  //método que faz mover os personagens na tela
  move() {
    this.x = this.x - this.vel;

    if (this.x < -this.largura - this.delay) {
      this.x = width;
    }
  }
}