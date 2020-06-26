let imagemCenario; //imagem do cenário do jogo
let imagemPersonagem; //imagem da personagem do jogo
let cenario;
let somDoJogo;
let personagem;

function preload(){
  //informando o local onde o arquivo de imagem do cenário está
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  //informando o local onde o arquivo de imagem da personagem está
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  //informando o local onde o arquivo de som da personagem está
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3); //declarando a classe Cenario e instanciando o construtor com a imagem do cenário e a velocidade
  frameRate(40); //quantidade de vezes que vai repetir o background
  somDoJogo.loop();
  personagem = new Personagem(imagemPersonagem); //declarando a classe Personagem e instanciando o construtor com a imagem da personagem
}

function draw() {
  cenario.exibe(); //chamando o método exibe da classe Cenario
  cenario.move(); //chamando o método move da classe Cenario
 // somDoJogo.loop(); //chamando esta função aqui no draw, vai abrir várias vezes o arquivo de música, deve ser chamada na função setup
  personagem.exibe();
}