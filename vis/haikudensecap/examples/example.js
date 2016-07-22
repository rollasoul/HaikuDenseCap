

 function preload() {
 var path = 'results.json';
 path = loadJSON(url);
 }

 function setup() {
 createCanvas(300, 300);
 background(153);
 noLoop();
 }

 function draw() {
 background(200);
 textSize(15);
 text(data[0].name, 10, 30);
 fill(0, 102, 153);
 }  