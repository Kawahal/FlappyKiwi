// Game
let kiwi;
let blocks = []; 

function setup(){
    createCanvas(720, 600); 
    frameRate(30); 
    kiwi = new Kiwi(); 
    blocks.push(new Block()); 
}

function draw(){
    background(0); 
    kiwi.show(); 
    kiwi.update(); 

    if(frameCount % 50 == 0){
        blocks.push(new Block()); 
    }

    for(let elem of blocks){
        elem.show(); 
        elem.update(); 
    }
}
