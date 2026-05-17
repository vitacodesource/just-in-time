function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear(); // IMPORTANT: lets video show through

  let x = mouseX;
  let t = x / width;

  let c1 = color(30, 40, 80, 100);
  let c2 = color(255, 180, 100, 100);

  let col = lerpColor(c1, c2, t);

  fill(col);

  ellipse(x, mouseY, 160);
}