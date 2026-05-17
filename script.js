function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseX, 0, width, 50, 180);
  let b = map(mouseX, 0, width, 255, 80);

  fill(r, g, b, 60);

  rect(0, 0, width, height);
}