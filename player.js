//makes the player class
class Player {
    constructor(){
        this.x=970;
        this.y=800;
        this.width=40;
        this.height=10;
        this.color="blue";
    }
//draws the player or ship
    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,this.width,this.height);
    }

    shoot(){
        
    }
//allows the ship to move
    move(dx){
        this.x+=dx;
    }
}