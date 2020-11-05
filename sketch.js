const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, polygon_IMG;

function preload(){
  polygon_IMG = loadImage("hi.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
  //level one
  block1 = new rectangle(300,275,30,40);
  block2 = new rectangle(330,275,30,40);
  block3 = new rectangle(360,275,30,40);
  block4 = new rectangle(390,275,30,40);
  block5 = new rectangle(420,275,30,40);
  block6 = new rectangle(450,275,30,40);
  block7 = new rectangle(480,275,30,40);
  //level two
  block8 = new rectangle(330,235,30,40);
  block9 = new rectangle(360,235,30,40);
  block10 = new rectangle(390,235,30,40);
  block11 = new rectangle(420,235,30,40);
  block12 = new rectangle(450,235,30,40);
  //level three
  block13 = new rectangle(360,195,30,40);
  block14 = new rectangle(390,195,30,40);
  block15 = new rectangle(420,195,30,40);
  //top
  block16 = new rectangle(390,155,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SLINGSHOT(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  Engine.update(engine);

  ground.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  imageMode(CENTER)
  image(polygon_IMG,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}