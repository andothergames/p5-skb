const sketchHands = function(p) {

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

  p.setup = function() {
  p.createCanvas(400, 400);
  p.noStroke();
  p.colorMode(p.HSB, 360, 100, 100, 100);
}

p.draw = function() {
  p.background(h.bgColour);
  p.noStroke();
  drawFace(p.width / 2, p.height / 2);
  drawCheek(140, 220);
  drawCheek(260, 220);
  drawEye(160, 180);
  drawEye(240, 180);
  drawMouth(p.width / 2, p.height / 2);
  drawHand(130, 280, "left");
  drawHand(270, 280, "right");
}

function drawFace(x, y) {
  p.push();
  p.linearGradient(x, 75, y, 325, p.color(h.yellow), p.color(h.lightYellow));
  p.ellipse(p.width / 2, p.height / 2, h.faceW);
  p.pop();
}

function drawCheek(x, y) {
  p.push();
  p.radialGradient(x, y, 0, x, y, 30, p.color(h.blushInner), p.color(h.blushOuter));
  p.ellipse(x, y, h.blushW);
  p.pop();
}

function drawEye(x, y) {
  p.noFill();
  p.strokeWeight(h.featureWeight);
  p.stroke(h.blue);
  p.arc(x, y, h.eyeW, h.eyeH, p.radians(180), p.radians(0), p.OPEN);
}

function drawMouth(x, y) {
  p.noFill();
  p.strokeWeight(h.featureWeight);
  p.stroke(h.blue);
  p.arc(x, y, h.smileW, h.smileH, p.radians(0), p.radians(180), p.OPEN);
}

function drawHand(x, y, dir) {
  let c1 = dir === "left" ? 1 : -1;
  let c2 = dir === "left" ? -1 : 1;

  p.noStroke();
  p.fill(h.yellow);
  p.ellipse(x, y, 60);

  //fingers
  p.strokeWeight(14);
  p.stroke(h.yellow);
  p.line(x + 20 * c1, y - 15, x + 20 * c1, y - 44);
  p.line(x + 5 * c1, y - 20, x + 10 * c2, y - 58);
  p.line(x + 10 * c2, y - 17, x + 35 * c2, y - 55);
  p.line(x + 20 * c2, y - 5, x + 45 * c2, y - 32);
  p.line(x + 20 * c2, y + 7, x + 50 * c2, y - 6);
}

p.linearGradient = function(nx, ny, sx, sy, colorN, colorS) {
  let gradient = p.drawingContext.createLinearGradient(nx, ny, sx, sy);
  gradient.addColorStop(0, colorN);
  gradient.addColorStop(1, colorS);
  p.drawingContext.fillStyle = gradient;
}

p.radialGradient = function(nx, ny, nr, sx, sy, sr, colorN, colorS) {
  let gradient = p.drawingContext.createRadialGradient(nx, ny, nr, sx, sy, sr);
  gradient.addColorStop(0, colorN);
  gradient.addColorStop(1, colorS);
  p.drawingContext.fillStyle = gradient;
}
};
new p5(sketchHands, 'sketchHands');
