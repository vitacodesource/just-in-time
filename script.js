function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  // strong, visible control
  let t = mouseX / width;

  let c1 = color(0, 50, 120, 180);     // deep blue
  let c2 = color(255, 140, 0, 180);    // strong orange

  let col = lerpColor(c1, c2, t);

  fill(col);

  // slightly bigger + more visible
  ellipse(mouseX, mouseY, 220);
}