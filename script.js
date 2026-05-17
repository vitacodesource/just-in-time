let video;
let mode = 0; // 0 = tint, 1 = invert + tint, 2 = posterize + tint

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createVideo("JustInTime_FINAL_SMALL.mp4");
  video.hide();
  video.loop();
  video.volume(0);
}

function draw() {
  background(0);

  // === MOUSE CONTROLLED VALUES ===
  let r = map(mouseX, 0, width, 60, 255);
  let g = map(mouseX, 0, width, 180, 60);
  let b = map(mouseY, 0, height, 255, 100);
  let brightness = map(mouseY, 0, height, 0.75, 1.45);

  push();

  if (mode === 0) {
    // Normal Tint
    tint(r * brightness, g * brightness, b * brightness, 255);
    
  } else if (mode === 1) {
    // Invert + Tint (very visible dramatic effect)
    tint(r * brightness, g * brightness, b * brightness, 255);
    filter(INVERT);
    
  } else if (mode === 2) {
    // Posterize + Tint (strong stylized look)
    tint(r * brightness, g * brightness, b * brightness, 255);
    filter(POSTERIZE, 6);   // lower number = stronger effect
  }

  image(video, 0, 0, width, height);
  pop();

  // Optional subtle overlay for extra mood
  if (mode === 0) {
    fill(0, 0, 30, 25);
    rect(0, 0, width, height);
  }
}

// Click to cycle through effects
function mousePressed() {
  mode = (mode + 1) % 3;
  
  // Visual feedback
  if (mode === 0) console.log("Mode: Tint");
  if (mode === 1) console.log("Mode: Invert + Tint");
  if (mode === 2) console.log("Mode: Posterize + Tint");
}