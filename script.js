function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  pixelDensity(1);
}

function draw() {
  background(0, 0);

  let t = mouseX / width;

  // stronger, more cinematic color zones
  let r = map(t, 0, 1, 10, 255);
  let g = map(t, 0, 1, 20, 170);
  let b = map(t, 0, 1, 120, 60);

  // big visible wash
  fill(r, g, b, 35);
  rect(0, 0, width, height);

  // secondary pulse layer (adds movement)
  let pulse = sin(frameCount * 0.03) * 10;

  fill(255, 255, 255, 8 + pulse);
  rect(0, 0, width, height);
}