let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  // FORCE CANVAS ON TOP (bulletproof)
  cnv.style('position', 'fixed');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('z-index', '9999');
  cnv.style('pointer-events', 'none');

  noStroke();
}

function draw() {
  clear();

  let x = mouseX;
  let t = x / width;

  let col = lerpColor(
    color(30, 40, 80, 120),
    color(255, 180, 100, 120),
    t
  );

  fill(col);

  ellipse(x, mouseY, 180);
}