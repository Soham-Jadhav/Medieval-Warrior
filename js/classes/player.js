// Player Class
class Player {
    // Constructor
    constructor({
        position = {
            x: 0,
            y: 0
        },
        width = 100,
        height = 100,
    }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 3
        };
        this.width = width;
        this.height = height;
        this.color = 'red';
    }

    // The draw function
    draw() {
        // Draw player
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Update function to update the player properties
    update() {
        // Draw player
        this.draw();

        // Update the x position
        this.position.x += this.velocity.x;
        if (
            this.position.x > 0 &&
            this.position.x + this.width < canvas.width
        ) {
            // If it's not at the left edge or right edge of the canvas
        }
        else {
            this.velocity.x = 0;
        }

        // Update the y position
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0;
        }
    }
};