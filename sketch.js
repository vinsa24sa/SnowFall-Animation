var backGrImg
var snow = []

function preload(){
  backGrImg = loadImage("snow3.jpg")

}

function setup() {
  createCanvas(800,650);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(backGrImg);
  
  if(frameCount%60===0){
    snow.push(new Snow(random(100, 700), 25, 25));
  }

  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }

  drawSprites();
  
}