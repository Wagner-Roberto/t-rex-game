class Player {
    private sprite: game.LedSprite; // Sprite que representa o jogador
    private isJumping: boolean = false; // Indica se o jogador está pulando
    private collision: number = 0; // Contador de colisões com obstáculos
    private lives: game.LedSprite[] = []; // Array para armazenar os sprites de vida
    private score: number = 0; // Pontuação do jogador

    constructor() {
        // Cria o sprite do jogador na posição inicial (1, 4)
        this.sprite = game.createSprite(1, 4);
        // Inicializa as vidas do jogador
        this.initializeLives();
    }

    // Método para inicializar as vidas do jogador
    private initializeLives(): void {
        for (let i = 0; i < 3; i++) {
            // Cria um sprite de vida na posição (i, 0) e adiciona ao array de vidas
            this.lives.push(game.createSprite(i, 0));
        }
    }

    // Método para definir a posição Y do jogador
    setPosition(y: number): void {
        this.sprite.setY(y);
    }

    // Método para fazer o jogador pular
    jump(): void {
        // Verifica se o jogador já está pulando
        if (!this.isJumping) {
            this.isJumping = true; // Marca que o jogador está pulando

            // Simula o pulo movendo o sprite para cima e depois para baixo
            this.setPosition(3); // Move para Y = 3
            basic.pause(150); // Aguarda 150ms

            this.setPosition(2); // Move para Y = 2
            basic.pause(150); // Aguarda 150ms

            this.setPosition(3); // Move para Y = 3
            basic.pause(150); // Aguarda 150ms

            this.setPosition(4); // Retorna à posição inicial (Y = 4)
            basic.pause(200); // Aguarda 200ms

            this.isJumping = false; // Marca que o pulo terminou
        }
    }

    // Método para verificar colisões com obstáculos
    public checkCollision(obstacle: Obstacle): void {
        // Verifica se o obstáculo está na mesma posição X que o jogador e se o jogador está no chão (Y = 4)
        if (obstacle.getSpriteX() === 1 && this.sprite.get(LedSpriteProperty.Y) === 4) {
            this.collision += 1; // Incrementa o contador de colisões
            this.updateLives(); // Atualiza as vidas do jogador
        }
    }

    // Método para atualizar as vidas do jogador após uma colisão
    private updateLives(): void {
        // Verifica se o número de colisões é menor ou igual ao número de vidas restantes
        if (this.collision <= this.lives.length) {
            // Remove a última vida do array
            let life = this.lives.pop();
            if (life) {
                life.delete(); // Remove o sprite da vida da tela
            }
        }

        // Verifica se o jogador perdeu todas as vidas
        if (this.collision >= 3) {
            game.gameOver(); // Encerra o jogo
        }
    }
}