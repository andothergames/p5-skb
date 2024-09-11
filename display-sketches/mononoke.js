const sketchMononoke = function(q) {
  
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

  q.setup = function() {
  q.createCanvas(400, 400);
}

q.draw = function() {
  q.background(232, 255, 251);
  q.noStroke()

  drawHead();

  drawEar("left", 110);
  drawEar("right", 290);

  drawEye("left", 150);
  drawEyebrow(m.browCenterX, m.browCenterY);
  drawEye("right", 250);

  drawMouth(m.mouthX, m.mouthY, m.mouthSize);
  drawMoustache(m.moustacheCenterX, m.moustacheCenterY);
}

function drawHead() {
  q.fill(m.cream);
  q.ellipse(m.headCenterX, m.headCenterY, m.headSize * 1.3);

  q.fill(m.red);
  q.ellipse(m.headCenterX, m.headCenterY, m.headSize);
}

function drawEar(ear, center) {
  let dir = ear === "left" ? 1 : -1;

  q.fill(m.red);
  q.beginShape();
  q.vertex(center, 100);
  q.vertex(center, 20);
  q.vertex(center + 60 * dir, 80);
  q.endShape(q.CLOSE);

  q.fill(m.black);
  q.beginShape();
  q.vertex(center + 42 * dir, 86);
  q.vertex(center, 20);
  q.vertex(center + 60 * dir, 80);
  q.endShape(q.CLOSE);
}

function drawEye(eye, center) {
  q.fill(m.orange);
  q.ellipse(center, m.eyeHeight, m.eyeSize);

  q.fill(m.black);
  q.ellipse(center, m.eyeHeight, m.eyeSize / 1.5);

  let offsetX = eye === "left" ? -25 : 25;
  let offsetX2 = eye === "left" ? 25 : -25;

  q.ellipse(center + offsetX, m.eyeHeight - 25, 15);
  q.ellipse(center + offsetX2, m.eyeHeight + 20, 12);
}

function drawEyebrow(x, y) {
  q.noFill();
  q.stroke(m.beige);
  q.strokeWeight(m.browWidth);
  q.bezier(x - 70, y - 60, x - 20, y - 70, x, y, x, y);
  q.bezier(x + 70, y - 60, x + 20, y - 70, x, y, x, y);
  q.noStroke();
}

function drawMouth(x, y, size) {
  q.fill(m.orange);
  q.ellipse(x, y, size);
  
  q.fill(m.black);
  q.ellipse(x, y, size / 1.6);
}

function drawMoustache(x, y) {
  q.noFill();
  q.stroke(m.beige);
  q.strokeWeight(m.moustacheWidth);
  q.bezier(x - 90, y + 30, x - 80, y + 40, x - 60, y + 40, x - 40, y + 20);
  q.bezier(x - 40, y + 20, x - 20, y, x + 20, y, x + 40, y + 20);
  q.bezier(x + 40, y + 20, x + 60, y + 40, x + 70, y + 40, x + 90, y + 30);
  q.noStroke();
}
};
new p5(sketchMononoke, 'sketchMononoke');