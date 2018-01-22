class Text{

    constructor(){
        this.info = "Score: "; 
    }

    show(){
        textSize(32);
        text(this.info, width/2, 50);
        fill(0, 102, 153);
    }

    set info(newInfo){
        this.info = newInfo; 
    }

}
