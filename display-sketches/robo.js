const sketchRobo = function(p) {

  const r = {
    grey: "#c0c2c2",
    blue: "#d5ecf0",
    red: "#f5027c",
    mint: "#02f5f5",
    teal: "#1aa8c4",
    white: "#ffffff",
    black: "#000000",
    lilac: "#cb8fff",
    purple: "#6e3a9c",
    orange: "#faac52",
    yellow: "#fffec4",
    headCenter: 200,
    headWidth: 200,
    headRadius: 20,
    noseCenterX: 200,
    noseCenterY: 170,
    earHeight: 160,
    earWidth: 20,
    earHeightSize: 60,
    earRadius: 4,
  };

p.setup = function() {
  p.createCanvas(400, 400);
}
p.draw = function() {
  p.noStroke();
  p.background("#02f5f5");

  drawHead();

  drawEye(150, 180);
  drawEye(250, 180);

  drawEars(r.headCenter, r.earHeight);

  drawNose(r.noseCenterX, r.noseCenterY);

  drawMouth();
  drawTeeth();

  drawHat();
}

function drawHead() {
  p.fill(r.grey);
  p.rectMode(p.CENTER);
  p.square(r.headCenter, r.headCenter, r.headWidth + 40, r.headRadius);
  p.fill(r.blue);
  p.square(r.headCenter, r.headCenter, r.headWidth, r.headRadius);
  p.rectMode(p.CORNER);
}

function drawEye(x, y) {
  p.fill(r.mint);
  p.ellipse(x, y, 60);
  p.fill(r.teal);
  p.arc(x, y, 60, 60, p.radians(0), p.radians(180));
  p.fill(r.white);
  p.ellipse(x, y, 40);
}

function drawNose(x, y) {
  p.fill(r.red);
  p.triangle(x, y, x + 20, y + 40, x - 20, y + 40);
}

function drawEars(x, y) {
  p.fill(r.red);
  p.rect(x - 140, y, r.earWidth, r.earHeightSize, r.earRadius);
  p.rect(x + 120, y, r.earWidth, r.earHeightSize, r.earRadius);
}

function drawMouth() {
  p.stroke(r.black);
  p.strokeWeight(3);
  p.fill(r.white);
  p.rect(155, 230, 90, 24, 12);
  p.noStroke();
}

function drawTeeth() {
  p.stroke(r.black);
  p.strokeWeight(5);
  p.strokeCap(p.SQUARE);
  p.line(200, 230, 200, 254);
  p.line(225, 230, 225, 254);
  p.line(175, 230, 175, 254);
  p.noStroke();
}

function drawHat() {
  p.stroke(r.purple);
  p.strokeWeight(4);
  p.fill(r.lilac);
  p.arc(200, 68, 50, 50, p.radians(20), p.radians(160));

  p.noStroke();
  p.fill(r.orange);
  p.ellipse(200, 60, 38);
  p.fill(r.yellow);
  p.arc(200, 60, 38, 38, p.radians(190), p.radians(350));
}
};
new p5(sketchRobo, 'sketchRobo');
