var x = 0;


function setup() {
  createCanvas(800, 500);
  
 
}
function draw() {
   for(var i = 0; i <= windowWidth; i += 35) {
    fill(random(255));
    ellipse(i, random(400), random(100, 20));
  }
}
  
