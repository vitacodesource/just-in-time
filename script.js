let video;
let playing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createVideo("JustInTime_FINAL_SMALL.mp4");
  video.hide();
  video.volume(1);
  cursor('🦇');
}

function draw() {
  background(0);

  if (playing) {
    let warmth = map(mouseX, 0, width, 0, 1);
    
    let r = map(warmth, 0, 1, 180, 255);
    let g = map(warmth, 0, 1, 200, 225);
    let b = map(warmth, 0, 1, 255, 140);

    tint(r, g, b);
    image(video, 0, 0, width, height);

    if (mouseY < height/2) {
      for (let i = 0; i < 6; i++) {
        fill(255, 240, 200, random(80, 175));
        circle(random(width), random(height*0.6), random(75,175));
      }
    }
  } 
  else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("CLICK TO START / STOP", width/2, height/2);
  }
}

function mousePressed() {
  if (playing == false) {
    video.loop();
    playing = true;
  } else {
    video.pause();
    playing = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}