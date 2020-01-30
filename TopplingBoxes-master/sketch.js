const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1700,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(270,500,50,50);
    box2 = new Box(140,500,50,50);
    box3 = new Box(235, 440, 50, 50);
    box4 = new Box(145, 440, 50, 50);
    ground = new Ground(200,height,4000,20);
    pig1 = new Pig(190, 440);
    pig2 = new Pig(190, 500);
    log1 = new Log(190, 385, 150, PI/2);
    log2 = new Log(190, 450, 150, PI/2);
    bird = new Bird(100, 100, 50, 50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird.display();
}