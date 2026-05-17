function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let t = mouseX / width;

  let col = lerpColor(
    color(20, 30, 60, 120),
    color(255, 180, 100, 120),
    t
  );

  fill(col);
  ellipse(mouseX, mouseY, 160);
}