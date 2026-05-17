let video;
let started = false;
let mode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createVideo("JustInTime_FINAL_SMALL.mp4");
  video.hide();
  video.volume(0);
}

function draw() {
  background(0);

  if (started) {
    // Mouse-controlled tint
    let r = map(mouseX, 0, width, 70, 255);
    let g = map(mouseX, 0, width, 220, 70);
    let b = map(mouseY, 0, height, 255, 110);
    let bright = map(mouseY, 0, height, 0.75, 1.6);

    push();

    if (mode === 0) {
      tint(r * bright, g * bright, b * bright);
    } 
    else if (mode === 1) {
      tint(r * bright, g * bright, b * bright);
      filter(INVERT);
    } 
    else if (mode === 2) {
      tint(r * bright, g * bright, b * bright);
      filter(POSTERIZE, 5);
    }

    image(video, 0, 0, width, height);
    pop();

  } else {
    // Waiting screen
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("Click anywhere to start", width/2, height/2);
  }
}

function mousePressed() {
  if (!started) {
    started = true;
    video.loop();
  } else {
    // Cycle modes after video starts
    mode = (mode + 1) % 3;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}