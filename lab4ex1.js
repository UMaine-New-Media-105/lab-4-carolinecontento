function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 20, 100);

  myTri(150, 100, 200, 200, 80, 100, "lightgreen");
  myCircle(300, 80, 100, "peachpuff");
  mySquare(250, 250, 100, "gold");
}

function myTri(x, y, secondX, secondY, thirdX, thirdY, myColor) {
  fill(myColor);
  triangle(x, y, secondX, secondY, thirdX, thirdY);
}

function myCircle(x, y, circleSize, myColor) {
  fill(myColor);
  ellipse(x, y, circleSize);
}

function mySquare(x, y, squareSize, myColor) {
  fill(myColor);
  square(x, y, squareSize);
}
