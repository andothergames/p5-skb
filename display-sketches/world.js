const sketchWorld = function(p){

const radiusWorld = 160;
const speedWorld = 0.02;
let angleWorld = 0;
let timeWorld = 0;
let centerX = 200;
let centerY = 200;

p.setup = function() {
  p.colorMode(p.HSB, 360, 100, 100, 100);
  p.createCanvas(400, 400);
  p.noStroke();
}

p.draw = function() {
  p.background(0);

  for (var x = 0; x < p.width; x += 2) {
    for (var y = 0; y < p.height; y += 2) {
      var c = 360 * p.noise(0.01 * x, 0.01 * y, timeWorld);
      p.noStroke();
      p.fill(c, 100, 100, 100);
      p.rect(x, y, 10, 10);
    }
  }

  eartCutOut();

  p.push();
  drawMoon();
  p.pop();

  angleWorld = angleWorld + speedWorld;
  timeWorld += 0.01;
}

function eartCutOut() {
  p.stroke(220, 84, 33, 100);
  p.strokeWeight(400);
  p.noFill();
  p.ellipse(200, 200, 600);
  p.noStroke();
}

function drawMoon() {
  p.translate(centerX, centerY);
  p.rotate(angleWorld);
  p.fill("#fff");
  p.ellipse(radiusWorld, 0, 20);
}
};
new p5(sketchWorld, 'sketchWorld');