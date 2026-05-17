function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('position', 'fixed');
  c.style('top', '0');
  c.style('left', '0');
  c.style('z-index', '10');
  c.style('pointer-events', 'none');

  background(0, 0, 0, 0);
}

function draw() {
  clear();

  let t = map(mouseX, 0, width, 0, 1);

  let warm = lerpColor(color(255, 80, 0, 80), color(255, 220, 180, 80), t);

  noStroke();
  fill(warm);

  ellipse(mouseX, mouseY, 120);
}