# PrimeiroJogoJS
 Meu primeiro jogo feito com javascript

Este é um jogo simples de plataforma onde o jogador controla um personagem para evitar inimigos enquanto coleta pontos e tenta manter suas vidas. O jogo é feito com a biblioteca p5.js e contém várias mecânicas, incluindo movimento do personagem, colisões com inimigos, sistema de pontuação, e mais.

Funcionalidades Implementadas
1. Movimento do Personagem
O personagem agora pode se mover para a esquerda e para a direita usando as teclas de seta (ou "A" e "D" para alternativas).

Teclas para mover:
Seta para a esquerda ou A: mover para a esquerda
Seta para a direita ou D: mover para a direita
2. Gravidade e Pulo
O personagem pode pular ao pressionar as teclas de pulo (geralmente a tecla Espaço).
A gravidade foi aplicada, fazendo com que o personagem caia após pular.
Limitação de até dois pulos no ar, permitindo ao personagem pular duas vezes sem tocar no chão.
3. Colisão com Inimigos
Quando o personagem colide com um inimigo, ele perde uma vida (se não for invencível).
Invencibilidade: Após perder uma vida, o personagem se torna invencível por um curto período de 1 segundo. Durante esse tempo, ele não pode ser atingido por inimigos.
4. Controle de Vidas
O personagem começa com um número de vidas (configurável no arquivo fita.json).
Quando as vidas chegam a 0, o jogo termina.
5. Sistema de Pontuação
O jogo mantém uma pontuação que aumenta ao longo do tempo (e com certas ações).
A pontuação é exibida no canto superior direito da tela.
6. Cenário e Movimentação
O cenário se move horizontalmente, criando o efeito de parallax (movimento de fundo).
O fundo se repete quando sai da tela, criando uma sensação de continuidade.
7. Inimigos
Inimigos aparecem no cenário e se movem em direção ao personagem.
A velocidade dos inimigos varia conforme o nível do jogo, sendo configurada no arquivo fita.json.
8. Tela Inicial
O jogo começa com uma tela inicial onde o jogador pode iniciar o jogo ao pressionar um botão de "Iniciar Jogo".
Arquitetura do Projeto
Estrutura de Arquivos
O projeto é composto pelos seguintes arquivos principais:

sketch.js: Arquivo principal onde o ciclo de vida do jogo é gerenciado. Contém a função setup() para inicialização e a função draw() para renderização.

scripts/cenas/telaInicial.js: Controla a tela inicial do jogo, onde o jogador pode iniciar a partida.

scripts/cenas/botaoGerenciador.js: Gerencia os botões na tela inicial e outras interações do jogo.

scripts/jogo/pontuacao.js: Controla a pontuação do jogador durante o jogo.

scripts/jogo/vida.js: Gerencia o número de vidas do jogador.

scripts/jogo/animacao.js: Define a animação dos objetos do jogo (como personagens e inimigos).

scripts/jogo/inimigo.js: Define os inimigos do jogo, sua movimentação e suas características.

scripts/jogo/personagem.js: Define o comportamento do personagem, incluindo movimento, pulo, colisões e invencibilidade.

scripts/jogo/cenario.js: Controla o cenário e o movimento de fundo.

fita/fita.json: Arquivo de configuração que define as configurações iniciais do jogo, como número máximo de vidas e o comportamento dos inimigos.

Melhorias e Correções Realizadas
Durante o desenvolvimento, as seguintes melhorias e correções foram aplicadas:

Invencibilidade Temporária:

Após perder uma vida, o personagem se torna invencível por 1 segundo, prevenindo mortes consecutivas imediatas.
Movimento do Personagem para os Lados:

O personagem agora pode se mover para a esquerda e para a direita, utilizando as teclas de seta ou "A" e "D".
Limitação de Movimento Horizontal:

O movimento do personagem foi limitado para que ele não ultrapasse os limites da tela.
Colisão e Perda de Vida:

A lógica de colisão foi ajustada para garantir que o personagem perca vida ao colidir com inimigos (se não estiver invencível).
O jogo agora termina quando as vidas chegam a 0.
Ajustes de Inimigos:

Corrigimos o problema com os inimigos voadores, que agora aparecem corretamente no jogo.
Tela Inicial e Botão de Início:

A tela inicial foi implementada com um botão que permite ao jogador iniciar o jogo.
Como Rodar o Jogo
Pré-requisitos
Certifique-se de ter o seguinte instalado:

p5.js: A biblioteca utilizada para renderização e animação. Você pode baixá-la de p5.js.
Passos para Executar
Baixe o repositório para o seu computador.
Abra o arquivo index.html em seu navegador (o jogo deve funcionar em qualquer navegador moderno).
Pressione as teclas apropriadas para controlar o personagem e evite os inimigos!
Configuração de Jogo
As configurações de número de vidas e inimigos estão armazenadas no arquivo fita/fita.json.

Exemplo de arquivo fita.json:

json
Copy code
{
  "configuracoes": {
    "vidaMaxima": 5,
    "vidaInicial": 5
  },
  "mapa": [
    {
      "inimigo": 0,
      "velocidade": 10
    },
    {
      "inimigo": 1,
      "velocidade": 30
    },
    {
      "inimigo": 1,
      "velocidade": 15
    },
    {
      "inimigo": 2,
      "velocidade": 40
    }
  ]
}
Descrição das Configurações:
vidaMaxima: Define o número máximo de vidas do jogador.
vidaInicial: Define o número inicial de vidas do jogador.
mapa: Define os inimigos que aparecem durante o jogo, incluindo o tipo de inimigo e sua velocidade.
Contribuições
Sinta-se à vontade para contribuir com melhorias, reportar bugs ou sugerir novas funcionalidades. Para contribuir, basta fazer um fork do repositório e enviar um pull request.

