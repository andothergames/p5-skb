const radius = 160;
const speed = 0.02;
let worldAngle = 0;
let time = 0;

let centerX = 200;
let centerY = 200;

function setup() {
  colorMode(HSB, 360, 100, 100, 100);
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  noStroke();
}

function draw() {
  background(0);

  for (var x = 0;
     x < width; 
     x += 2) {
    for (var y = 0;
       y < height;
        y += 2) {
      var c = 360 * noise(0.01 * x, 0.01 * y, time);
      noStroke();
      fill(c, 100, 100, 100);
      rect(x, y, 10, 10);
    }
  }

  eartCutOut();

  push();
  drawMoon();
  pop();

  worldAngle = worldAngle + speed;
  time += 0.01;
}

function eartCutOut() {
  stroke(220, 84, 33, 100);
  strokeWeight(400);
  noFill();
  ellipse(200, 200, 600);
  noStroke();
}

function drawMoon() {
  translate(centerX, centerY);
  rotate(worldAngle);
  fill("#fff");
  ellipse(radius, 0, 20);
}
