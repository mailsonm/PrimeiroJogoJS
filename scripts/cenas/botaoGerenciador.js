class BotaoGerenciador {
  constructor(texto, x, y){
    this.texto = texto; // Texto a ser exibido no botão
    this.x = x;         // Posição x do botão
    this.y = y;         // Posição y do botão
    
    // Criação do botão e configuração do texto
    this.botao = createButton(this.texto);
    
    // Define o comportamento do botão ao ser pressionado
    this.botao.mousePressed(() => this._alteraCena());
    
    // Adiciona a classe CSS para estilização
    this.botao.addClass('botao-tela-inicial');
  }
  
  // Método para desenhar e posicionar o botão na tela
  draw(){
    this.botao.position(this.x, this.y); // Define a posição do botão
    this.botao.center('horizontal');     // Centraliza o botão horizontalmente
  }
  
  // Método para alterar a cena ao clicar no botão
  _alteraCena(){
    this.botao.remove(); // Remove o botão da tela
    cenaAtual = 'jogo';  // Altera a cena atual para o jogo
  }
}
