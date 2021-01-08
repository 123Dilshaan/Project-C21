var wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=(80,80,80);
  thickness= random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  fill("red");
 noStroke();
 textSize(27);
 text("Red: Rejected",600,125);
 fill("green");
 noStroke();
 textSize(27);
 text("Green: Effective",600,250);
bullet.velocityX= speed;

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed* speed/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor= color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor= color(0,255,0);
  }
}
 drawSprites();
}