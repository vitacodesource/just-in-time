let video;
let isPlaying = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createVideo("JustInTime_FINAL_SMALL.mp4");
  video.hide();
  video.volume(1.0);        // Full volume
}

function draw() {
  background(0);

  if (isPlaying) {
    
    // === COLOR GRADING: Cold on left → Warm on right ===
    let warmth = map(mouseX, 0, width, 0, 1);   // 0 = left, 1 = right
    
    let r = map(warmth, 0, 1, 180, 255);   // more red on right
    let g = map(warmth, 0, 1, 200, 220);
    let b = map(warmth, 0, 1, 255, 140);   // less blue on right

    tint(r, g, b);
    
    image(video, 0, 0, width, height);
  } 
  else {
    // Start screen
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("CLICK TO START / STOP", width/2, height/2);
  }
}

// Click anywhere = Play / Pause toggle
function mousePressed() {
  if (!isPlaying) {
    video.loop();
    isPlaying = true;
  } else {
    video.pause();
    isPlaying = false;
  }
}