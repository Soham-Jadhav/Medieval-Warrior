// Collusion block class
class CollsionBlock {
    // Constructor function
    constructor({
        position = {
            x: 0,
            y: 0
        },
        width = 64,
        height = 64
    }) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = 'rgba(255, 0, 0, 0.4)';
    }

    // Draw a collusion block
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Update a collusion block
    update() {
        this.draw();
    }
};