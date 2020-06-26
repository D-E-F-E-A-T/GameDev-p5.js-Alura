//
class Personagem{
  constructor(imagem){
    this.imagem = imagem;
   this.matrix = [
     [0,0],
     [220,0],
     [440,0],
     [660,0],
     [0,270],
     [220,270],
     [440,270],
     [660,270],
     [0,540],
     [220,540],
     [440,540],
     [660,540],
     [0,810],
     [220,810],
     [440,810],
     [660,810],
   ]
    this.frameAtual = 0;
  }
  
  exibe(){
    //o 1º parâmetro é a imagem da personagem 'imagemPersonagem'
    //o 2º parâmetro são os eixos x e y (0,0), de onde a imagem vai aparecer na tela
    //o 3º parâmetro é a largura e altura 220,270 da imagem na tela
    //o 4º parâmetro é a posição da imagem na tela, x e y, mas dentro da imagem da personagem 0,0,220,270
    image(this.imagem, 0, height -135, 110, 135, this.matrix[this.frameAtual][0], this.matrix[this.frameAtual][1], 220, 270);
    
    this.animaPersonagem();
  }
  
  animaPersonagem(){
    this.frameAtual++;
    if(this.frameAtual >= this.matrix.length - 1){
      this.frameAtual = 0;
    }
  }
}