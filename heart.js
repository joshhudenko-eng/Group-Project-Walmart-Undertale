let heartX = 200;
let heartY = 200;
const heartSpeed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#000000");
  drawHeart();
}

function drawHeart() {
  rectMode(CENTER);
  fill("#ff1f1f");
  noStroke();
  rect(heartX + 4.5, heartY - 5.9, 6, 3);

  rectMode(CENTER);
  fill("#ff1f1f");
  noStroke();
  rect(heartX - 4.5, heartY - 5.9, 6, 3);

  rectMode(CENTER);
  fill("#ff1f1f");
  noStroke();
  rect(heartX, heartY - 2.9, 15, 3);

  rectMode(CENTER);
  fill("#ff1f1f");
  noStroke();
  rect(heartX, heartY, 15, 3);

  fill("#ff1f1f");
  noStroke();
  rect(heartX, heartY + 2.9, 10, 3);

  fill("#ff1f1f");
  noStroke();
  rect(heartX, heartY + 5.9, 5, 3);

  noFill(); //hitbox
  strokeWeight(1);
  stroke("#ffffff");
  rect(heartX, heartY, 15, 15);

  if (keyIsDown("w")) heartY -= heartSpeed;
  if (keyIsDown("s")) heartY += heartSpeed;
  if (keyIsDown("a")) heartX -= heartSpeed;
  if (keyIsDown("d")) heartX += heartSpeed;
}
