function setup() {
  createCanvas(400, 400);
}

let m = {
  cream: "#fff5e0",
  red: "#fc3f91",
  black: "#000000",
  orange: "#fcb138",
  beige: "#e3c381",
  faceLine: "14",
  eyeSize: 60,
  eyeHeight: 180,
};

function draw() {
  background(232, 255, 251);
  noStroke();

  //hair
  fill(m.cream);
  ellipse(200, 200, 260);

  //face
  fill(m.red);
  ellipse(200, 200, 200);

  ears(110, 0);
  ears(0, 290);

  eyes(150, 250);


  //mouth

  fill(m.orange);
  ellipse(200, 260, 50);
  fill(m.black);
  ellipse(200, 260, 30);

  //head line
  noFill();
  stroke(m.beige);
  strokeWeight(m.faceLine);
  //beginning and end of head line
  //line(130, 130, 270, 130);
  bezier(130, 130, 180, 120, 200, 190, 200, 190);
  bezier(270, 130, 220, 120, 200, 190, 200, 190);

  //mouth line
  noFill();
  stroke(m.beige);
  strokeWeight(m.faceLine - 2);
  //beginning and end of mouth line
  //line(110, 230, 290, 230);
  bezier(160, 240, 180, 220, 220, 220, 240, 240);
  bezier(110, 250, 120, 260, 140, 260, 160, 240);
  bezier(240, 240, 260, 260, 270, 260, 290, 250);

  noStroke();
}

function ears(left, right) {
  if (left !== 0) {
    beginShape();
    vertex(left, 100);
    vertex(left, 20);
    vertex(left + 60, 80);
    endShape(CLOSE);

    fill(m.black);

    beginShape();
    vertex(left + 42, 86);
    vertex(left, 20);
    vertex(left + 60, 80);
    endShape(CLOSE);
  } else {
    fill(m.red);
    beginShape();
    vertex(right, 100);
    vertex(right, 20);
    vertex(right - 60, 80);
    endShape(CLOSE);

    fill(m.black);
    beginShape();
    vertex(right - 42, 86);
    vertex(right, 20);
    vertex(right - 60, 80);
    endShape(CLOSE);
  }
}

function eyes(left, right) {
  fill(m.orange);
  ellipse(left, m.eyeHeight, m.eyeSize);
  ellipse(right, m.eyeHeight, m.eyeSize);
  fill(m.black);
  ellipse(left, m.eyeHeight, m.eyeSize / 1.5);
  ellipse(right, m.eyeHeight, m.eyeSize / 1.5);
  //details
  ellipse(left - 25, m.eyeHeight - 25, 15);
  ellipse(left + 25, m.eyeHeight + 20, 12);
  ellipse(right + 25, m.eyeHeight - 25, 15);
  ellipse(right - 25, m.eyeHeight + 20, 12);
}
