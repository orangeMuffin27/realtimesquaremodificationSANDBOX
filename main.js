nosex = 0;
nosey = 0;
rightx = 0;
leftx = 0;
difference = 0;

function setup() {

    canvas = createCanvas(450,400)
    canvas.position(700,150)
    //cam starts
    video = createCapture(VIDEO)
    video.size(350,350)
    video.position(150,180)
    //posenet start
    posenet = ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes)
}

function modeloaded() {
    console.log("detective: the model has been succesfully loaded me: what")

}

function gotposes(results) {
if (results.length>0) {
console.log(results)
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
leftx= results[0].pose.leftWrist.x;
rightx = results[0].pose.rightWrist.x;
difference = floor(leftx-rightx);
}
}

function draw() {
    background("#d1e9d1")
    document.getElementById("size").innerHTML = difference + "px"
    fill("#c9696f")
    stroke("#bcc9d0")
    square(nosex,nosey,difference);
}