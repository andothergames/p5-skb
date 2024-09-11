const sketchEyes = function (p) {
  let angle = 0;
  let speed = 0.02;

  let centerLX = 150;
  let centerY = 200;
  let centerRX = 250;

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

  p.setup = function() {
    p.createCanvas(400, 400);
    p.noStroke();
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.background(e.bgColour);
  };

  p.draw = function () {
    p.noStroke();
    drawFace(p.width / 2, p.height / 2);
    drawEye(centerLX, centerY);
    drawEye(centerRX, centerY);
    drawMouth(e.mouthX, e.mouthY);
  };

  function drawFace(x, y) {
    p.push();
    p.linearGradient(200, 75, 200, 325, p.color(e.yellow), p.color(e.warmYellow));
    p.ellipse(x, y, e.faceW);
    p.pop();
  }

  function drawEye(x, y) {
    p.fill(e.white);
    p.stroke(e.black);
    p.strokeWeight(e.eyeLine);
    p.ellipse(x, y, 50);

    p.push();
    p.translate(x, y);
    p.rotate(angle);
    p.fill(e.black);
    p.ellipse(eyeRadius, 0, e.pupilSize);
    p.pop();

    angle = angle + speed;
  }

  function drawMouth(x, y) {
    p.strokeWeight(e.mouthWeight);
    p.stroke(e.black);
    p.line(x - 15, y, x + 15, y);
  }

  p.linearGradient = function (nx, ny, sx, sy, colorN, colorS) {
    let gradient = p.drawingContext.createLinearGradient(nx, ny, sx, sy);
    gradient.addColorStop(0, colorN);
    gradient.addColorStop(1, colorS);
    p.drawingContext.fillStyle = gradient;
  };
};

new p5(sketchEyes, "sketchEyes");
