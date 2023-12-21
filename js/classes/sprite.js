// Sprite class to render images 
class Sprite {
    // The constructor
    constructor({
        position = {
            x: 0,
            y: 0
        },
        imageSrc = './../../assets/img/backgroundLevel1.png',
        maxFrames = 1,
        holdFrames = 2,
        animations
    }) {
        this.position = position;
        this.loaded = false;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width / maxFrames;
            this.height = this.image.height;
        };
        this.image.src = imageSrc;
        this.frames = {
            max: maxFrames,
            current: 0,
            hold: holdFrames,
            elapsed: 0
        },
            this.animations = animations;

        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image();
                image.src = this.animations[key].imageSrc;

                this.animations[key].image = image;
            }
        }
    }

    // Draw function
    draw() {
        // Crop dimensions
        const cropbox = {
            position: {
                x: this.width * this.frames.current,
                y: 0,
            },
            width: this.width,
            height: this.height,
        };

        // Draw an image
        if (this.loaded) {
            context.drawImage(
                this.image,
                cropbox.position.x,
                cropbox.position.y,
                cropbox.width,
                cropbox.height,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            );

            this.updateFrames();
        }
    }

    // Update function
    update() {
        // Draw an image
        this.draw();
    }

    // Update the frames of the Sprite
    updateFrames() {
        // Update frames
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.current + 1 < this.frames.max) {
                this.frames.current++;
            }
            else {
                this.frames.current = 0;
            }

            this.frames.elapsed = 1;
        }

        this.frames.elapsed++;
    }
};