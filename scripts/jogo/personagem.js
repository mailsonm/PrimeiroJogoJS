class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
    this.velocidadeX = 5;  // A velocidade de movimento horizontal
    this.x = x;  // Posicionando o personagem inicialmente
  }
  
  move() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {  // Tecla 'A' ou seta para a esquerda
      this.x -= this.velocidadeX;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {  // Tecla 'D' ou seta para a direita
      this.x += this.velocidadeX;
    }
  
    // Prevenir que o personagem saia da tela
    this.x = constrain(this.x, 0, width - this.largura);
  }  

  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }  

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;  // A invencibilidade termina após 1 segundo
    }, 1000);  // Duração de 1 segundo
  }  

  verificarInvencibilidade() {
    if (this.invencivel && millis() - this.tempoInvencivel > 1000) {
      this.invencivel = false; // Desativa a invencibilidade após 1 segundo
    }
  }

  estaColidindo(inimigo) {
    if (this.invencivel) return false;
  
    const precisao = 0.7;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
  
    if (colisao) {
      this.perdeVida();  // Chama o método para perder uma vida
    }
  
    return colisao;
  }
  
  perdeVida() {
    if (this.vidas > 0) {
      this.vidas--;
    }
    if (this.vidas <= 0) {
      this.fimDeJogo();
    }
  }  
          
  
  fimDeJogo() {
    // Lógica para terminar o jogo
    console.log('Game Over');
    noLoop();  // Para o loop de animação
  }  

  update() {
    this.verificarInvencibilidade(); // Verifica se o personagem ainda está invencível
  }
}
