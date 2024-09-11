const sketchFrog =  function(p){

  let f = {
    green: "#7eedd7",
    yellow: "#f8ff24",
    black: "#000000",
    eyeSocket: 80,
  };

  p.setup = function() {
  p.createCanvas(400, 400);
}

p.draw = function() {
  p.background("#f0c7ee");
  p.noStroke();
  drawHead();
  drawEyes();
  drawNostrils();
}

function drawPupil(x, y) {
  let distance = p.dist(x, y, p.mouseX, p.mouseY);
  let eyeSize = distance / 10;

  if (eyeSize > 50) {
    eyeSize = 50;
  }
  if (eyeSize < 10) {
    eyeSize = 10;
  }

  p.fill(f.black);
  p.ellipse(x, y, eyeSize, eyeSize);
}

function drawEye(x, y) {
  let distance = p.dist(x, y, p.mouseY, p.mouseX);
  let eyeSize = distance / 5;

  if (eyeSize > 70) {
    eyeSize = 70;
  }

  if (eyeSize < 20) {
    eyeSize = 20;
  }

  p.fill(f.yellow);
  p.ellipse(x, y, eyeSize, eyeSize);
}

function drawHead() {
  p.fill(f.green);
  p.rect(150, 120, 100, 200);
  p.arc(150, 220, 180, 200, p.radians(90), p.radians(270));
  p.arc(250, 220, 180, 200, p.radians(270), p.radians(90));
  p.fill(f.yellow);
  p.rect(150, 220, 100, 100);
  p.arc(150, 220, 180, 200, p.radians(90), p.radians(180));
  p.arc(250, 220, 180, 200, p.radians(0), p.radians(90));
  p.bezier(130, 220, 180, 190, 220, 190, 270, 220);
}

function drawEyes() {
  p.fill(f.green);
  p.ellipse(135, 100, f.eyeSocket);
  p.ellipse(265, 100, f.eyeSocket);
  drawEye(135, 100);
  drawEye(265, 100);
  drawPupil(135, 100);
  drawPupil(265, 100);
}

function drawNostrils() {
  p.fill(f.black);
  p.ellipse(185, 160, 8);
  p.ellipse(215, 160, 8);
}
};
new p5(sketchFrog, "sketchFrog");
