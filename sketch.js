var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  gameState = "PLAY";

   for (var j = 0; j <=width; j = j + 80) {
     plinkos.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  mousePressed();

  for (var j = 0; j < particles.length; j++) {
    if (particles!== null){
     particles[j].display();
      if (particles.body.position.y<780){
        if (particles.body.position.x<300){
          score = score+500;
          particles=null;
          if (turn>=5){
            gameState = "end";
          }
        }
      }
      if (particles.body.position.y<780){
        if (particles.body.position.x<600 && particles.body.position.x >300){
          score = score+100;
          particles=null;
          if (turn>=5){
            gameState = "end";
          }
        }
      }
      if (particles.body.position.y<780){
        if (particles.body.position.x<900&& particles.body.position.x >600){
          score = score+200;
          particles=null;
          if (turn>=5){
            gameState = "end";
          }
        }
      }
    }
  }

   textSize(20);
   text("Score : "+score,50,50);
   fill("white");
}
function mousePressed(){
  if (gameState !== "end")
  {
    turn++
    particles = new Particle(mouseX,30,10);
    console.log(gameState);
  }
}