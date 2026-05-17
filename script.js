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
  background(255, 0, 0, 80);

  fill(0);
  noStroke();
  ellipse(mouseX, mouseY, 80);
}