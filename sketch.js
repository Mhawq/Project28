
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,stone,Boy
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var slingShot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(900,300,500);
	ground = new Ground(600,548,1200,15);
        stone = new Stone(110,400,70,70);
	boy = new Boy(200,450,250,250);

	mango1 = new Mango(900,220,50,50);
	mango2 = new Mango(850,180,60,60);
	mango3 = new Mango(920,100,60,60);
	mango4 = new Mango(1030,180,50,50);
	mango5 = new Mango(750,220,70,70);
	mango6 = new Mango(820,120,50,50);
	mango7 = new Mango(960,160,80,80);
	mango8 = new Mango(820,120,50,50);
	mango9 = new Mango(970,255,60,60);
	mango10 = new Mango(1100,240,70,70);

	slingShot = new Slingshot(stone.body,{x:110,y:400})

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stone.boy,{x:110,y:400})
		launcherObject.attach(stone.boy);
	}
}

function draw() {
  rectMode(CENTER);
  background('grey');

  tree.display();
  ground.display();
  boy.display();
  stone.display();

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  slingshot.display()

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lmango.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance <= lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
  }
}


