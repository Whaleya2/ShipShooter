//draws canvas
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
document.body.appendChild(canvas);



//used to make the canvas
canvas.width = 1915;
canvas.height = 1000;

canvas.style.backgroundImage = "url('https://img.freepik.com/free-vector/realistic-galaxy-background_23-2148991322.jpg')";
canvas.style.backgroundSize = "cover";

document.body.style.overflow = 'hidden';

const playerShip = new Player;

//makes multiple enemies
let enemies = [];
for(let i = 0;i<60;i++){
    if(enemies.length<15){
        enemies.push(new Enemy(i%15*100+100,100,"red"));
    }
    if(enemies.length<30 && enemies.length>=15){
        enemies.push(new Enemy(i%15*100+100,150,"red"));
    }
    if(enemies.length<45 && enemies.length>=30){
        enemies.push(new Enemy(i%15*100+100,200,"red"));
    }
    if(enemies.length<60 && enemies.length>=45){
        enemies.push(new Enemy(i%15*100+100,250,"red"));
    }
}
//draws the multiple enemies
function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    playerShip.draw(); 
    enemies.forEach(enemy=>
        enemy.draw()
    )
}
const keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false,
}
//the game loop makes everything rednder and move and just work
function gameloop() {
    moveShip();
    render();
    enemies.forEach(enemy=>
        enemy.update()
    )
    //testEnemy.update();
    console.log(playerShip.x);
    requestAnimationFrame(gameloop);
}

gameloop()