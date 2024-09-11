const sketchScream = function (p) {
  let growAmount = 1;
  let isGrowing = true;
  let grad = {
    grow: 0,
    sneak: -150,
  };
  const scream = {
    bgColour: [244, 232, 250, 255],
    yellow: [255, 234, 74, 255],
    darkYellow: [240, 213, 7, 255],
    blue: [33, 85, 255, 255],
    black: [0, 0, 0, 255],
    white: [255, 255, 255, 255],
    faceSize: 200,
    mouthX: 200,
    mouthY: 240,
    mouthW: 30,
    mouthH: 50,
  };

  p.setup = function () {
    p.createCanvas(400, 400);
    p.frameRate(30);
    p.noStroke();
    p.colorMode(p.RGB, 255);
  };

  p.draw = function () {
    p.background(scream.bgColour);
    p.noStroke();
    drawFace(p.width / 2, p.height / 2);
    drawEye(160, 180);
    drawEye(240, 180);
    drawMouth(scream.mouthX, scream.mouthY);
    drawHand(110, 265, "left");
    drawHand(290, 265, "right");
  };

  function updateGradient(property, limit) {
    if (grad[property] > limit) {
      isGrowing = false;
    } else if (grad[property] < 0) {
      isGrowing = true;
    }
    grad[property] += isGrowing ? growAmount : -growAmount;
  }

  p.linearGradient = function (nx, ny, sx, sy, colorN, colorS) {
    let gradient = p.drawingContext.createLinearGradient(nx, ny, sx, sy);
    gradient.addColorStop(0, colorN);
    gradient.addColorStop(1, colorS);
    p.drawingContext.fillStyle = gradient;
  };

  function drawFace(x, y) {
    updateGradient("grow", 250);
    updateGradient("sneak", 75);

    p.push();
    p.linearGradient(
      x,
      grad.sneak,
      y,
      grad.grow,
      p.color(scream.blue),
      p.color(scream.yellow)
    );
    p.ellipse(p.width / 2, p.height / 2, scream.faceSize);
    p.pop();
  }

  function drawEye(x, y) {
    p.fill(scream.white);
    p.stroke(scream.black);
    p.strokeWeight(1);
    p.ellipse(x, y, 36, 50);
  }

  function drawMouth(x, y) {
    p.noStroke();
    p.fill(scream.black);
    p.ellipse(x, y, scream.mouthW, scream.mouthH);
  }

  function drawHand(x, y, dir) {
    let c1 = dir === "left" ? 1 : -1;
    p.strokeWeight(36);
    p.stroke(scream.darkYellow);
    p.line(x, y, x, y - 29);
    p.line(x, y, x + 40 * c1, y + 33);
  }
};
new p5(sketchScream, "sketchScream");
