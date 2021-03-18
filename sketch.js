
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(50,height-150,70);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    box = new Dustbin(width-50,height-42,50,50);

	//box1=createSprite(1030, height-42,150,10);
	//box1.shapeColor="white";

	//box2=createSprite(1100, 430, 10,80);
	//box2.shapeColor="white";

	//box3=createSprite(950, 430, 10, 80);
	//box3.shapeColor="white";

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  box.display();

 // paper.collide(ground);
 //paper.setCollider(ground);
  
  drawSprites();
 
}



