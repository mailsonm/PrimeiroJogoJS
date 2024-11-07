class TelaInicial {
  constructor(){
    // Construtor vazio - pode ser útil para futuras propriedades específicas da tela inicial
  }
  
  // Método principal para desenhar a tela inicial
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao(); 
  }
  
  // Desenha o fundo da tela inicial com a imagem pré-carregada
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  // Exibe o texto do título e subtítulo na tela inicial
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    
    textSize(50);
    text('As aventuras de', width / 2, height / 4);
    
    textSize(150);
    text('Hipstar', width / 2, height / 7 * 3);
  }
  
  // Configura e exibe o botão de iniciar na tela inicial
  _botao(){
    botaoGerenciador.y = height / 7 * 5; // Define a posição y do botão
    botaoGerenciador.draw(); // Desenha o botão na tela
  }
}
