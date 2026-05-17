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

  // slow ambient shift (independent of mouse)
  let timeShift = sin(frameCount * 0.005) * 0.5 + 0.5;

  let finalT = (t + timeShift) / 2;

  let warm = lerpColor(
    color(20, 30, 60, 80),
    color(255, 200, 120, 80),
    finalT
  );

  noStroke();
  fill(warm);

  ellipse(mouseX, mouseY, 150);
}