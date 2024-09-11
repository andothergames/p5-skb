const sketchGrid = function(p){

  const color = {
    background: [240, 210, 170],
    line: [40, 30, 230],
    clickedLine: [250, 10, 10],
    circle: [200, 200, 0],
  };

  p.setup = function() {
  p.createCanvas(400, 400);
  p.frameRate(12);

  p.describe(
    "Graph-like blue lines that overlap to create grids depending on mouse placement. Lines turn red when mouse clicked"
  );
}

p.draw = function() {
  p.background(color.background);

  if (p.keyIsPressed) {
    p.noStroke();
    p.fill(color.circle);
    p.ellipse(100, p.mouseY, 70);
    p.ellipse(p.mouseX, 300, 70);
  }
  p.stroke(color.line);

  if (p.mouseIsPressed) {
      p.stroke(color.clickedLine);
    }

  for (let i = 200; i < 400; i += 20) {
    drawLine(p.mouseX, i, i, p.mouseY);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(p.mouseX, i, i, p.mouseY);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(i, p.mouseX, p.mouseY, i);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(i, p.mouseX, p.mouseY, i);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(i, p.mouseX, i, p.mouseY);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(i, p.mouseX, i, p.mouseY);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(p.mouseX, i, p.mouseY, i);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(p.mouseX, i, p.mouseY, i);
  }
}

function drawLine(x1, y1, x2, y2) {
  p.line(x1, y1, x2, y2);
}
};
new p5(sketchGrid, 'sketchGrid');
