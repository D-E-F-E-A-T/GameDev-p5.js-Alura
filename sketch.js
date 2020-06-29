let imagemCenario; //imagem do cenário do jogo
let imagemPersonagem; //imagem da personagem do jogo
let imagemInimigo; //imagem do inimigo, gotinha
let imagemInimigoTroll; //imagem do inimigo, troll
let imagemInimigoVoador; //imagem do inimigo, gotinha voadora
let imagemGameOver; //imagem de game over quando colidir com a personagem

let cenario;
let somDoJogo; //som da trilha sonora do jogo
let somPulo; //som do pulo da personagem do jogo
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let score; //pontuação do gamer enquanto joga com a bruxinha

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
]; //matriz que será instanciada no construtor da classe Inimigo, gotinha
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
   ]; //matriz para identificar a posição da personagem na imagem personagem, bruxa
const matrixInimigoTroll= [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]; //matriz para identificar a posição da personagem na imagem personagem, troll
const matrixInimigoVoador= [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]; //matriz para identificar a posição da personagem na imagem personagem, gotinha voadora

const inimigos = []; //array para chamar todos os inimigos de forma aleatória

function preload(){
  //informando o local onde o arquivo de imagem do cenário está
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  //informando o local onde o arquivo de imagem game over está
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  //informando o local onde o arquivo de imagem da personagem está, bruxa
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  //informando o local onde o arquivo de imagem do inimigo está, gotinha
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  //informando o local onde o arquivo de imagem do inimigo está, troll
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  //informando o local onde o arquivo de imagem do inimigo está, gotinha voadora
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  //informando o local onde o arquivo de som do jogo está, trilha sonora
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  //informando o local onde o arquivo de som do pulo da personagem está
  somPulo = loadSound('sons/somPulo.mp3');  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3); //declarando a classe Cenario e instanciando o construtor com a imagem do cenário e a velocidade
  score = new Pontuacao(); //declarando a classe Pontuação
  //declarando a classe Personagem e instanciando o construtor com a imagem da personagem, bruxa
  personagem = new Personagem(matrixPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, gotinha
  const inimigo = new Inimigo(matrixInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 5, 200);
  //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, troll
  const inimigoTroll = new Inimigo(matrixInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 5, 1500);
  //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, gotinha voadora
  const inimigoVoador= new Inimigo(matrixInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 5, 2000); 
  frameRate(40); //quantidade de vezes que vai repetir o background
  somDoJogo.loop(); //o som de trilha do jogo fica em loop quando inicia o jogo
  
  inimigos.push(inimigo); //incluindo o inimigo gotinha no array
  inimigos.push(inimigoTroll); //incluindo o inimigo troll no array
  inimigos.push(inimigoVoador); //incluindo o inimigo gotinha voadora no array
}

function keyPressed(){
  if(key === 'ArrowUp'){ //ArrowUp é a setinha para cima do teclado
    personagem.pula();
    somPulo.play(); //o som do pulo é executado sempre que clicamos para a personagem pular
  }
}

function draw() {
  cenario.exibe(); //chamando o método exibe() da classe Cenario
  cenario.move(); //chamando o método move() da classe Cenario
  score.exibe(); //chamando o métodoo exibe() da classe Pontuacao
  score.calculaScore();//chamando o métodoo calculaScore() da classe Pontuacao
  personagem.exibe(); //chamando o método exibe() Personagem
  personagem.aplicaGravidade(); //chamando o método aplicaGravidade() Personagem
  //função o p5.js que chamará todos os inimigos e verificará se vão colidir com a personagem
  inimigos.forEach(inimigo => {
    inimigo.exibe(); //chamado o método exibe() da classe Animacao
    inimigo.move(); //chamado o método move() da classe Inimigo
    
    //verificando a colisão e exibindo Game Over
    if(personagem.colidindo(inimigo)){
      image(imagemGameOver, width/2 - 200, height/3);
      noloop();
    }
  })  
}