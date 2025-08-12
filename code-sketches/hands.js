function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

const h = {
  bgColour: [210, 60, 80, 100],
  yellow: [53, 71, 100, 100],
  lightYellow: [42, 99, 99, 100],
  blue: [220, 70, 40, 100],
  faceW: 200,
  blushOuter: [312, 81, 92, 0],
  blushInner: [20, 90, 100, 60],
  blushW: 70,
  eyeW: 20,
  eyeH: 30,
  smileW: 30,
  smileH: 20,
  featureWeight: 4,
};

function draw() {
  background(h.bgColour);
  noStroke();

  drawFace(width / 2, height / 2);
  drawCheek(140, 220);
  drawCheek(260, 220);
  drawEye(160, 180);
  drawEye(240, 180);
  drawMouth(width / 2, height / 2);
  drawHand(130, 280, "left");
  drawHand(270, 280, "right");
}

function drawFace(x, y) {
  push();
  linearGradient
    (x, 75,
      y, 325,
      color(h.yellow),
      color(h.lightYellow));
  ellipse(width / 2, height / 2, h.faceW);
  pop();
}

function drawCheek(x, y) {
  push();
  radialGradient
    (x, y,
      0, x,
      y, 30,
      color(h.blushInner),
      color(h.blushOuter));
  ellipse(x, y, h.blushW);
  pop();
}

function drawEye(x, y) {
  noFill();
  strokeWeight(h.featureWeight);
  stroke(h.blue);
  arc(x, y,
    h.eyeW, h.eyeH,
    radians(180),
    radians(0),
    OPEN);
}

function drawMouth(x, y) {
  noFill();
  strokeWeight(h.featureWeight);
  stroke(h.blue);
  arc(x, y,
    h.smileW,
    h.smileH,
    radians(0),
    radians(180),
    OPEN);
}

function drawHand(x, y, dir) {
  let c1 = dir === "left" ? 1 : -1;
  let c2 = dir === "left" ? -1 : 1;

  noStroke();
  fill(h.yellow);
  ellipse(x, y, 60);

  //fingers
  strokeWeight(14);
  stroke(h.yellow);
  line(x + 20 * c1, y - 15,
    x + 20 * c1, y - 44);
  line(x + 5 * c1, y - 20,
    x + 10 * c2, y - 58);
  line(x + 10 * c2, y - 17,
    x + 35 * c2, y - 55);
  line(x + 20 * c2, y - 5,
    x + 45 * c2, y - 32);
  line(x + 20 * c2, y + 7,
    x + 50 * c2, y - 6);
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

function radialGradient(nx, ny,
  nr, sx,
  sy, sr,
  colorN, colorS) {
  let g = drawingContext.createRadialGradient
    (nx, ny, nr, sx, sy, sr);
  g.addColorStop(0, colorN);
  g.addColorStop(1, colorS);
  drawingContext.fillStyle = g;
}
