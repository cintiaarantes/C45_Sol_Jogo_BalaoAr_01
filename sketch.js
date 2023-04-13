var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
//bgImg = loadImage("assets/bg.png")
bgImg = loadImage("assets/cityImage.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
  createCanvas(700,560)

  /*
  //imagem de plano de fundo
  //Paisagem
  bg = createSprite(500,400);
  bg.addImage(bgImg);
  bg.scale = 1.1
  bg.velocityX = -3;
  */

  //Cidade
  bg = createSprite(350,280);
  bg.addImage(bgImg);
  bg.scale = 0.4
  

  /*//criando canto superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = true;

  topGround = createSprite(200,10,800,20);
  topGround.visible = true;
  */
        
  //criando o balão     
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.25;

}

function draw() {  
  background("black");

  bg.velocityX = -2;

  if(bg.x < +200){
    bg.x = bg.width/2-750;
  }
        
  //fazendo o balão de ar quente pular
  if(keyDown("space")) {
    balloon.velocityY = -6 ;
  }

  //adicionando gravidade
  balloon.velocityY = balloon.velocityY + 2;
   
  drawSprites();        
}
