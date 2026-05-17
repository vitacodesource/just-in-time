function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 0);

  let t = mouseX / width;

  // subtle but visible tint (NOT blocking video)
  let r = map(t, 0, 1, 0, 255);
  let g = map(t, 0, 1, 30, 140);
  let b = map(t, 0, 1, 255, 80);

  // IMPORTANT: low opacity so video stays visible
  fill(r, g, b, 12);
  rect(0, 0, width, height);
}