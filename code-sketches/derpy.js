function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
}

let d = {
  red: "#fc536a",
  shadow: "#d9485b",
  black: "#000000",
  white: "#ffffff",
  blue: "#0e1dc2",
  pink: "#f7d4ff",
};

function draw() {
  background(d.pink);
  noStroke();

  drawFace();
  drawHair();
  drawEars();
  drawEyes();
  drawBolt();
  drawNose();
  drawMouth();
  drawTeeth();
  drawHorns();
}

function drawFace() {
  fill(d.red);
  rect(120, 120, 160, 212);
  arc(140, 280, 110, 110,
    radians(110), radians(250), OPEN);
  arc(260, 280, 110, 110,
    radians(290), radians(70), OPEN);
}

function drawHair() {
  fill(d.black);
  ellipse(160, 120, 120, 70);
  ellipse(240, 120, 120, 70);
  triangle(200, 145, 175, 170, 180, 145);
  triangle(200, 145, 225, 170, 220, 145);
  fill(d.shadow);
  quad(200, 145,
    225, 170,
    200, 155,
    175, 170);
}

function drawEars() {
  fill(d.shadow);
  quad(70, 170,
    100, 240,
    120, 240,
    120, 190);
  quad(330, 170,
    300, 240,
    280, 240, 
    280, 190);
  fill(d.red);
  triangle(70, 170, 
    120, 190, 
    120, 210);
  triangle(330, 170, 
    280, 190, 
    280, 210);
}

function drawEyes() {
  fill(d.shadow);
  rect(120, 190, 160, 12);
  fill(d.white);
  arc(160, 190, 50, 50, 
    radians(0), radians(180));
  arc(240, 190, 50, 50, 
    radians(0), radians(180));
  fill(d.black);
  arc(160, 190, 30, 30, 
    radians(0), radians(180));
  arc(240, 190, 30, 30, 
    radians(0), radians(180));
}

function drawBolt() {
  fill(d.blue);
  beginShape();
  vertex(190, 95);
  vertex(200, 110);
  vertex(180, 125);
  vertex(200, 140);
  vertex(195, 125);
  vertex(215, 110);
  endShape(CLOSE);
}

function drawNose() {
  fill(d.pink);
  ellipse(200, 230, 25, 12);
  fill(d.black);
  arc(180, 240, 20, 20, 
    radians(10), radians(190));
  arc(220, 240, 20, 20, 
    radians(350), radians(170));
}

function drawMouth() {
  fill(d.black);
  rect(130, 260, 
    140, 36, 
    10, 10, 
    90, 90);
}

function drawTeeth() {
  fill(d.white);
  triangle(145, 260, 160, 260, 160, 280);
  triangle(175, 260, 190, 260, 190, 280);
  triangle(255, 260, 240, 260, 240, 280);
  triangle(225, 260, 210, 260, 210, 280);
  triangle(170, 296, 185, 296, 170, 280);
  triangle(230, 296, 215, 296, 230, 280);
}

function drawHorns() {
  fill(d.red);
  triangle(120, 40, 160, 105, 140, 115);
  triangle(280, 40, 240, 105, 260, 115);
}
