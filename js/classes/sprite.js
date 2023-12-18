// Sprite class to render images 
class Sprite {
    constructor({
        position = {
            x: 0,
            y: 0
        },
        imageSrc = './../../assets/img/backgroundLevel1.png',
        maxFrames = 1
    }) {
        this.position = position;
        this.loaded = false;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
        };
        this.image.src = imageSrc;
        this.frames = {
            max: maxFrames,
            current: 0,
            hold: 0,
            elapsed: 0
        }
    }

    draw() {
        if (this.loaded) {
            context.drawImage(this.image, this.position.x, this.position.y);
        }
    }

    update() {
        this.draw();
    }
};