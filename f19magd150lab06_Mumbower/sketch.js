//My code is inspired by classic games such as Asteroids or Space Invaders. The setting is in outer space, since a lot of retro games were centered around that theme. The user is controlling the speed of the "spaceship" in this code. The spaceship is just a square because retro video games typically had a simple shape to represent an object, such as Pac-Man or even Pong. The stars are also in a very neat pattern because retro video games typically had very organized pattern in their layout.
var a = 50;
var b = 20;
var c = 3;
var x = 0.2;
var y = 10;
function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(0);
  //stars
  fill(255);
  ellipse(10,10,10,10);
  ellipse(10,50,10,10);
  ellipse(10,90,10,10);
  ellipse(10,130,10,10);
  ellipse(10,170,10,10);
  ellipse(10,210,10,10);
  ellipse(50,10,10,10);
  ellipse(50,50,10,10);
  ellipse(50,90,10,10);
  ellipse(50,130,10,10);
  ellipse(50,170,10,10);
  ellipse(50,210,10,10);
  ellipse(90,10,10,10);
  ellipse(90,50,10,10);
  ellipse(90,90,10,10);
  ellipse(90,130,10,10);
  ellipse(90,170,10,10);
  ellipse(90,210,10,10);
  ellipse(130,10,10,10);
  ellipse(130,50,10,10);
  ellipse(130,90,10,10);
  ellipse(130,130,10,10);
  ellipse(130,170,10,10);
  ellipse(130,210,10,10);
  ellipse(170,10,10,10);
  ellipse(170,50,10,10);
  ellipse(170,90,10,10);
  ellipse(170,130,10,10);
  ellipse(170,170,10,10);
  ellipse(170,210,10,10);
  ellipse(210,10,10,10);
  ellipse(210,50,10,10);
  ellipse(210,90,10,10);
  ellipse(210,130,10,10);
  ellipse(210,170,10,10);
  ellipse(210,210,10,10);
  ellipse(210,250,10,10);
  ellipse(210,290,10,10);
  ellipse(210,330,10,10);
  ellipse(210,370,10,10);
  ellipse(210,410,10,10);
  ellipse(250,10,10,10);
  ellipse(250,50,10,10);
  ellipse(250,90,10,10);
  ellipse(250,130,10,10);
  ellipse(250,170,10,10);
  ellipse(250,210,10,10);
  ellipse(250,250,10,10);
  ellipse(250,290,10,10);
  ellipse(250,330,10,10);
  ellipse(250,370,10,10);
  ellipse(250,410,10,10);
  ellipse(290,210,10,10);
  ellipse(290,250,10,10);
  ellipse(290,290,10,10);
  ellipse(290,330,10,10);
  ellipse(290,370,10,10);
  ellipse(290,410,10,10);
  ellipse(330,210,10,10);
  ellipse(330,250,10,10);
  ellipse(330,290,10,10);
  ellipse(330,330,10,10);
  ellipse(330,370,10,10);
  ellipse(330,410,10,10);
  ellipse(370,210,10,10);
  ellipse(370,250,10,10);
  ellipse(370,290,10,10);
  ellipse(370,330,10,10);
  ellipse(370,370,10,10);
  ellipse(370,410,10,10);
  ellipse(410,210,10,10);
  ellipse(410,250,10,10);
  ellipse(410,290,10,10);
  ellipse(410,330,10,10);
  ellipse(410,370,10,10);
  ellipse(410,410,10,10);
  //planets
  strokeWeight(10);
  stroke(0,0,200);
  fill(200,0,0);
  ellipse(-10,400,390,360);
  stroke(0,0,200);
  fill(0,200,0);
  ellipse(400,50,200,200);
  c = cos(x)* 1.15
  strokeWeight(2);
  Move();
  //This mouseIsPressed statement allows the spaceship to move faster and turn orange (which suggests that it is on fire in order to move quickly). When not clicked, it moves a normal pace and is a gray color.
 if (mouseIsPressed) { fill('#FF9600')
   Rotate();
   Zoom();
  Move();
  Move();
}
  else
  {
    Rotate();
    fill(100);
  rect(a,b,50,50);
  }
}
//This function makes the space ship move faster and forward. It also grows a tad bigger to display that it is going fast among the stars when called upon.
function Zoom (){
  scale(c);
  translate(5,5);
  rect(a,b,50,50);
}
// This function moves the spaceship across the screen when called upon and also loops it around the screen, whenever it goes offscreen.
function Move () {
  a++;
  
  if(a-150>height){
    a=-150;
  }
}

// This function rotates the spaceship in order to make it go diagonal when called upon.
function Rotate () {
  rotate(PI / 5.0);
}