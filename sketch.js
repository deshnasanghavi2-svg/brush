function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //take purple color
  // Style the next points.
  stroke('purple');
  strokeWeight(10);
  
  // put a dot in the middle of the screen
  point(mouseX ,mouseY );
  
  //take green color
    stroke('green');
  // make dot smaller
  strokeWeight(5);
  //draw a dot next to previous dot
  point(mouseX+15 ,mouseY+15 );
  
}