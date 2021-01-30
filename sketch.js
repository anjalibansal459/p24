const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    hammer1=new hammer(100,300,100,10)
}
function draw(){
    background("skyblue")
    Engine.update(engine)
    hammer1.display()
}