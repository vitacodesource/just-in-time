function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let t = mouseX / width;

  let c1 = color(20, 30, 60, 120);
  let c2 = color(255, 180, 100, 120);

  let col = lerpColor(c1, c2, t);

  fill(col);
  ellipse(mouseX, mouseY, 180);
}