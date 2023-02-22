function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(230, 150, 200);

  myMouse()
  
}

function myMouse(x, y, size){
  
  if (mouseIsPressed === true){
     fill("pink");
  noStroke()
  strokeWeight()
  rect(100, 100, 100)
  ellipse(100, 100, 50)
  ellipse(200, 100, 50)
  } else {
    fill("peru")
    rect(200, 300, 200)
    ellipse(400, 300, 200)
    ellipse(200, 500, 200)
  }
  
}
