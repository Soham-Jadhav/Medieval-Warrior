// Key down event listener
addEventListener('keydown', ({ key }) => {
    if (player.preventInput) return;

    switch (key) {
        // Jump up
        case 'w':
            // Check for door colusion
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                // Check for door dimensions
                if (
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y <= door.position.y + door.height &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y
                ) {
                    // console.log('player-door colllusion');
                    player.preventInput = true;
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.switchSprite('enterDoor');
                    door.play();

                    return;
                }
            }

            // Check for jump validity
            if (player.velocity.y === 0) {
                keys.w.pressed = true;
                player.velocity.y = -20;
            }

            break;

        // Move left
        case 'a':
            keys.a.pressed = true;
            // player.velocity.x = -4;

            break;

        // Move down
        case 's':

            break;

        // Move right
        case 'd':
            keys.d.pressed = true;
            // player.velocity.x = 4;

            break;

        // Default
        default:
            break;
    }
});

// Key up event listener
addEventListener('keyup', ({ key }) => {
    switch (key) {
        // Jump up
        case 'w':
            if (player.velocity.y === 0) {
                keys.w.pressed = false;
            }

            break;

        // Move left
        case 'a':
            keys.a.pressed = false;
            // player.velocity.x = 0;

            break;

        // Move down
        case 's':

            break;

        // Move right
        case 'd':
            keys.d.pressed = false;
            // player.velocity.x = 0;

            break;

        // Default
        default:
            break;
    }
});