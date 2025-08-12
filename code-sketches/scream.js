let growAm = 1;
let isGrowing = true;
let grad = {
  grow: 0,
  sneak: -150,
};

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  frameRate(30);
  noStroke();
  colorMode(RGB, 255);
}

const scream = {
  bgColour: [244, 232, 250, 255],
  yellow: [255, 234, 74, 255],
  darkYellow: [240, 213, 7, 255],
  blue: [33, 85, 255, 255],
  black: [0, 0, 0, 255],
  white: [255, 255, 255, 255],
  faceSize: 200,
  mouthX: 200,
  mouthY: 240,
  mouthW: 30,
  mouthH: 50,
};

function draw() {
  background(scream.bgColour);
  noStroke();
  drawFace(width / 2, height / 2);
  drawEye(160, 180);
  drawEye(240, 180);
  drawMouth(scream.mouthX, scream.mouthY);
  drawHand(110, 265, "left");
  drawHand(290, 265, "right");
}

function updateGradient(property, limit) {
  if (grad[property] > limit) {
    isGrowing = false;
  } else if (grad[property] < 0) {
    isGrowing = true;
  }
  grad[property] += isGrowing ? growAm : -growAm;
}

function drawFace(x, y) {
  updateGradient("grow", 250);
  updateGradient("sneak", 75);

  push();
  linearGradient(
    x,
    grad.sneak,
    y,
    grad.grow,
    color(scream.blue),
    color(scream.yellow)
  );
  ellipse(width / 2, height / 2, scream.faceSize);
  pop();
}

function drawEye(x, y) {
  fill(scream.white);
  stroke(scream.black);
  strokeWeight(1);
  ellipse(x, y, 36, 50);
}

function drawMouth(x, y) {
  noStroke();
  fill(scream.black);
  ellipse(x, y, scream.mouthW, scream.mouthH);
}

function drawHand(x, y, dir) {
  let c1 = dir === "left" ? 1 : -1;
  strokeWeight(36);
  stroke(scream.darkYellow);
  line(x, y, x, y - 29);
  line(x, y, x + 40 * c1, y + 33);
}

function linearGradient(nx, ny,
  sx, sy,
  colorN, colorS) {
  let g = drawingContext.createLinearGradient
    (nx, ny, sx, sy);
  g.addColorStop(0, colorN);
  g.addColorStop(1, colorS);
  drawingContext.fillStyle = g;
}
