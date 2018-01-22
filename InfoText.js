class InfoText{

    constructor(){
        this.textInf = "Score: "; 
    }

    show(){
        textSize(32);
        text(this.textInf, width/2, 50);
        fill(0, 102, 153);
    }

    set info(newInfo){
        this.textInf= newInfo; 
    }
}
