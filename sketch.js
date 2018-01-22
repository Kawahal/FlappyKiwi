// Game
let kiwi;
let blocks = []; 
let textInfo; 
let score = 0; 

function setup(){
    createCanvas(720, 600); 
    frameRate(30); 
    kiwi = new Kiwi(); 
    blocks.push(new Block()); 
    textInfo = new Text(); 
}

function draw(){
    background(0); 
    textInfo.show();  
    kiwi.show(); 
    kiwi.update(); 

    if(frameCount % 50 == 0){
        blocks.push(new Block()); 
    }

    for(let elem of blocks){
        elem.show(); 
        elem.update(); 
    }

    for(let elem of blocks){
        if(kiwi.x >= elem.x-elem.w/2 && kiwi.x<=elem.x-elem.w/2){
            if(kiwi.y < elem.y-(elem.h/2) || kiwi.y > elem.y+(elem.h/2)){
                console.log("HIT"); 
                endGame(); 
            }
        }else{
            score++; 
            textInfo.info = "Score: " + score; 
        }
    }

}

function endGame(){
    textInfo.info = "FINAL SCORE: " + score; 
    background(0); 
    textInfo.show();  
    noLoop(); 
}
