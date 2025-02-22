class Player {
    private sprite: game.LedSprite;
    private isJumping: boolean = false;
    private collision: number = 0;
    private lives: game.LedSprite[] = []; // Array para armazenar os sprites de vida
    private score: number = 0;

    constructor() {
        // Cria um sprite na posição inicial (1, 4)
        this.sprite = game.createSprite(1, 4);
        this.initializeLives(); // Inicializa as vidas
    }

    // Método para inicializar as vidas
    private initializeLives(): void {
        for (let i = 0; i < 3; i++) {
            this.lives.push(game.createSprite(i, 0)); // Cria um sprite de vida na posição (i, 0)
        }
    }

    // Método para atualizar a posição do sprite
    setPosition(y: number): void {
        this.sprite.setY(y);
    }

    // Método para fazer o jogador pular
    jump(): void {
        if (this.isJumping === false) { // Verifica se o jogador já está pulando
            this.isJumping = true; // Marca que o jogador está pulando

            // Move o sprite para cima (pulo)
            this.setPosition(3);
            basic.pause(150);

            this.setPosition(2);
            basic.pause(150);

            this.setPosition(3);
            basic.pause(150);

            // Retorna o sprite à posição original
            this.setPosition(4);
            basic.pause(200);

            this.isJumping = false; // Marca que o pulo terminou
        }
    }

    // Método para verificar colisões e atualizar vidas
    public checkCollision(obstacle: Obstacle): void {
        if (obstacle.getSpriteX() === 1 && this.sprite.get(LedSpriteProperty.Y) === 4) {
            this.collision += 1; // Incrementa o contador de colisões
            this.updateLives(); // Atualiza as vidas
        } 
    }

    // Método para atualizar as vidas
    private updateLives(): void {
        if (this.collision <= this.lives.length) {
            // Remove uma vida
            let life = this.lives.pop();
            if (life) {
                life.delete(); // Remove o sprite da vida
            }
        }

        // Verifica se o jogador perdeu todas as vidas
        if (this.collision >= 3) {
            game.gameOver(); // Fim de jogo
        }
    }
}