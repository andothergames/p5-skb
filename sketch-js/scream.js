let growAmount = 1;
let isGrowing = true;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  background(scream.bgColour);
}

let gradient = {
  grow: 0,
  sneak: -150,
};

const scream = {
  bgColour: [320, 50, 100, 100],
  yellow: [53, 71, 100, 100],
  darkYellow: [53, 97, 94],
  blue: [226, 87, 100, 100],
  faceSize: 200,
  mouthX: 200,
  mouthY: 240,
  mouthW: 30,
  mouthH: 50,
};

function draw() {
  noStroke();

  drawFace(width / 2, height / 2);
  drawEye(160, 180);
  drawEye(240, 180);
  drawMouth(scream.mouthX, scream.mouthY);
  drawHand(110, 265, "left");
  drawHand(290, 265, "right");
}

function updateGradient(property, limit) {
  if (gradient[property] > limit) {
    isGrowing = false;
  } else if (gradient[property] < 0) {
    isGrowing = true;
  }
  gradient[property] += isGrowing ? growAmount : -growAmount;
}

function drawFace(x, y) {
  updateGradient("grow", 225);
  updateGradient("sneak", 75);

  push();
  linearGradient(
    x,
    gradient.sneak,
    y,
    gradient.grow,
    color(scream.blue),
    color(scream.yellow)
  );
  ellipse(width / 2, height / 2, scream.faceSize);
  pop();
}

function drawEye(x, y) {
  fill("#fff");
  stroke("#000");
  strokeWeight(1);
  ellipse(x, y, 36, 50);
}

function drawMouth(x, y) {
  noStroke();
  fill("#000");
  ellipse(x, y, scream.mouthW, scream.mouthH);
}

function drawHand(x, y, dir) {
  let c1 = dir === "left" ? 1 : -1;
  strokeWeight(36);
  stroke(scream.darkYellow);
  line(x, y, x, y - 29);
  line(x, y, x + 40 * c1, y + 33);
}

function linearGradient(nx, ny, sx, sy, colorN, colorS) {
  let gradient = drawingContext.createLinearGradient(nx, ny, sx, sy);
  gradient.addColorStop(0, colorN);
  gradient.addColorStop(1, colorS);
  drawingContext.fillStyle = gradient;
}
