addEventListener('keydown', ({ key }) => {
    switch (key) {
        // Jump up
        case 'w':
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

addEventListener('keyup', ({ key }) => {
    switch (key) {
        // Jump up
        case 'w':
            if (player.velocity.y === 0) {
                keys.w.pressed = false;
                player.velocity.y = -20;
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