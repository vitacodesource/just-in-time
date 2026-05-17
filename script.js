function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  // stable interaction (no weird drift, no confusion)
  let x = mouseX;
  let y = mouseY;

  // controlled color shift (simple + visible)
  let t = x / width;

  let c1 = color(30, 40, 80, 120);   // night blue
  let c2 = color(255, 180, 100, 120); // sunrise orange

  let col = lerpColor(c1, c2, t);

  fill(col);

  // visible, intentional shape
  ellipse(x, y, 160);
}