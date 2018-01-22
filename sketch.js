// Game
let kiwi;
let blocks = []; 
let textInfo; 
let sc = 0; 

function setup(){
    createCanvas(720, 600); 
    frameRate(40); 
    kiwi = new Kiwi(); 
    blocks.push(new Block()); 
    textInfo = new InfoText(); 
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
                endGame(); 
            }
        }else{
            sc++; 
           textInfo.info = "Score: " + sc; 
        }
    }

}


function endGame(){
    background(255); 
    textInfo.info = "GAME OVER\nSCORE: " + sc;  
    textInfo.show(); 
    noLoop(); 
}

