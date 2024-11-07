class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.velocidade = velocidade;
    this.x = x; // Inicializa a posição x com o valor passado
  }

  move(){
    if(this.tipo === 'voador') {
      this.y += sin(frameCount * 0.1) * 2;  // Movimento oscilante para inimigos voadores
    } else {
      this.x -= this.velocidade;
    }
  }
  

  reiniciaPosicao() {
    this.x = width; // Coloca o inimigo novamente à direita
  }

  aparece() {
    // Poderia ser utilizado para um efeito de "reaparecimento" mais elaborado
    this.reiniciaPosicao();
  }
}