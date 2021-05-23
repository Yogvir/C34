const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var box;
var rope;
var ground;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(3000, 1000);
  ground = new Ground(600, 500, 900, 20);
  ball = new Ball(750, 50);
  rope = new Rope(ball.body, { x: 750, y: 50 });
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  rope.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
