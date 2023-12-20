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
        collusionBlocks = []
    }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 3
        };
        this.width = width;
        this.height = height;
        this.color = 'red';
        this.collusionBlocks = collusionBlocks;
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

        // Check for collision with blocks and set velocity if not in a block
        this.checkHorizontalCollusions();

        // if (
        //     this.position.x > 0 &&
        //     this.position.x + this.width < canvas.width
        // ) {
        //     // If it's not at the left edge or right edge of the canvas
        // }
        // else {
        //     this.velocity.x = 0;
        // }

        // Apply Gravity
        this.applyGravity();

        // Check for collision with blocks and set velocity if not in a block
        this.checkVerticalCollusions();

        // if (this.position.y + this.height + this.velocity.y < canvas.height) {
        //     this.velocity.y += gravity;
        // }
        // else {
        //     this.velocity.y = 0;
        // }
    }

    // Apply gravity
    applyGravity() {
        // Update the y position
        this.velocity.y += gravity;
        this.position.y += this.velocity.y;
    }

    // Check for collision with blocks
    checkHorizontalCollusions() {
        // Check for collision with blocks and set velocity if not in a block
        for (let i = 0; i < this.collusionBlocks.length; i++) {
            const collusionBlock = this.collusionBlocks[i];

            // console.log(this);
            // console.log(collusionBlock);

            // If collusion detected
            if (
                this.position.x <= collusionBlock.position.x + collusionBlock.width &&
                this.position.x + this.width >= collusionBlock.position.x &&
                this.position.y <= collusionBlock.position.y + collusionBlock.height &&
                this.position.y + this.height >= collusionBlock.position.y
            ) {
                const delta = 0.05;

                // Horizontal left correction
                if (this.velocity.x < 0) {
                    this.position.x = collusionBlock.position.x + collusionBlock.width + delta;
                    break;
                }

                // Horizontal right correction
                if (this.velocity.x > 0) {
                    this.position.x = collusionBlock.position.x - this.width - delta;
                    break;
                }
            }
        }
    }

    checkVerticalCollusions() {
        for (let i = 0; i < this.collusionBlocks.length; i++) {
            const collusionBlock = this.collusionBlocks[i];

            // console.log(this);
            // console.log(collusionBlock);

            // If collusion detected
            if (
                this.position.x <= collusionBlock.position.x + collusionBlock.width &&
                this.position.x + this.width >= collusionBlock.position.x &&
                this.position.y <= collusionBlock.position.y + collusionBlock.height &&
                this.position.y + this.height >= collusionBlock.position.y
            ) {
                const delta = 0.05;

                // Horizontal left correction
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collusionBlock.position.y + collusionBlock.height + delta;
                    break;
                }

                // Horizontal right correction
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collusionBlock.position.y - this.height - delta;
                    break;
                }
            }
        }
    }
};