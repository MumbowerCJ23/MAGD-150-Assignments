var x = 0;
var y = 100;
var z = 60;
var w = 400;
var a = 2;
function setup() {
  createCanvas(410, 410);
  frameRate(30);
}

function draw() {
  // bubbles
  colorMode(RGB);
  background(80,150,100);
  fill(0, 400, 600);
  ellipse(x, 100, 50, 50);
  x++;
  ellipse(300, y, 100, 100);
  y++;
  ellipse(z, w, 150, 150);
  z++;
  w--;
  ellipse(min(100,101), x *= 1, 20, 20);
  ellipse(a /= 0, max(100,50), 40, 40);
  ellipse(pmouseX, pmouseY, 75, 75);
  //map
  let b = map(mouseY, 0, 60, 40, 50);
  ellipse(b, 120, 35, 35);
print('The FrameCount is ' + frameCount);
print('The mouse X coordinate is ' + mouseX);
print('The mouse Y coordinate is ' + mouseY);
}