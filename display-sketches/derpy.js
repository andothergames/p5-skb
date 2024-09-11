const sketchDerpy = function(p) {
  let d = {
    red: "#fc536a",
    shadow: "#d9485b",
    black: "#000000",
    white: "#ffffff",
    blue: "#0e1dc2",
    pink: "#f7d4ff",
  };

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(d.pink);
    p.noStroke();

    drawFace();
    drawHair();
    drawEars();
    drawEyes();
    drawBolt();
    drawNose();
    drawMouth();
    drawTeeth();
    drawHorns();
  };

  function drawFace() {
    p.fill(d.red);
    p.rect(120, 120, 160, 212);
    p.arc(140, 280, 110, 110, p.radians(110), p.radians(250), p.OPEN);
    p.arc(260, 280, 110, 110, p.radians(290), p.radians(70), p.OPEN);
  }

  function drawHair() {
    p.fill(d.black);
    p.ellipse(160, 120, 120, 70);
    p.ellipse(240, 120, 120, 70);
    p.triangle(200, 145, 175, 170, 180, 145);
    p.triangle(200, 145, 225, 170, 220, 145);
    p.fill(d.shadow);
    p.quad(200, 145, 225, 170, 200, 155, 175, 170);
  }

  function drawEars() {
    p.fill(d.shadow);
    p.quad(70, 170, 100, 240, 120, 240, 120, 190);
    p.quad(330, 170, 300, 240, 280, 240, 280, 190);
    p.fill(d.red);
    p.triangle(70, 170, 120, 190, 120, 210);
    p.triangle(330, 170, 280, 190, 280, 210);
  }

  function drawEyes() {
    p.fill(d.shadow);
    p.rect(120, 190, 160, 12);
    p.fill(d.white);
    p.arc(160, 190, 50, 50, p.radians(0), p.radians(180));
    p.arc(240, 190, 50, 50, p.radians(0), p.radians(180));
    p.fill(d.black);
    p.arc(160, 190, 30, 30, p.radians(0), p.radians(180));
    p.arc(240, 190, 30, 30, p.radians(0), p.radians(180));
  }

  function drawBolt() {
    p.fill(d.blue);
    p.beginShape();
    p.vertex(190, 95);
    p.vertex(200, 110);
    p.vertex(180, 125);
    p.vertex(200, 140);
    p.vertex(195, 125);
    p.vertex(215, 110);
    p.endShape(p.CLOSE);
  }

  function drawNose() {
    p.fill(d.pink);
    p.ellipse(200, 230, 25, 12);
    p.fill(d.black);
    p.arc(180, 240, 20, 20, p.radians(10), p.radians(190));
    p.arc(220, 240, 20, 20, p.radians(350), p.radians(170));
  }

  function drawMouth() {
    p.fill(d.black);
    p.rect(130, 260, 140, 36, 10, 10, 90, 90);
  }

  function drawTeeth() {
    p.fill(d.white);
    p.triangle(145, 260, 160, 260, 160, 280);
    p.triangle(175, 260, 190, 260, 190, 280);
    p.triangle(255, 260, 240, 260, 240, 280);
    p.triangle(225, 260, 210, 260, 210, 280);
    p.triangle(170, 296, 185, 296, 170, 280);
    p.triangle(230, 296, 215, 296, 230, 280);
  }

  function drawHorns() {
    p.fill(d.red);
    p.triangle(120, 40, 160, 105, 140, 115);
    p.triangle(280, 40, 240, 105, 260, 115);
  }
};

new p5(sketchDerpy, 'sketchDerpy');
