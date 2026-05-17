let video;
let mode = 0;
let videoReady = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createVideo("JustInTime_FINAL_SMALL.mp4", videoLoaded);
  video.hide();
  video.volume(0);
  
  // Important: don't loop yet, we'll control it with click
}

function videoLoaded() {
  videoReady = true;
  console.log("Video loaded successfully");
}

function draw() {
  background(0);

  if (!videoReady || !video) {
    // Show loading message
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Loading video...", width/2, height/2);
    return;
  }

  // Mouse controlled color values
  let r = map(mouseX, 0, width, 80, 255);
  let g = map(mouseX, 0, width, 200, 60);
  let b = map(mouseY, 0, height, 255, 120);
  let bright = map(mouseY, 0, height, 0.8, 1.5);

  push();

  if (mode === 0) {
    tint(r * bright, g * bright, b * bright, 255);
  } 
  else if (mode === 1) {
    tint(r * bright, g * bright, b * bright, 255);
    filter(INVERT);
  } 
  else if (mode === 2) {
    tint(r * bright, g * bright, b * bright, 255);
    filter(POSTERIZE, 5);
  }

  image(video, 0, 0, width, height);
  pop();

  // Very light overlay for depth (only in normal mode)
  if (mode === 0) {
    fill(0, 0, 20, 30);
    rect(0, 0, width, height);
  }
}

// Click anywhere to START / PLAY the video + cycle modes
function mousePressed() {
  if (!videoReady) return;

  // First click starts the video
  if (!video.isPlaying()) {
    video.loop();
    console.log("Video started");
  }

  // Then cycle effects on every click
  mode = (mode + 1) % 3;
  
  console.log("Mode:", mode === 0 ? "Tint" : mode === 1 ? "Invert + Tint" : "Posterize");
}