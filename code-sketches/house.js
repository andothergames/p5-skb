function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  frameRate(4);
  colorMode(RGB, 255);
  background(h.bgColour);
  noStroke();
  noFill();
  drawBackground();
  drawHouse();
}

let h = {
  bgColour: [135, 235, 250],
  colour: [255, 241, 227],
  roofColour: [255, 145, 240],
  grassColour: [44, 178, 151],
  windowColour: [172, 138, 235],
  frameColour: [255, 255, 255],
  smokeColour: [0, 0, 0, 50],
  houseW: 200,
  chimneyW: 20,
  chimneyH: 40,
  frameWeight: 1,
  windowSize: 50,
  bushW: 40,
  bushH: 35,
  smokeSize: 30,
  smokex: 130,
  smokey: 140,
};

function draw() {
  drawSmoke();
}

function drawBackground(x, y) {
  fill(h.bgColour);
  rect(0, 0, 400, 400);
  noStroke();
  noFill();
  drawGrass();
  drawBiggerBush(0, 360);
  drawBiggerBush(315, 360);
  drawSmallerBush(30, 365);
  drawSmallerBush(295, 365);
}

function drawHouse() {
  drawBase(width / 2 - 100, height / 2);
  drawRoof();
  drawDoor(width / 2, height / 2 + 160);
  drawWindows();
}

function drawBase(x, y) {
  fill(h.colour);
  noStroke();
  rect(width / 2 - 100, height / 2, h.houseW, height / 2.5);
}

function drawRoof() {
  fill(h.roofColour);
  triangle(
    width / 2 - 120,
    height / 2,
    width / 2,
    height / 2 - 50,
    width / 2 + 120,
    height / 2
  );
  rect(width / 2 - 80, height / 2 - 40, h.chimneyW, h.chimneyH);
}

function drawDoor(x, y) {
  fill(h.roofColour);
  arc(
    width / 2,
    height / 2 + 160,
    width / 8,
    height / 5,
    radians(180),
    radians(0)
  );
}

function drawWindow(x, y) {
  fill(h.frameColour);
  stroke(h.windowColour);
  strokeWeight(h.frameWeight);
  ellipse(x, y, h.windowSize);
  fill(h.windowColour);
  ellipse(x, y, h.windowSize - 12);
  stroke(h.frameColour);
  strokeWeight(h.frameWeight + 3);
  line(x - 22, y, x + 22, y);
  line(x, y - 22, x, y + 22);
}

function drawWindows() {
  let numberOfWindows = 3;
  for (let i = 0; i < numberOfWindows; i++) {
    drawWindow(h.houseW - 62.5 + i * (h.windowSize + 12.5), height / 2 + 50);
  }
}

function drawGrass() {
  fill(h.grassColour);
  noStroke();
  rect(0, height / 2 + 160, width, height / 5);
}

function drawBiggerBush(x, y) {
  fill(h.grassColour);
  noStroke();
  arc(x, y, h.bushW, h.bushH, radians(180), radians(360));
}

function drawSmallerBush(x, y) {
  arc(x, y, h.bushW - 10, h.bushH - 6, radians(180), radians(360));
}

function drawSmoke() {
  noStroke();
  let growAmount = random(10, 20);
  let grow = true;

  fill(h.smokeColour);
  let rx = random(100, 160);
  ellipse(rx, h.smokey, h.smokeSize);

  if (h.smokey < 100) {
    grow = true;
  }
  if (grow == true) {
    h.smokey -= growAmount;
  }

  if (h.smokey < -30) {
    h.smokey = 140;
    drawBackground(0, 0);
    drawHouse(0, 0);
  }
}
