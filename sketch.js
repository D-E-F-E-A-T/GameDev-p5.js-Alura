let imagemCenario; //imagem do cenário do jogo
let imagemPersonagem; //imagem da personagem do jogo
let imagemInimigo; //imagem do inimigo do jogo

let cenario;
let somDoJogo; //som da trilha sonora do jogo
let somPulo; //som do pulo da personagem do jogo
let personagem;
let inimigo;

const matrixInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
] //matriz que será instanciada no construtor da classe Inimigo
const matrixPersonagem = [
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
   ] //matriz para identificar a posição da personagem na imagem personagem
function preload(){
  //informando o local onde o arquivo de imagem do cenário está
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  //informando o local onde o arquivo de imagem da personagem está
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  //informando o local onde o arquivo de imagem do inimigo está
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  //informando o local onde o arquivo de som do jogo está
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  //informando o local onde o arquivo de som do pulo da personagem está
  somPulo = loadSound('sons/somPulo.mp3');  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3); //declarando a classe Cenario e instanciando o construtor com a imagem do cenário e a velocidade
  personagem = new Personagem(matrixPersonagem, imagemPersonagem, 0, 110, 135, 220, 270); //declarando a classe Personagem e instanciando o construtor com a imagem da personagem
  inimigo = new Inimigo(matrixInimigo, imagemInimigo, width - 52, 52, 52, 104, 104); //declarando a classe Inimigo e instanciando o construtor
  frameRate(40); //quantidade de vezes que vai repetir o background
  //somDoJogo.loop(); //o som de trilha do jogo fica em loop quando inicia o jogo
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somPulo.play(); //o som do pulo é executado sempre que clicamos para a personagem pular
  }
}

function draw() {
  cenario.exibe(); //chamando o método exibe da classe Cenario
  cenario.move(); //chamando o método move da classe Cenario
 // somDoJogo.loop(); //chamando esta função aqui no draw, vai abrir várias vezes o arquivo de música, deve ser chamada na função setup
  personagem.exibe(); //chamando o método exibe personagem
  personagem.aplicaGravidade();
  inimigo.exibe(); //chamando o método exibe da classe Inimigo/Animacao
  inimigo.move(); //chamado o método move inimigo
  
  if(personagem.colidindo(inimigo)){
    noloop();
  }
}