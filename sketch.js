
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var background, background2, backgroun3, backgroun4, background5;
var answer1, answer2, answer3, answer4, answer5;


function preload()
{
	background =loadImage("background.png");
	background2 =loadImage("background2.jpg");
	background3 =loadImage("background3.jpg");
	background4 =loadImage("background4.jpg");
	background5 =loadImage("background5.jpg");

	answer1 =loadImage("yourname.jpg");
	answer2 =loadImage("yourage.jpg");
	answer3 =loadImage("atowel.jpg");
	answer4 =loadImage("abank.jpg");
	answer5 =loadImage("piano.jpg");

	
}

function setup() {
	createCanvas(2000 , 700);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


//	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



