####Imersão GameDev JavaScript

Curso gratuito promovido pela Alura/Caelum quanto ao desenvolvimento de jogos em JavaScrpt. O curso foi ministrado em 5 vídeo-aulas ensinando os códigos, sprites, imagens dos personagens e sons do jogo (trilha, pulo, etc.)

Codificação realizada no p5.js Web Editor utilizando #JavaScript. Com a codificação apresentada, podemos utilizá-la para várias outros jogos.

**Personagens do jogo: Hipsta, Gotinha, Gotinha Voadora, Troll.**

<img src="https://i.imgur.com/2S3ULTS.png">

- Aula 1: Animações básicas e trilha sonora:
	- Criado duas classes: Cenario, que refere-se apenas ao cenário, background do jogo e Personagem, que refere-se aos comandos da personagem;
	- Implementado o cenário a movimentação, dando a sensação de continuidade da floresta;
	- Implementado a personagem, bruxa, a Hipsta, e os comandos para animação dela correndo;
	- Implementado a trilha sonora do jogo.
- Aula 2: Fluxo de vida, missão e falha:
	- Criado mais duas classes: Animacao, que refere-se a animação de todos os personagens do jogo e Inimigo, que refere-se a todos os inimigos do jogo;
	- Implementado o inimigo, a Gotinha, e a animção dela, que sempre virá em direção à Hipsta;
	- Implementado os comandos de colisão, Game Over, onde o jogo encerra quando à Hipsta encosta em seus inimigos;
	- Implementado os comandos de pulo e gravidade, e inserindo o som para o pulo.
- Aula 3: Mais inimigos e pontuação:
	- Implementado mais dois inimigos: o Troll e a Gotinha Voadora;
	- Implentado a classe Pontuacao, score, onde será somado todas as pontuações no jogo;
- Aula 4: Estado do jogo com cenas diferentes:
	- Organizado o código em arquivos Variavel.js (onde estão todas as variáveis utilizadas no jogo) e Loads.js (função preload para carregar todas os arquivos nas variáveis criadas);
	- Atualizado a frequência de carregamento e velocidade dos inimigos na tela;
	- Criado a Classe Jogo, arquivo jogo.js, onde implementamos todas os métodos utilizados no Jogo;
	- Criado a Classe TelaInicial, arquivo telaInicial.js, onde implementamos todos os cenários utilizados no jogo e a própria tela inicial;
	- Implementado o backgroung da tela inicial, telaInicial.png;
	- Implementado o arquivo de fonte .otf para ser utilizada na tela inicial;
	- Implementado a classe Button, onde está codificado o botão para iniciar o jogo. Criado em uma classe a parte, pois assim pode ser chamada em outra tela do jogo, Game Over, por exemplo.
- Aula 5: Vidas e mapa:
	- Criado a classe Vidas para calcular a quantidade de vezes que perdemos no jogo, com possibilidades de continuação;
	- Criado o mapa de inimigos, onde ordemos quais inimigos devem aparecer, a velocidade e a quantidade máxima de vidas que a Hipsta deverá ter.

Ao final da aula foi disponibilizado no GitHub, o certificado para o aluno realizar a alteração de seu nome e com o iframe do game desenvolvido.

*"O jogo ainda possui algumas alterações que desejo realizar, como aumentar a vida a medida que a personagem percorre a a floresta, assim como mudar de cenário e incluir outros inimigos."*

<img src="https://i.imgur.com/4YZVqYQ.jpg">

**Jogo da Bruxa Hipsta:**

<iframe src="https://editor.p5js.org/pleiterson/embed/1RMkKmkOm"></iframe>
