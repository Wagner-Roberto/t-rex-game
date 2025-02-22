class Obstacle {
    private sprite: game.LedSprite; // Sprite do obstáculo
    private isActive: boolean; // Indica se o obstáculo está ativo na tela

    constructor() {
        // Cria o sprite do obstáculo, inicialmente invisível
        this.sprite = game.createSprite(4, 4); // Posição inicial (4, 4)
        this.sprite.setBrightness(0); // Inicialmente invisível
        this.isActive = false; // Obstáculo começa inativo
    }

    // Método para ativar o obstáculo na posição inicial (4, 4)
    public spawn(): void {
        if (!this.isActive) { // Só ativa se o obstáculo não estiver ativo
            this.sprite.setX(4); // Posição X inicial
            this.sprite.setY(4); // Posição Y fixa
            this.sprite.setBrightness(100); // Torna o obstáculo visível
            this.isActive = true; // Marca o obstáculo como ativo
        }
    }

    // Método para mover o obstáculo para a esquerda
    public move(): void {
        if (this.isActive) { // Só move se o obstáculo estiver ativo
            const currentX = this.sprite.x(); // Pega a posição X atual
            if (currentX > 0) { // Se não chegou ao fim (0, 4)
                this.sprite.move(-1); // Move para a esquerda
            } else { // Se chegou ao fim (0, 4)
                this.despawn(); // Remove o obstáculo
            }
        }
    }

    // Método para remover o obstáculo da tela
    public despawn(): void {
        this.sprite.setBrightness(0); // Torna o obstáculo invisível
        this.isActive = false; // Marca o obstáculo como inativo
    }

    // Método para verificar se o obstáculo está ativo
    public isActiveObs(): boolean {
        return this.isActive;
    }

    public getSpriteX(): number {
        return this.sprite.x();
    }
}