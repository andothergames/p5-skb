const sketchHouse = function (p) {
  let h = {
    bgColor: [135, 235, 250],
    color: [255, 241, 227],
    roofColor: [255, 145, 240],
    grassColor: [44, 178, 151],
    windowColor: [172, 138, 235],
    frameColor: [255, 255, 255],
    smokeColor: [0, 0, 0, 50],
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

  p.setup = function () {
    p.createCanvas(400, 400);
    p.frameRate(4);
    p.colorMode(p.RGB, 255);
    p.background(h.bgColor);
    p.noStroke();
    p.noFill();
    drawBackground();
    drawHouse();
  };

  p.draw = function () {
    drawSmoke();
  };

  function drawBackground(x, y) {
    p.fill(h.bgColor);
    p.rect(0, 0, 400, 400);
    p.noStroke();
    p.noFill();
    drawGrass();
    drawBiggerBush(0, 360);
    drawBiggerBush(315, 360);
    drawSmallerBush(30, 365);
    drawSmallerBush(295, 365);
  }

  function drawHouse() {
    drawBase(p.width / 2 - 100, p.height / 2);
    drawRoof();
    drawDoor(p.width / 2, p.height / 2 + 160);
    drawWindows();
  }

  function drawBase(x, y) {
    p.fill(h.color);
    p.noStroke();
    p.rect(p.width / 2 - 100, p.height / 2, h.houseW, p.height / 2.5);
  }

  function drawRoof() {
    p.fill(h.roofColor);
    p.triangle(
      p.width / 2 - 120,
      p.height / 2,
      p.width / 2,
      p.height / 2 - 50,
      p.width / 2 + 120,
      p.height / 2
    );
    p.rect(p.width / 2 - 80, p.height / 2 - 40, h.chimneyW, h.chimneyH);
  }

  function drawDoor(x, y) {
    p.fill(h.roofColor);
    p.arc(
      p.width / 2,
      p.height / 2 + 160,
      p.width / 8,
      p.height / 5,
      p.radians(180),
      p.radians(0)
    );
  }

  function drawWindow(x, y) {
    p.fill(h.frameColor);
    p.stroke(h.windowColor);
    p.strokeWeight(h.frameWeight);
    p.ellipse(x, y, h.windowSize);
    p.fill(h.windowColor);
    p.ellipse(x, y, h.windowSize - 12);
    p.stroke(h.frameColor);
    p.strokeWeight(h.frameWeight + 3);
    p.line(x - 22, y, x + 22, y);
    p.line(x, y - 22, x, y + 22);
  }

  function drawWindows() {
    let numberOfWindows = 3;
    for (let i = 0; i < numberOfWindows; i++) {
      drawWindow(h.houseW - 62.5 + i * (h.windowSize + 12.5), p.height / 2 + 50);
    }
  }

  function drawGrass() {
    p.fill(h.grassColor);
    p.noStroke();
    p.rect(0, p.height / 2 + 160, p.width, p.height / 5);
  }

  function drawBiggerBush(x, y) {
    p.fill(h.grassColor);
    p.noStroke();
    p.arc(x, y, h.bushW, h.bushH, p.radians(180), p.radians(360));
  }

  function drawSmallerBush(x, y) {
    p.arc(x, y, h.bushW - 10, h.bushH - 6, p.radians(180), p.radians(360));
  }

  function drawSmoke() {
    p.noStroke();
    let growAmount = p.random(10, 20);
    let grow = true;

    p.fill(h.smokeColor);
    let rx = p.random(100, 160);
    p.ellipse(rx, h.smokey, h.smokeSize);

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
};
new p5(sketchHouse, "sketchHouse");
