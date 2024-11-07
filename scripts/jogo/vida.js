class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 30;
    this.altura = 30;
    this.xInicial = 30;
    this.y = 20;
  }
  
  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;  // Espaçamento entre as vidas
      const posicao = this.xInicial + i * (this.largura + margem); // Posição correta das vidas
      
      image(imagemVida, posicao, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas < this.total) {  // Corrigido de <= para <
      this.vidas++;  // Corrigido de this.vida++ para this.vidas++
    }
  }
  
  
  perdeVida() {
    if (this.vidas > 0) {
      this.vidas--;
    }
    if (this.vidas <= 0) {
      this.fimDeJogo();
    }
  }     
}
