class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill(255);  // Usar valor hexadecimal ou inteiro para a cor branca
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto() {
    this.pontos += 0.2;  // Pode ser ajustado para adicionar mais pontos por ação
  }  
}