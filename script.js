let video;
let started = false;
let mode = 0; // 0 = sunrise grading, 1 = cinematic, 2 = dreamy

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createVideo("JustInTime_FINAL_SMALL.mp4");
  video.hide();
  video.volume(0.7);
}

function draw() {
  background(0);

  if (!started) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("Click to Start Bike Ride", width/2, height/2);
    return;
  }

  let progress = map(mouseX, 0, width, 0, 1); // 0 = left (moon), 1 = right (sun)

  push();

  if (mode === 0) {
    // Beautiful Moon → Sunrise grading
    let r = map(progress, 0, 1, 80, 255);
    let g = map(progress, 0, 1, 100, 180);
    let b = map(progress, 0, 1, 255, 100);
    tint(r, g, b, 255);
    image(video, 0, 0, width, height);
    
  } else if (mode === 1) {
    // Cinematic look
    tint(255, 240, 220);
    image(video, 0, 0, width, height);
    filter(POSTERIZE, 7);
    // vignette
    fill(0, 0, 0, 80);
    rect(0, 0, width, height);
    
  } else if (mode === 2) {
    // Dreamy / Ethereal
    tint(200, 220, 255, 240);
    image(video, 0, 0, width, height);
    filter(BLUR, 1.5);
  }

  pop();

  // Very light film grain
  if (frameCount % 3 === 0) {
    fill(255, 255, 255, 12);
    rect(0, 0, width, height);
  }
}

function mousePressed() {
  if (!started) {
    started = true;
    video.loop();
  } else {
    mode = (mode + 1) % 3;
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') video.pause();
  if (key === 'l' || key === 'L') video.loop();
}