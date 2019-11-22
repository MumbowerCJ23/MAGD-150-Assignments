//functions overRect, overCircle, and update were utitilized from Lab 05 examples: ButtonExample2. The foundation for my back and forth motion was utilitized from the Lab 05 Presentation slides.
var rectOver = false;
var circleOver = false;
var a = 150;
var b = 150;
var speed = 2;
function setup() {
  createCanvas(450, 450);
}

function draw() {
  update(mouseX, mouseY);
  background(100, 0, 0);
  fill(0);
  rect(100,50,220,180);
  fill(0, 0, 200);
  rect(110,60,200,150);
  fill(0);
  rect(195,210, 30, 50);
  rect(170,250, 80, 20);
  rect(320, 240, 100, 200);
  textSize(10);
  fill(255);
  text("TV", 203, 225);
  fill(200, 0, 0);
  rect(330,250, 30, 30);
  textSize(20);
  fill(255);
  text("Remote", 335,425);
  // hover
    if (rectOver) {
    fill(150, 0 , 0);
  } else {
    fill(200, 0, 0);
  }
  rect(330,250, 30, 30);
  textSize(15);
  fill(0);
  text("1", 340, 270);
  fill(255);
  //idle screen for TV
  ellipse(a,b,20,20);
  a+= speed
  if(a-120 <= 0 || a+155>width){
  speed *= -1;
  }
  //channel 1
   if(mouseIsPressed){
  if(mouseX>330 && mouseX <330+30 && mouseY>250 && mouseY <250+30){
  fill(200, 0, 0);
  rect(110,60,200,150);
  fill(100, 0, 0);
  rect(330,250,30,30);
  textSize(25);
  fill(255);
  text("Channel 1 News", 116, 136);
  }
   }
  //channel 2
if(mouseIsPressed){
  if(mouseX>375 && mouseX <375+30 && mouseY>285 && mouseY <285+30){
    fill(0,200,0);
    rect(110, 60, 200, 150);
    textSize(25);
    fill(255);
    text("Channel 2 Sports", 114, 136);
  }
     }
  //hover 2
    if (circleOver) {
    fill(0, 100, 0);
  } else {
    fill(0, 200, 0);
  }
  ellipse(390, 300, 30, 30);
  textSize(15);
  fill(0);
  text("2", 385, 305);
  }
function overRect(x, y, width, height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}
function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}
function update( x,  y) {
  if ( overCircle(390, 300, 30, 30) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(330,250, 30, 30) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}