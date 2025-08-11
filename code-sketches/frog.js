function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
}

let f = {
  green: "#7eedd7",
  yellow: "#f8ff24",
  black: "#000000",
  eyeSocket: 80,
};

function draw() {
  background("#f0c7ee");
  noStroke();

  drawHead();
  drawEyes();
  drawNostrils();
}

function drawPupil(x, y) {
  let distance = dist(x, y, mouseX, mouseY);
  let eyeSize = distance / 10;

  if (eyeSize > 50) {
    eyeSize = 50;
  }
  if (eyeSize < 10) {
    eyeSize = 10;
  }

  fill(f.black);
  ellipse(x, y, eyeSize, eyeSize);
}

function drawEye(x, y) {
  let distance = dist(x, y, mouseY, mouseX);
  let eyeSize = distance / 5;

  if (eyeSize > 70) {
    eyeSize = 70;
  }

  if (eyeSize < 20) {
    eyeSize = 20;
  }

  fill(f.yellow);
  ellipse(x, y, eyeSize, eyeSize);
}

function drawHead() {
  fill(f.green);
  rect(150, 120, 100, 200);
  arc(150, 220, 180, 200, radians(90), radians(270));
  arc(250, 220, 180, 200, radians(270), radians(90));
  fill(f.yellow);
  rect(150, 220, 100, 100);
  arc(150, 220, 180, 200, radians(90), radians(180));
  arc(250, 220, 180, 200, radians(0), radians(90));
  bezier(130, 220, 180, 190, 220, 190, 270, 220);
}

function drawEyes() {
  fill(f.green);
  ellipse(135, 100, f.eyeSocket);
  ellipse(265, 100, f.eyeSocket);
  drawEye(135, 100);
  drawEye(265, 100);
  drawPupil(135, 100);
  drawPupil(265, 100);
}

function drawNostrils() {
  fill(f.black);
  ellipse(185, 160, 8);
  ellipse(215, 160, 8);
}
