var weather;
function preload() {
  var path = 'results.json';
  weather = loadJSON(path);
}

var myP;

function setup() {
  noLoop();
  createCanvas(1000, 1000);
  myP = createP('weather');
  
}

  function draw() {
  //background(200);
  // get the humidity value out of the loaded JSON
  //var humidity = weather.main.humidity;
  //fill(0, humidity); // use the humidity value to set the alpha
  //ellipse(width/2, height/2, 50, 50);
  

}

