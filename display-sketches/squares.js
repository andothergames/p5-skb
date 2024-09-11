const sketchSquares = function (p) {
  let angleSquares = 0;
  let centerSquareSize = 0.1;
  const color = {
    coral: [230, 0, 200, 100],
    blue: [0, 200, 255, 200],
    green: [0, 180, 200, 80],
    yellow: [250, 240, 0],
    orange: [255, 50, 0, 30],
    lightOrange: [255, 50, 0, 50],
  };

  p.setup = function() {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
    p.ellipseMode(p.CENTER);
    p.frameRate(3);
  }

  p.draw = function() {
    p.noStroke();
    p.background(color.yellow);
    p.translate(p.width / 2, p.height / 2);

    p.push();
    drawCenterSquare(color.green);
    if (centerSquareSize < 6) {
      centerSquareSize += 0.02;
    } else {
      centerSquareSize = 0.01;
    }
    p.pop();

    p.push();
    p.translate(100, 100);
    drawSquare1();
    p.translate(300, 300);
    drawSquare1();
    p.pop();

    p.push();
    p.translate(100, 100);
    drawSquare2();
    p.translate(-100, -100);
    drawSquare2();
    p.pop();

    p.push();
    p.translate(-300, -300);
    drawSquare1();
    p.translate(-100, -100);
    drawSquare2();
    p.pop();

    p.push();
    p.translate(-30, 30);
    drawSquare1();
    p.translate(80, -80);
    drawSquare2();
    p.pop();

    p.push();
    drawCircles(color.coral, 10);
    drawCircles(color.blue, 4);
    p.pop();

    angleSquares = angleSquares + -1;
  }

  function drawCenterSquare(c) {
    p.scale(centerSquareSize);
    p.fill(c);
    p.rect(0, 0, 50, 50);
  }

  function drawCircles(c, minWidth) {
    let randomw = p.random(10, 200);
    let randomh = p.random(10, 200);
    const width = p.random(minWidth, minWidth + 12);
    p.fill(c);
    p.ellipse(randomw, randomh, width);
    p.ellipse(-randomw, -randomh, width);
    p.ellipse(-randomw, randomh, width);
    p.ellipse(randomw, -randomh, width);
  }

  function drawSquare1() {
    let randomiser2 = p.random(0.01, 4);
    p.scale(randomiser2);
    p.fill(color.orange);
    p.rect(0, 0, 50, 50);
  }

  function drawSquare2() {
    let randomiser1 = p.random(0.01, 3);
    p.scale(randomiser1);
    p.fill(color.lightOrange);
    p.rect(0, 0, 50, 50);
  }
};
new p5(sketchSquares, "sketchSquares");
