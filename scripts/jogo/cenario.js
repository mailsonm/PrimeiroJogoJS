class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;

    // Quando uma das imagens sai da tela, reposiciona no lado oposto
    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x2 = width;
    }
  }

  // Método para definir a direção de movimento
  setVelocidade(velocidade) {
    this.velocidade = velocidade;
  }
}
