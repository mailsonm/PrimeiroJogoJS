class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup() {
    // Configuração do cenário e elementos do jogo
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    // Inicialização do personagem
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    
    // Criação dos inimigos e adição ao array `inimigos`
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
    
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  
  keyPressed(key) {
    // Ação de pulo e som do pulo
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }
  
  draw() {
    // Exibição e movimentação do cenário
    cenario.exibe();
    cenario.move();
    
    // Exibe a vida e a pontuação
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    // Exibe e aplica a gravidade no personagem
    personagem.exibe();
    personagem.aplicaGravidade();
    
    // Controle de inimigos com base no mapa de configuração
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    // Ajuste da velocidade do inimigo com base no mapa
    inimigo.velocidade = linhaAtual.velocidade;
    
    // Exibição e movimento do inimigo atual
    inimigo.exibe();
    inimigo.move();
    
    // Controle de índice do mapa para novos inimigos
    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }
    
    // Verificação de colisão entre personagem e inimigo
    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      
      // Condição para exibir a tela de "Game Over" e parar o loop
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}