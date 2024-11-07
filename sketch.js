function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar jogo', width/2, height/2);
  cenaAtual = 'telaInicial';  // Definindo a cena inicial
}

function keyPressed(){
  if(cenaAtual === 'jogo') {
    jogo.keyPressed(key);
  }
}

function draw() {
  cenas[cenaAtual].draw();
}

// Função para centralizar um elemento (exemplo de reutilização do código)
function centralizaElemento(elemento) {
  elemento.position(width / 2 - elemento.width / 2, height / 2 - elemento.height / 2);
}
function fimDeJogo() {
  cenaAtual = 'telaFinal';  // Mudando para a cena de Game Over
  // Aqui você pode exibir um menu ou uma tela de fim de jogo com pontuação final
}
