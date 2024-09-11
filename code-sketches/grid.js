function setup() {
  createCanvas(400, 400);
  frameRate(12);

  describe(
    "Graph-like blue lines that overlap to create grids depending on mouse placement. Lines turn red when mouse clicked"
  );
}

const color = {
  background: [240, 210, 170],
  line: [40, 30, 230],
  clickedLine: [250, 10, 10],
  circle: [200, 200, 0],
};

function draw() {
  background(color.background);

  if (keyIsPressed) {
    noStroke();
    fill(color.circle);
    ellipse(100, mouseY, 70);
    ellipse(mouseX, 300, 70);
  }
  stroke(color.line);

  if (mouseIsPressed) {
      stroke(color.clickedLine);
    }

  for (let i = 200; i < 400; i += 20) {
    drawLine(mouseX, i, i, mouseY);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(mouseX, i, i, mouseY);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(i, mouseX, mouseY, i);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(i, mouseX, mouseY, i);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(i, mouseX, i, mouseY);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(i, mouseX, i, mouseY);
  }

  for (let i = 200; i < 400; i += 20) {
    drawLine(mouseX, i, mouseY, i);
  }

  for (let i = 200; i > 0; i -= 20) {
    drawLine(mouseX, i, mouseY, i);
  }
}

function drawLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
}
