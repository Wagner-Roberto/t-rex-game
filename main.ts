let player = new Player();
let obstacle = new Obstacle();
let score = 0;

input.onButtonPressed(Button.B, function () {
    player.jump();
})

input.onButtonPressed(Button.B, function () {
    player.jump();
})

basic.forever(function () {

    player.checkCollision(obstacle);

    score ++;

    if (game.isGameOver) {
        game.setScore(score)
    }

    basic.pause(200)
        if (!(obstacle.isActiveObs())) {
            // Mostra o obstáculo na posição inicial (4, 4)
            obstacle.spawn();
        } else {
            // Move o obstáculo para a esquerda
            obstacle.move();
   }
})
