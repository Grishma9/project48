
var ram,arrow,gameOver,start,win,object,cloud;
var backgroundImg,ramImg,ravanImg,ravanImg;
var arrowImg,gameoverImg,startImg,winImg,cloudImg;
var score,arrowGroup;
var arrows=100;
var ravankilled=0;
var gamePlay=1;


var ravan1,ravan2,ravan3
var ravanVisible1=false,ravanVisible2=false,ravanVisible3=false;


function preload(){
backgroundImg=loadImage("background.jpg");
ramImg=loadImage("shree ram Img1.png");
ravanImg=loadImage("ravan.png");
gameoverImg=loadImage("game over.png");
startImg=loadImage("start.png");
arrowImg=loadImage("Arrow.png");
winImg=loadImage("win1.png");
cloudImg=loadImage("newcloud.png");
bg1=loadImage("Background.png");
startImg=loadImage("start.png");
}
function setup() {


  createCanvas(900,500);
  background1 = createSprite(460,180,900,500);
    background1.addImage(bg1);

//background1.x = background.width/2;
//background1.velocityX = -6;

  ram=createSprite(100, 50, 50, mouseX);
  ram.addImage(ramImg);
  ram.scale=0.5;
  ram.visible=false;

  win= createSprite(400,200,20,20);
  win.addImage(winImg);
  win.visible=false;

  end= createSprite(470,200,250,20);
  end.addImage(gameoverImg);
  end.visible=false;

  start = createSprite(455,220);
  start.addImage(startImg);
  start.scale = 0.5

  gameState="WELCOME"
  
  arrowGroup=new Group();
  ravanGroup1=new Group();
  ravanGroup2=new Group();
  ravanGroup3=new Group();
  cloudGroup1=new Group();
  cloudGroup2=new Group();
  cloudGroup3=new Group();
  
}

function draw() {
 
  background(backgroundImg);  

  if(gameState=="WELCOME"){
    console.log(ram.visible)
    ram.visible=false;

    if(mousePressedOver(start))
    {
       background1.visible = false
       start.visible = false
        
       background1.destroy()
      start.destroy()
      ram.visible=true;
      gameState="START"
    }
  }
 

  if(gamePlay==1 && gameState=="START"){
    
    background(backgroundImg); 
   
    if(frameCount%60==0){
      if(ravanVisible1!=true){
        ravanVisible1=true
        Ravan1()
      }else{
        ravanVisible1=false
        ravanGroup1.destroyEach();
        cloudGroup1.destroyEach();
      }
    }
  
    
    if(frameCount%120==0){
      if(ravanVisible2!=true){
        ravanVisible2=true
        Ravan2()
      }else{
        ravanVisible2=false
        ravanGroup2.destroyEach();
        cloudGroup2.destroyEach();
      }
    }
  
    if(frameCount%90==0){
      if(ravanVisible3!=true){
        ravanVisible3=true
        Ravan3()
      }else{
        ravanVisible3=false
        ravanGroup3.destroyEach();
        cloudGroup3.destroyEach();
      }
    }
  }

  if(arrowGroup.isTouching(ravanGroup1)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup1.destroyEach();
    cloudGroup1.destroyEach();
    ravankilled+=1;
    arrows=arrows-1
  }

  if(arrowGroup.isTouching(ravanGroup2)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup2.destroyEach();
    cloudGroup2.destroyEach();
    ravankilled+=1;
    arrows=arrows-1
  }

  if(arrowGroup.isTouching(ravanGroup3)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup3.destroyEach();
    cloudGroup3.destroyEach();
    ravankilled+=1;
    arrows=arrows-1
  }

  if(arrowGroup )

  if(gamePlay==1 && gameState=="START"){
  ram.y = World.mouseY;
  ram.visible=true; 
  }

  if(arrows <= 0)
  {
    gamePlay=0;
    end.visible=true;
  }

  if(ravankilled===10 ){
    gamePlay=0;
    win.visible=true;
  }
  

  if(keyDown("space") && gamePlay==1 && arrows>0){
   createArrow();
   
  }
  
  if(keyDown("r") && gamePlay==0){
    arrows=100;
    ravankilled=0;
    gamePlay=1;
    end.visible=false;
    win.visible=false;

   }
 
  drawSprites();

  if(gameState=="WELCOME"){
    textSize(30);
    fill("White")
    text("WELCOME", 370, 100);

  } else {
    textSize(30);
    fill("red")
    text("Ravan Killed: "+ ravankilled, 510,50);
    fill("white")
    text("Arrows Left:" + arrows,100,50);
  }

  if(gamePlay==0 && gameState=="START"){
    fill("white")
    text("Press 'r' to restart",370,400);
  }
  
}
function createArrow(){
  arrow=createSprite(200,mouseY , 50, 50);
  arrow.addImage(arrowImg);
  arrow.scale=0.1;
  arrow.velocityX =25;  
  arrowGroup.add(arrow);
  arrows=arrows-1
  return arrow;
}

function Ravan1(){
  ravan=createSprite(700,150,20,20);
  cloud=createSprite(700,200,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup1.add(ravan);
  cloudGroup1.add(cloud);
  return ravan;
}

function Ravan2(){
  ravan=createSprite(700,300,20,20);
  cloud=createSprite(700,350,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup2.add(ravan);
  cloudGroup2.add(cloud);
  return ravan;
}

function Ravan3(){
  ravan=createSprite(700,450,20,20);
  cloud=createSprite(700,500,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup3.add(ravan);
  cloudGroup3.add(cloud);
  return ravan;
}
