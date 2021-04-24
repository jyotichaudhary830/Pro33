const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
//var snow;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  //engine = Engine.create();
  //world = engine.world;
  
  createCanvas(1500,700);

  //snow = new Snow(800, 350, 90);
}

function draw() {
  background(backgroundImg);  
  
  //snow.display();
}