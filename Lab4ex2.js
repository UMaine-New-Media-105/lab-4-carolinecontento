function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 100, 10);

  myTri(150, 100, 200, 200, 80, 100, 100, 200, 50);
  myCircle(300, 80, 100, 100, 50, 95);
  mySquare(250, 250, 100, 250, 230, 110);
}

function myTri(x, y, secondX, secondY, thirdX, thirdY, R, G, B) {
  fill(R, G, B);
  triangle(x, y, secondX, secondY, thirdX, thirdY);
}

function myCircle(x, y, circleSize, R, G, B) {
  fill(R, G, B);
  ellipse(x, y, circleSize);
}

function mySquare(x, y, squareSize, R, G, B) {
  fill(R, G, B);
  square(x, y, squareSize);
}
