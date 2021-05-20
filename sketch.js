
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 foodGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
}


function draw() {
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + score, 100,50)
background(255);
  
  
  if(ground.x<0){
    ground.x=ground=ground.width/2;
  }
  if(keyWentDown("space")    ){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  food()
  obstacle();
  drawSprites()
  
}
function food() {
  if(frameCount % 80 === 0) {
    var bananas=createSprite(200,Math.random(80,120),20,20)
       bananas.addImage(bananaImage);
  bananas.velocityX=-4
  bananas.lifetime=150;
    bananas.scale = 0.1
  }
}
function obstacle(){
  if(frameCount % 300 === 0)  {
    var obstacles = createSprite(400,450,20,20)
    obstacles.velcityX=-3
    obstacles.lifetime=200
    obstacles.addImage(obstacleImage)
    obstacles.scale = 0.1
  }
}




