function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let t = mouseX / width;

  let c1 = color(10, 20, 50, 120);
  let c2 = color(200, 120, 80, 120);
  let c3 = color(255, 220, 150, 120);

  let col;

  if (t < 0.33) {
    col = c1;
  } else if (t < 0.66) {
    col = c2;
  } else {
    col = c3;
  }

  fill(col);

  let size = t < 0.33 ? 120 : t < 0.66 ? 180 : 240;

  ellipse(mouseX, mouseY, size);
}