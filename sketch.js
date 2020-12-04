var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //particle = new Particle(mouseX,10,10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
  
  text("Score : "+score,20,30);
  text("500",27,520);
  text("500",107,520);
  text("500",187,520);
  text("500",267,520);
  
  text("100",347,520);
  text("100",427,520);
  text("100",507,520);

  text("200",587,520);
  text("200",667,520);
  text("200",747,520);
  
  ground.display();
  Engine.update(engine);  
  
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
         if(count>=5){
          gameState="end";
        }
       }
    
   else if(particle.body.position.y>600 && particle.body.position.x<507){
     score=score+100;
     particle=null;
     if(count>=5){
      gameState="end";
    }
   }
   else if(particle.body.position.y<900 && particle.body.position.x<747){
     score=score+200;
     particle=null;
     if(count>=5){
      gameState="end";
    }
   }
  }
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   if(gameState=="end"){
     textSize(100);
     text("GAME OVER",150,250);
   }
}

function mousePressed (){
    if (gameState!=="end"){
      count=count+1;
      particle=new Particle(mouseX,10,10);
    }
}