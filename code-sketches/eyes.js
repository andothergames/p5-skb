let angle = 0;
let speed = 0.02;

let centerLX = 150;
let centerY = 200;
let centerRX = 250;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  background(e.bgColour);
}

const e = {
  bgColour: [320, 50, 100, 100],
  yellow: [66, 71, 100, 100],
  warmYellow: [42, 99, 99, 100],
  white: [0, 0, 100],
  black: [0, 0, 0],
  faceW: 200,
  eyeSize: 30,
  eyeLine: 1,
  pupilSize: 20,
  mouthX: 200,
  mouthY: 260,
  mouthWeight: 8,
};

const eyeRadius = e.eyeSize / 2;

function draw() {
  noStroke();
  drawFace(width / 2, height / 2);
  drawEye(centerLX, centerY);
  drawEye(centerRX, centerY);
  drawMouth(e.mouthX, e.mouthY);
}

function drawFace(x, y) {
  push();
  linearGradient(200, 75, 200, 325, color(e.yellow), color(e.warmYellow));
  ellipse(x, y, e.faceW);
  pop();
}

function drawEye(x, y) {
  fill(e.white);
  stroke(e.black);
  strokeWeight(e.eyeLine);
  ellipse(x, y, 50);

  push();
  translate(x, y);
  rotate(angle);
  fill(e.black);
  ellipse(eyeRadius, 0, e.pupilSize);
  pop();
  
  angle = angle + speed;
}

function drawMouth(x, y) {
  strokeWeight(e.mouthWeight);
  stroke(e.black);
  line(x - 15, y, x + 15, y);
}

function linearGradient(nx, ny, sx, sy, colorN, colorS) {
  let gradient = drawingContext.createLinearGradient(nx, ny, sx, sy);
  gradient.addColorStop(0, colorN);
  gradient.addColorStop(1, colorS);
  drawingContext.fillStyle = gradient;
}
