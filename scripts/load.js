function preload() {
  // Carregamento das imagens de fundo e elementos de interface
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  // Carregamento da fonte personalizada para a tela inicial
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  // Carregamento das imagens dos personagens e inimigos
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  // Carregamento dos dados do jogo a partir de um arquivo JSON
  fita = loadJSON('fita/fita.json');
  
  // Carregamento dos sons do jogo
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
