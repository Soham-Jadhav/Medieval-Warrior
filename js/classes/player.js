// Player Class
class Player extends Sprite {
    // Constructor
    constructor({
        position = {
            x: 0,
            y: 0
        },
        width = 100,
        height = 100,
        collusionBlocks = [],
        imageSrc = './../../assets/img/king/idle.png',
        maxFrames = 11,
        animations,
        loop = true
    }) {
        super({
            position: position,
            imageSrc: imageSrc,
            maxFrames: maxFrames,
            animations: animations,
            loop: loop
        });
        // this.position = position;
        this.velocity = {
            x: 0,
            y: 3
        };
        // this.width = width;
        // this.height = height;
        this.color = 'rgba(0, 0, 255, 0.5)';
        this.collusionBlocks = collusionBlocks;
    }

    // // The draw function
    // draw() {
    //     // super.draw();

    //     // Draw player
    //     context.fillStyle = this.color;
    //     context.fillRect(this.position.x, this.position.y, this.width, this.height);
    // }

    // Update function to update the player properties
    update() {
        // Draw player
        this.draw();

        // Update the x position
        this.position.x += this.velocity.x;

        // Update player hitbox
        this.updateHitbox();

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

        // Update player hitbox
        this.updateHitbox();

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

    // Update player hitbox
    updateHitbox() {
        // Player hitbox
        this.hitbox = {
            position: {
                x: this.position.x + 58,
                y: this.position.y + 32
            },
            width: 53,
            height: 57,
        };
        // context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
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
                this.hitbox.position.x <= collusionBlock.position.x + collusionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collusionBlock.position.x &&
                this.hitbox.position.y <= collusionBlock.position.y + collusionBlock.height &&
                this.hitbox.position.y + this.hitbox.height >= collusionBlock.position.y
            ) {
                const delta = 0.05;

                // Horizontal left correction
                if (this.velocity.x < 0) {
                    const offset = this.hitbox.position.x - this.position.x;
                    this.position.x = collusionBlock.position.x + collusionBlock.width - offset + delta;
                    break;
                }

                // Horizontal right correction
                if (this.velocity.x > 0) {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                    this.position.x = collusionBlock.position.x - offset - delta;
                    // this.position.x = collusionBlock.position.x - this.width - delta;
                    break;
                }
            }
        }
    }

    // Check for collision with blocks
    checkVerticalCollusions() {
        for (let i = 0; i < this.collusionBlocks.length; i++) {
            const collusionBlock = this.collusionBlocks[i];

            // console.log(this);
            // console.log(collusionBlock);

            // If collusion detected
            if (
                this.hitbox.position.x <= collusionBlock.position.x + collusionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collusionBlock.position.x &&
                this.hitbox.position.y <= collusionBlock.position.y + collusionBlock.height &&
                this.hitbox.position.y + this.hitbox.height >= collusionBlock.position.y
            ) {
                const delta = 0.05;

                // Horizontal left correction
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;

                    const offset = this.hitbox.position.y - this.position.y;
                    this.position.y = collusionBlock.position.y + collusionBlock.height - offset + delta;
                    break;
                }

                // Horizontal right correction
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;

                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
                    this.position.y = collusionBlock.position.y - offset - delta;
                    // this.position.y = collusionBlock.position.y - this.height - delta;
                    break;
                }
            }
        }
    }

    // Switch sprite animation
    switchSprite(name) {
        if (this.image !== this.animations[name].image) {
            this.image = this.animations[name].image;
            this.frames.max = this.animations[name].maxFrames;
            this.frames.hold = this.animations[name].holdFrames;
            this.frames.current = 0;
            this.loop = this.animations[name].loop;
            this.currentAnimation = this.animations[name];
        }
    }
};