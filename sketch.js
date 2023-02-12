var mom,mom_image;
var background_image;
var heart_image;
var birthday_song;
var ground;


textSize("60");
textAlign(CENTER, TOP);
textFont("Impact");
fill("yellow");
stroke("red");
strokeWeight(5);
text("Happy Birthday MOM", 0, 0, 400, 400);

function preload(){
  mom_image = loadImage("mom.png");
  background_image = loadImage("wishes.jpeg");
  heart_image = loadImage("heart.png");
}

function setup(){
  createCanvas(1100,1100);
  
  // creating trex
  mom = createSprite(300,190,20,50);
  mom.addImage("mom",mom_image );
  mom.scale = 0.25;
  mom.visible = false;

  edges = createEdgeSprites();
  
 

  //ground logic
  ground = createSprite(590,180,600,10);
  ground.visible = false;
}
/*
  1. put text on heart to click for surprise
  2. mouseOPressed- new background
  3. falling hearts spwanHearts-in y direction
  4. put mom image at the bottom in centre
  5. backgorund birthday muscis
  6. hearts score on top left
  7. isTouching hearts- mom then increase score to 2
  8. if score ==10 then change image to greeting and play you voice recorded wishes.


*/


function draw(){
  //set background color 
  background("white");
  image(background_image,0,0);
  
 //text to display

 
  
  //card mechanics
  if(keyDown(LEFT_ARROW)){
    mom.x  = mom.x -5;
  }
  
  if(keyDown(RIGHT_ARROW)){
    mom.x  = mom.x +5;
  }
  
  
  //stop trex from falling down
  mom.collide(ground);
  drawSprites();

}