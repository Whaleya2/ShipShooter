//creates the class of enemy
class Enemy {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 40;
        this.height = 10;
        this.xSpeed = 1;
    }
//allows the enemy to move
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    shoot() {

    }
//draws the enemy
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
//makes the enemy move and will make them go the opposite way if they hit a wall
    update() {

        if (this.x >= canvas.width - this.width) {
            //this.x = window.innerWidth - this.width;
            this.xSpeed *= -1;
            this.y += 20;
            this.move(this.xSpeed, 0)
        } else if (this.x <= 0) {
            //this.x = 0
            this.xSpeed *= -1
            this.y += 20
            this.move(this.xSpeed, 0)
        } else { this.move(this.xSpeed, 0); }

    }

}