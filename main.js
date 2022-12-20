Status = "";
function setup(){
  canvas = createCanvas(350, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 350);
  video.hide();
}
function draw(){
  image(video, 0, 0, 350, 350);
}
function start(){
  objectdetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "status: detecting objects";
}
function modelLoaded(){
  console.log("model is loaded");
  Status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}
