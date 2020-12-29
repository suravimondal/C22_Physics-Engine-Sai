
//namespacing or referencing or nick-naming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground;

function setup() {
  createCanvas(400,400);

  //creating our engine
  engine= Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }

  //i want to create a rectangular body
  ground= Bodies.rectangle(200,350,400,20, options);

  World.add(world,ground);

  console.log(ground);
  
}

function draw() {
  background(255); 
  //update your engine every moment
  Engine.update(engine);
  rectMode(CENTER); 

  rect(ground.position.x,ground.position.y,400,20);
 
}