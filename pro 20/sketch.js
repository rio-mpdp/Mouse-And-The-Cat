var a,bg,bgi,mg,m,c,ca,ab,c4
function preload (){
bg = loadImage("images/background.jpg");
mg=loadAnimation("images/tomThree.png","images/tomTwo.png");
m=loadImage("images/tomOne.png")
c=loadImage("images/mouse1.png")
ca=loadImage("images/mouse2.png")
c4=loadImage("images/tomFour.png")
}
function setup (){
createCanvas(800,480);

bgi=createSprite(400,240,800,500)
bgi.addImage(bg)
bgi.scale=1.5

a = createSprite(720,430,10,10)

a.addImage(m)
a.setCollider("rectangle",0,0,800,800)
a.scale=0.1
ab= createSprite(150,430,10,10)
ab.addImage(c)

ab.setCollider("rectangle",0,0,300,300)
ab.scale=0.3
a.addAnimation("stop",c4)
ab.addAnimation("sad",ca)
}
function draw (){
background("blue");
if(a.x-ab.x<=(a.width/2+ab.width)/2){ 
  a.velocityX=0;  
   ab.changeAnimation("sad")
 a.changeAnimation("stop") 
 
 
}
keyPressed();


drawSprites ();
}
function keyPressed(){
   if(keyDown(  LEFT_ARROW)){
      a.velocityX=-5;
      a.addAnimation("moving",mg);
     
      a.changeAnimation("moving")
      
   }
}

   
