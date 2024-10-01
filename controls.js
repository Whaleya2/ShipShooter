//This part of the code adds the keys to move
window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft': case 'a': keys.left = true; break;
        case 'ArrowRight': case 'd': keys.right = true; break;
        case ' ': keys.space = true; break;
    }
})
window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'ArrowLeft': case 'a': keys.left = false; break;
        case 'ArrowRight': case 'd': keys.right = false; break;
        case ' ': keys.space = false; break;
    }
});
//This allows the ship to move
function moveShip() {
    if (keys.right && playerShip.x < canvas.width - 40) {
        playerShip.move(5);
    }
    if (keys.left && playerShip.x > 0) {
        playerShip.move(-5);
    }

    if(keys.space){
        playerShip.shoot()
    }

}
