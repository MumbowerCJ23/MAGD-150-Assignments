//For my movie poster, I thought it would be fun to give BoxDude from the Lab 07 example the titular role in his own movie!
//For some reason, on my computer at least, if I opened it in Microsoft Edge, the fonts would load, but the pdf function would not work. In contrast, if I opened it in Google Chrome, the pdf function would work, but the fonts would not load. Both aspects of my code are functional, I think it just depends on what browser you use.
//The scrolling text part of my code was provided with help from the "example_17_03_scrollingtext_2019_10_30_16_44_38" sketch file in the Lab 08 Examples. Box Dude was obviously inspired by the sketch in the "BoxDude" Lab 07 Example. The pdf function portion of my code was provided by the code found in  the Lab 08 Example, "Lesson_8G_SimplePDF_2019_10_30_16_44_20."
var pdf;
var TextFile;
var impact;
var showcard;
//This array sets up the headlines that scroll underneath the movie poster.
Information = [
  "Coming This Summer!", 
  "The classic P5 example character reimagined on the big screen!",
  "The best live action adaptation ever!",
  "Starring Dwayne Johnson as Box Dude!",
  "Rated PG-13"];

var x; 
var y = 0;


function setup() {
  createCanvas(450, 450);
//My loadStrings function would not allow me to directly import text from my text file no matter what I did. If I created a function or included it in my function preload, my entire code would either not display, or just be stuck on a "Loading..." screen. I even tried to use the function from the example and it still didn't work. I set up a variable for the loadStrings because that was the closest tactic I could of performed for it to work functionally.
  TextFile = loadStrings("movie.txt");
//These variables load the .ttf font files that are found within my lab folder when called upon.
  showcard = loadFont("showcard.ttf");
  impact = loadFont("impact.ttf");
  x = width;
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  let square1 = createVector(100, 60);
  let square2 = createVector(300, 20);
  background(220, 100, 0);
  fill(255);
  strokeWeight(0);
  ellipse(220, 120, 340, 340);
  fill(0);
  strokeWeight(1);
  textFont("showcard");
  textSize(20);
  text("Join Box Dude on his journey through", 20, 310); 
  text("the chaotic city of Code! Will he save", 20, 330);
  text("his family in time? Only time will tell...", 20, 350);
  text("When it comes to saving his family, this", 20, 380);
  text("Dude will think out of the box!", 50, 400);
//Box Dude
  rectMode(CENTER);
  fill(255, 0,0);
  rect(220,180, 200, 120);
  fill(255);
//This part of the function adds or subtracts the values found in the vectors previously set up, and allows the result of that addition or subtraction to become a coordinate for the rectangle.
  square1.add(square1.y);
  rect(square1.x, 240, 50, 50);
  square2.sub(square2.y);
  rect(square2.x, 240, 50, 50);
//sunglasses and mouth
  fill(0);
  rect(165, 160, 65, 50);
  rect(275, 160, 65, 50);
  line(165,160, 120, 140);
  line(165,150,275,150);
  line(275,150, 320,140);
  line(165, 205, 275, 205);
  fill(0);
  textAlign(CENTER);
  textFont(impact);
  textSize(60);
  text("Box Dude:", 215,55);
  text("The Movie",215,110);
  textSize(15);
  text("This time", 380, 150);
  text("it's personal.", 380, 170);
//This part of my code creates the scrolling text at the bottom. The Information[] is taken from the array at the top and is set to scroll depending on the length of the text.
  textSize(20);
  textAlign (LEFT);

  text(Information[y], x, height-10); 


  x = x - 2.6;

  let w = textWidth(Information[y]); 
  if (x < -w) {
    x = width;
    y = (y + 1) % Information.length;
  }
}
//This function allows a pdf to be saved when the mouse is clicked on the image. This function is able to work because the p5.pdf.js is called upon in the html file.
function mousePressed(){
        pdf.save();
}