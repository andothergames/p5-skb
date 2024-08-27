function setup() {
  createCanvas(400, 400);
}

const r = {
  grey: "#c0c2c2",
  blue: "#d5ecf0",
  red: "#f5027c",
  mint: "#02f5f5",
  teal: "#1aa8c4",
  white: "#ffffff",
  black: "#000000",
  lilac: "#cb8fff",
  purple: "#6e3a9c",
  orange: "#faac52",
  yellow: "#fffec4",
  headCenter: 200,
  headWidth: 200,
  headRadius: 20,
  noseCenterX: 200,
  noseCenterY: 170,
  earHeight: 160,
  earWidth: 20,
  earHeightSize: 60,
  earRadius: 4,
};

function draw() {
  noStroke();
  background("#f0c7ee");

  drawHead();

  drawEye(150, 180);
  drawEye(250, 180);

  drawEars(r.headCenter, r.earHeight);

  drawNose(r.noseCenterX, r.noseCenterY);

  drawMouth();

  drawHat();
}

function drawHead() {
  fill(r.grey);
  rectMode(CENTER);
  square(r.headCenter, r.headCenter, r.headWidth + 40, r.headRadius);
  fill(r.blue);
  square(r.headCenter, r.headCenter, r.headWidth, r.headRadius);
  rectMode(CORNER);
}

function drawEye(x, y) {
  fill(r.mint);
  ellipse(x, y, 60);

  fill(r.teal);
  arc(x, y, 60, 60, radians(0), radians(180));

  fill(r.white);
  ellipse(x, y, 40);
}

function drawNose(x, y) {
  fill(r.red);
  triangle(x, y, x + 20, y + 40, x - 20, y + 40);
}

function drawEars(x, y) {
  fill(r.red);
  rect(x - 140, y, r.earWidth, r.earHeightSize, r.earRadius);
  rect(x + 120, y, r.earWidth, r.earHeightSize, r.earRadius);
}

function drawMouth() {
  strokeWeight(2);
  stroke(r.black);
  fill(r.white);
  rect(155, 230, 90, 24, 12);
  strokeCap(SQUARE);
  strokeWeight(5);
  line(200, 230, 200, 254);
  line(225, 230, 225, 254);
  line(175, 230, 175, 254);
}

function drawHat() {
  strokeWeight(4);
  stroke(r.purple);
  fill(r.lilac);
  arc(r.headCenter, 68, 50, 50, radians(20), radians(160));

  noStroke();
  fill(r.orange);
  ellipse(r.headCenter, 60, 38);
  fill(r.yellow);
  arc(r.headCenter, 60, 38, 38, radians(190), radians(350));
}