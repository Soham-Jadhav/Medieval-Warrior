// Get HTML objects
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Define canvas dimensions
canvas.width = 1024;
canvas.height = 576;

// Constants & state variables
const gravity = 0.8;
const playerSpeed = 5;

// Define player object
let player = new Player({
    position: {
        x: 100,
        y: 100
    },
    width: 100,
    height: 100
});

let backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './../../assets/img/backgroundLevel1.png',
    maxFrames: 1
});

// Game variables
let keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
};
let animationId;

// Animation function
function animate() {
    animationId = requestAnimationFrame(animate);

    backgroundLevel1.update();
    // context.fillStyle = 'white';
    // context.fillRect(0, 0, canvas.width, canvas.height);

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = playerSpeed;
    }
    else if (keys.a.pressed) {
        player.velocity.x = -playerSpeed;
    }
    else {
        player.velocity.x = 0;
    }

    player.update();
}

animate();

