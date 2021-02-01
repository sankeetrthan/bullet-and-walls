var wall,thickness;
var bullet,speed,weight;


function setup() {
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  createCanvas(1600,400);

 wall=createSprite(1200,200,thickness,height/2); 
 wall.shapeColor=(80,80,80);
 bullet=createSprite(0,200,50,50);
 bullet.velocityX=speed;
 bullet.shapeColor="pink"  
}

//draw function.
function draw()
 {
  background("blue");
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);


if(damage>10)
{
     wall.shapeColor="red";
}

if(damage<10)
{
     wall.shapeColor="green";
}


  }
    
  
        
       drawSprites();  
 
}

 
  


  
 

function hasCollided(bullet1, wall1)
{
  
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
      return true;
  }
      return false;
    
}
 