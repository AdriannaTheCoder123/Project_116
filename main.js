lipsX = 0;
lipsY = 0;

function preload() {
  lips = loadImage ('https://i.postimg.cc/wMX1Ynj2/lips-2.png');
}

function setup() {
  canvas = createCanvas(320, 320);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(320, 320);
  video.hide();

  poseNet = ml5.poseNet (video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  if(results.length > 0)  {
     console.log(results);
    lipsX = results[0].pose.lips.x - 40;
    lipsY = results[0].pose.lips.y - 19;
    console.log("lips x = " + lipsX);
    console.log("lips y = " + lipsY);
  }
}

function modelLoaded() {
  console.log('Posenet is Ready');
}

function draw() {
  image(video, 0, 0, 320, 320);
  image(lips, lipsX, lipsY, 40, 40);
}

function take_snapshot() {
   save('myFilterImage.png');
}