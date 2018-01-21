class Block{
    
    constructor(){
        this.x = width; //Starts at the right
        this.w = 20; //Block width
        this.h = 80; //Empty space height
        this.y = Math.floor(Math.random() * height) + 1;
        this.v = 5; //Horizontal movement speed
    }

    show(){
        fill(102, 51, 0); 
        rect(this.x, 0, this.w, this.y-this.h); //top rectangle 
        rect(this.x, this.y+this.h, this.w, height-this.h-this.y); //top rectangle 
    }

    update(){
        this.x -= this.v; 
    }

}
