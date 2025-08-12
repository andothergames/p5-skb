function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
}

let m = {
  cream: "#fff5e0",
  red: "#fc3f91",
  black: "#000000",
  orange: "#fcb138",
  beige: "#e3c381",
  headCenterX: 200,
  headCenterY: 200,
  headSize: 200,
  eyeSize: 60,
  eyeHeight: 180,
  mouthX: 200,
  mouthY: 260,
  mouthSize: 50,
  browWidth: "14",
  browCenterX: 200,
  browCenterY: 190,
  moustacheCenterX: 200,
  moustacheCenterY: 220,
  moustacheWidth: "12",
};

function draw() {
  background(232, 255, 251);

  drawHead();

  drawEar("left", 110);
  drawEar("right", 290);

  drawEye("left", 150);
  drawEyebrow(m.browCenterX,
    m.browCenterY);
  drawEye("right", 250);

  drawMouth(m.mouthX,
    m.mouthY,
    m.mouthSize);
  drawMoustache(m.moustacheCenterX,

    m.moustacheCenterY);
}

function drawHead() {
  fill(m.cream);
  ellipse(m.headCenterX,
    m.headCenterY,
    m.headSize * 1.3);

  fill(m.red);
  ellipse(m.headCenterX,
    m.headCenterY,
    m.headSize);
}

function drawEar(ear, center) {
  let dir = ear === "left" ? 1 : -1;

  fill(m.red);
  beginShape();
  vertex(center, 100);
  vertex(center, 20);
  vertex(center + 60 * dir, 80);
  endShape(CLOSE);

  fill(m.black);
  beginShape();
  vertex(center + 42 * dir, 86);
  vertex(center, 20);
  vertex(center + 60 * dir, 80);
  endShape(CLOSE);
}

function drawEye(eye, center) {
  fill(m.orange);
  ellipse(center,
    m.eyeHeight,
    m.eyeSize);

  fill(m.black);
  ellipse(center,
    m.eyeHeight,
    m.eyeSize / 1.5);

  let offsetX = eye === "left" ? -25 : 25;
  let offsetX2 = eye === "left" ? 25 : -25;

  ellipse(center + offsetX,
    m.eyeHeight - 25, 15);
  ellipse(center + offsetX2,
    m.eyeHeight + 20, 12);
}

function drawEyebrow(x, y) {
  noFill();
  stroke(m.beige);
  strokeWeight(m.browWidth);
  bezier(x - 70, y - 60,
    x - 20, y - 70,
    x, y, x, y);
  bezier(x + 70, y - 60,
    x + 20, y - 70,
    x, y, x, y);
  noStroke();
}

function drawMouth(x, y, size) {
  fill(m.orange);
  ellipse(x, y, size);

  fill(m.black);
  ellipse(x, y, size / 1.6);
}

function drawMoustache(x, y) {
  noFill();
  stroke(m.beige);
  strokeWeight(m.moustacheWidth);
  bezier(x - 90, y + 30,
    x - 80, y + 40,
    x - 60, y + 40,
    x - 40, y + 20);
  bezier(x - 40, y + 20,
    x - 20, y, x + 20,
    y, x + 40, y + 20);
  bezier(x + 40, y + 20,
    x + 60, y + 40,
    x + 70, y + 40,
    x + 90, y + 30);
  noStroke();
}
