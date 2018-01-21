class Kiwi{

    constructor(){
        this.y = height/2; //Y position starting from the top
        this.x = 100; 
        this.g = 0.8; //gravity
        this.v = 0; //velocity 
        this.maxV = 25; 
        this.upForce = 10;  
    }

    show(){
        fill(153, 102, 51); 
        ellipse(this.x, this.y, 20, 20); 
    }

    update(){
        console.log(this.v); 
        if(clicked){
            clicked = false; //clicked is put on false after being clicked; 
            this.increaseVelocity(-this.upForce); 
        }else{
            this.increaseVelocity(this.g); 
            this.y += this.v; 
            if (this.y > height){
                this.y = height; //height starting from the top; 
                this.v= 0;
            }else if(this.y < 0){
                this.y = 0; 
                this.v = 0; 
            }

        }
    }

    increaseVelocity(incr){
        if(Math.abs(this.v + incr) <= this.maxV){
            this.v += incr; 
        }
    }
}

clicked = false; 
function mouseClicked(){
    clicked = true; 
}
