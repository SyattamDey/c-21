var fixedRect1,fixedRect2,fixedRect3,fixedRect4,movingRect;


function setup() {
  createCanvas(1000,1000);
 fixedRect1= createSprite(600, 400, 50, 80);
 fixedRect1.shapeColor="green";

 fixedRect2= createSprite(600, 300, 50, 80);
 fixedRect2.shapeColor="green";

 fixedRect3= createSprite(600, 200, 50, 80);
 fixedRect3.shapeColor="green";
 
 fixedRect4= createSprite(600, 500, 50, 80);
 fixedRect4.shapeColor="green";

 

 movingRect= createSprite(400, 200, 80,30);
movingRect.shapeColor="green";


}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y=World.mouseY;
  if( isTouching(movingRect,fixedRect1) || isTouching(movingRect,fixedRect2) || isTouching(movingRect,fixedRect3) ||  isTouching(movingRect,fixedRect4) ){
   movingRect.shapeColor = "red";
   stroke ("black")
   text( "touching" ,100,100 );
   
  }
  else{
    movingRect.shapeColor="green";

  }
 
 
  

  drawSprites();

}
