const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){

}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(700,300,270,10);
 
  
  box1 = new Box(280+320,275,30,40);  
  box2 = new Box(310+320,275,30,40);
  box3 = new Box(340+320,275,30,40);
  box4 = new Box(370+320,275,30,40);
  box5 = new Box(400+320,275,30,40);
  box6 = new Box(430+320,275,30,40);
  box7 = new Box(460+320,275,30,40);
  box8 = new Box(490+320,275,30,40);
  box9 = new Box(310+320,235,30,40);
  box10 = new Box(340+320,235,30,40);
  box11 = new Box(370+320,235,30,40);
  box12 = new Box(400+320,235,30,40);
  box13 = new Box(430+320,235,30,40);
  box14 = new Box(460+320,235,30,40);
  box15 = new Box(340+320,195,30,40);
  box16 = new Box(370+320,195,30,40);
  box17 = new Box(400+320,195,30,40);
  box18 = new Box(430+320,195,30,40);
  box19 = new Box(370+320,155,30,40);
  box20 = new Box(400+320,155,30,40);
  box21 = new Box(385+320,115,30,40);





  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {

  Engine.update(engine);
 
  background ("Black")

  strokeWeight(2);
  stroke(15);
  
  stand1.display();

  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

 

  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
