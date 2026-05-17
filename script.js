function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();

  let t = mouseX / width;

  let r = lerp(0, 255, t);
  let g = lerp(0, 180, t);
  let b = lerp(255, 80, t);

  fill(r, g, b, 180);

  ellipse(mouseX, mouseY, 180);
}