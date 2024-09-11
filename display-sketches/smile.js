const sketchSmile = function(p){
  let growAmount = 1;
  let grow = true;
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

p.setup = function() {
  p.createCanvas(400, 400);
  p.frameRate(20);
}

p.draw = function() {
  p.background(s.bgColour);
  p.noStroke();
  drawFace(s.midw, s.midh);
  drawEyes();
  drawSmile();
}

function drawHeart(x, y, size) {
  p.beginShape();
  p.vertex(x, y);
  p.bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  p.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  p.endShape(p.CLOSE);
}

function drawFace(x, y) {
  p.fill(s.faceColour);
  p.ellipse(x, y, p.width / 2);
  p.fill(s.cheekColour);
  drawHeart(x - 70, y + 20, s.cheekSize);
  drawHeart(x + 70, y + 20, s.cheekSize);
}

function drawEyes() {
  p.fill(s.eyeColour);
  p.stroke(s.pupilColour);
  p.strokeWeight(s.eyeWeight);
  p.ellipse(s.midw - 60, s.midh - 10, s.eyeSize);
  p.ellipse(s.midw + 60, s.midh - 10, s.eyeSize);
  p.fill(s.pupilColour);
  p.ellipse(s.midw - 60, s.midh - 10, s.eyeSize - 10);
  p.ellipse(s.midw + 60, s.midh - 10, s.eyeSize - 10);
}

function drawSmile() {
  p.noFill();
  p.strokeWeight(s.smileWeight);

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

  p.bezier(
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
};
new p5(sketchSmile, 'sketchSmile');