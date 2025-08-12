let growAmount = 1;
let grow = true;

function setup() {
  frameRate(20);
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
}

const s = {
  bgColour: "#b3baff",
  faceColour: "#feffa8",
  cheekColour: "#fedeff",
  pupilColour: "#000000",
  eyeColour: "#ffffff",
  eyeWeight: 1,
  eyeSize: 30,
  cheekSize: 20,
  smileWeight: 4,
  smileRate: -20,
  midh: 200,
  midw: 200,
};

function draw() {
  background(s.bgColour);
  noStroke();

  drawFace(s.midw, s.midh);
  drawEyes();
  drawSmile();
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex
    (x - size / 2,
      y - size / 2,
      x - size,
      y + size / 3,
      x,
      y + size);
  bezierVertex
    (x + size,
      y + size / 3,
      x + size / 2,
      y - size / 2,
      x,
      y);
  endShape(CLOSE);
}

function drawFace(x, y) {
  fill(s.faceColour);
  ellipse(x, y, width / 2);
  fill(s.cheekColour);
  heart(x - 70, y + 20, s.cheekSize);
  heart(x + 70, y + 20, s.cheekSize);
}

function drawEyes() {
  fill(s.eyeColour);
  stroke(s.pupilColour);
  strokeWeight(s.eyeWeight);
  ellipse
    (s.midw - 60,
      s.midh - 10,
      s.eyeSize);
  ellipse
    (s.midw + 60,
      s.midh - 10,
      s.eyeSize);
  fill(s.pupilColour);
  ellipse
    (s.midw - 60,
      s.midh - 10,
      s.eyeSize - 10);
  ellipse
    (s.midw + 60,
      s.midh - 10,
      s.eyeSize - 10);
}

function drawSmile() {
  noFill();
  strokeWeight(s.smileWeight);

  if (s.smileRate > 35) {
    grow = false;
  }
  if (s.smileRate < -15) {
    grow = true;
  }

  if (grow == true) {
    s.smileRate += growAmount;
  } else {
    s.smileRate -= growAmount;
  }

  bezier(
    s.midw - 20,
    s.midh + 10,
    s.midw - 15,
    s.midh + s.smileRate,
    s.midw + 15,
    s.midh + s.smileRate,
    s.midw + 20,
    s.midh + 10
  );
}
