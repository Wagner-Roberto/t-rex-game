// Cria uma instância do jogador e do obstáculo
let player = new Player();
let obstacle = new Obstacle();
let score = 0; // Variável para armazenar a pontuação do jogador

// Configura o botão B para fazer o jogador pular
input.onButtonPressed(Button.B, function () {
    player.jump(); // Chama o método de pulo do jogador
});

// Loop principal do jogo
basic.forever(function () {
    // Verifica se houve colisão entre o jogador e o obstáculo
    player.checkCollision(obstacle);

    // Incrementa a pontuação a cada iteração do loop
    score++;

    // Verifica se o jogo acabou
    if (game.isGameOver()) {
        game.setScore(score); // Define a pontuação final do jogo
    }

    // Pausa de 200ms para controlar a velocidade do jogo
    basic.pause(200);

    // Verifica se o obstáculo está ativo
    if (!obstacle.isActiveObs()) {
        // Se o obstáculo não estiver ativo, ativa-o na posição inicial
        obstacle.spawn();
    } else {
        // Se o obstáculo estiver ativo, move-o para a esquerda
        obstacle.move();
    }
});