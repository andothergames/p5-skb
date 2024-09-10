let angle = 0;
let centerSquareSize = 0.1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(CENTER);
  frameRate(3);
}

const color = {
  coral: [230, 0, 200, 100],
  blue: [0, 200, 255, 200],
  green: [0, 180, 200, 80],
  yellow: [250, 240, 0],
  orange: [255, 50, 0, 30],
  lightOrange: [255, 50, 0, 50],
};

function draw() {
  noStroke();
  background(color.yellow);
  translate(width / 2, height / 2);

  push();
  drawCenterSquare(color.green);
  if (centerSquareSize < 6) {
    centerSquareSize += 0.02;
  } else {
    centerSquareSize = 0.01;
  }
  pop();

  push();
  translate(100, 100);
  drawSquare1();
  translate(300, 300);
  drawSquare1();
  pop();

  push();
  translate(100, 100);
  drawSquare2();
  translate(-100, -100);
  drawSquare2();
  pop();

  push();
  translate(-300, -300);
  drawSquare1();
  translate(-100, -100);
  drawSquare2();
  pop();

  push();
  translate(-30, 30);
  drawSquare1();
  translate(80, -80);
  drawSquare2();
  pop();

  push();
  drawCircles(color.coral, 10);
  drawCircles(color.blue, 4);
  pop();

  angle = angle + -1;
}

function drawCenterSquare(c) {
  scale(centerSquareSize);
  fill(c);
  rect(0, 0, 50, 50);
}

function drawCircles(c, minWidth) {
  let randomw = random(10, 200);
  let randomh = random(10, 200);
  const width = random(minWidth, minWidth + 12);
  fill(c);
  ellipse(randomw, randomh, width);
  ellipse(-randomw, -randomh, width);
  ellipse(-randomw, randomh, width);
  ellipse(randomw, -randomh, width);
}

function drawSquare1() {
  let randomiser2 = random(0.01, 4);
  scale(randomiser2);
  fill(color.orange);
  rect(0, 0, 50, 50);
}

function drawSquare2() {
  let randomiser1 = random(0.01, 3);
  scale(randomiser1);
  fill(color.lightOrange);
  rect(0, 0, 50, 50);
}
