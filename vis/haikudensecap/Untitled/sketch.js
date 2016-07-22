source grammar 
 
var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Click for haiku", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(50);
  var firstLine  = "the " + 
    lexicon.randomWord("jj", 2) + " " +
    lexicon.randomWord("nn", 2);
  var secondLine = lexicon.randomWord("vbg", 2) +
    " in the " +
    lexicon.randomWord("jj", 2) + " " +
    lexicon.randomWord("nn", 1);
  var thirdLine = "I " +
    lexicon.randomWord("vbd", 2) + " " + 
    lexicon.randomWord("rb", 2);
  text(firstLine, width/2, 150);
  text(secondLine, width/2, 200);
  text(thirdLine, width/2, 250);
}

