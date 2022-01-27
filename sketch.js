var boy, coins, knife, scene;
var boyImage, cashImage, knifeImage, sceneImage;

function preload() {
  boyImage = loadImage("boy.png");
  sceneImage = loadImage("bgScene.jpg")
}

function setup() {
  createCanvas(1000,500);
scene=createSprite(200,200);
scene.addImage(sceneImage)
boy=createSprite(200,300,60,40);
boy.addImage(boyImage);
boy.scale=0.5;
}

function draw() {
  background(0);
 
  

  drawSprites()
}