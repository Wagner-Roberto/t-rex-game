class Obstacle {
    private sprite: game.LedSprite; // Sprite que representa o obstáculo no LED
    private isActive: boolean = false; // Indica se o obstáculo está ativo na tela

    constructor() {
        // Cria o sprite do obstáculo na posição inicial (4, 4)
        this.sprite = game.createSprite(4, 4);
        // Define o brilho do sprite como 0 (invisível) no início
        this.sprite.setBrightness(0);
    }

    // Método para ativar o obstáculo na tela
    public spawn(): void {
        // Verifica se o obstáculo já está ativo
        if (!this.isActive) {
            // Posiciona o obstáculo na posição X inicial (4)
            this.sprite.setX(4);
            // Torna o obstáculo visível definindo o brilho para 100
            this.sprite.setBrightness(100);
            // Marca o obstáculo como ativo
            this.isActive = true;
        }
    }

    // Método para mover o obstáculo para a esquerda
    public move(): void {
        // Verifica se o obstáculo está ativo antes de mover
        if (this.isActive) {
            // Se o obstáculo ainda não chegou ao fim da tela (X > 0)
            if (this.sprite.x() > 0) {
                // Move o obstáculo uma posição para a esquerda
                this.sprite.move(-1);
            } else {
                // Se o obstáculo chegou ao fim da tela, remove-o
                this.despawn();
            }
        }
    }

    // Método para remover o obstáculo da tela
    public despawn(): void {
        // Torna o obstáculo invisível definindo o brilho como 0
        this.sprite.setBrightness(0);
        // Marca o obstáculo como inativo
        this.isActive = false;
    }

    // Método para verificar se o obstáculo está ativo
    public isActiveObs(): boolean {
        return this.isActive;
    }

    // Método para obter a posição X atual do sprite do obstáculo
    public getSpriteX(): number {
        return this.sprite.x();
    }
}