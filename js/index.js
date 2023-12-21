// Get HTML objects
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Define canvas dimensions
canvas.width = 1024;
canvas.height = 576;

// Constants & state variables
const gravity = 0.8;
const playerSpeed = 5;

// Parsed level1 collusions block blueprint
const parsedCollusions = collusionsLevel1.parse2D();
// console.log(parsedCollusions);

// Construct collusion block array
let collusionBlocks = parsedCollusions.createObjectsFrom2D();

// Define player object
let player = new Player({
    position: {
        x: 200,
        y: 200
    },
    width: 25,
    height: 25,
    collusionBlocks: collusionBlocks,
    imageSrc: './../../assets/img/king/idle.png',
    maxFrames: 11,
    animations: {
        idleRight: {
            imageSrc: './../../assets/img/king/idle.png',
            maxFrames: 11,
            holdFrames: 2,
            loop: true,
        },
        idleLeft: {
            imageSrc: './../../assets/img/king/idleLeft.png',
            maxFrames: 11,
            holdFrames: 2,
            loop: true,
        },
        runRight: {
            imageSrc: './../../assets/img/king/runRight.png',
            maxFrames: 8,
            holdFrames: 3,
            loop: true,
        },
        runLeft: {
            imageSrc: './../../assets/img/king/runLeft.png',
            maxFrames: 8,
            holdFrames: 3,
            loop: true,
        },
    }
});

// Level1 background object
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
    // Animate frame
    animationId = requestAnimationFrame(animate);

    // Draw background
    backgroundLevel1.update();
    // context.fillStyle = 'white';
    // context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw collusion blocks
    collusionBlocks.forEach((collusionBlock) => {
        collusionBlock.update();
    });

    // Player movement along x-axis
    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.switchSprite('runRight');
        player.velocity.x = playerSpeed;
        player.lastDirection = 'right';
    }
    else if (keys.a.pressed) {
        player.switchSprite('runLeft');
        player.velocity.x = -playerSpeed;
        player.lastDirection = 'left';
    }
    else {
        player.velocity.x = 0;

        // Idle sprite 
        if (player.lastDirection === 'left') {
            player.switchSprite('idleLeft');
        }
        else {
            player.switchSprite('idleRight');
        }
    }

    // Update player
    player.update();
}

animate();

