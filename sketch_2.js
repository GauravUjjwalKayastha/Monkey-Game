var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground,bananaGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  createCanvas(400,400);
  
  monkey=createSprite(50,300);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,335,800,10)
  ground.velocityX=-4;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival time:"+survivalTime,100,50)
  
  if(gameState===PLAY)
  {
    if(ground.x<=0)
    {
      ground.x=400;
    }
    
    survivalTime=Math.ceil(frameCount/frameRate());
    
    if(keyDown("space")&&monkey.y>200)
    {
      monkey.velocityY=-12;
    }
    
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    
  }
  
  
  if(gameState===END)
  {
    
  }

  obstacles()
  food();
  drawSprites();
}

function food()
{
  if(frameCount%80===0)
  {
   randomFoodPosition=Math.round(120,200);
   banana=createSprite(400,randomFoodPosition) 
   banana.addImage("fruit",bananaImage);
   banana.scale=0.1;
   banana.lifetime=100;
   banana.velocityX=-6;
   bananaGroup.add(banana); 
  }
}

function obstacles()
{
  if(frameCount%300===0)
  {
   obstacle=createSprite(400,305) 
   obstacle.addImage("rock",obstacleImage);
   obstacle.scale=0.15;
   obstacle.lifetime=100;
   obstacle.velocityX=-6;
   obstacleGroup.add(obstacle); 
  }
}





