var focinhoImg;
focinhoX = 0;
focinhoY = 0;

function preload(){
    focinhoImg = loadImage('https://i.postimg.cc/nLbyDDNp/focinho-Cachorro-removebg-preview.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('poseNet foi inicializado')
}
function gotPoses(results){
    if(results.length > 0){
        focinhoX = results[0].pose.nose.x - 15;
        focinhoY = results[0].pose.nose.y - 1;
    }
}
function draw(){
    image(video, 0,0,300,300);
    image(focinhoImg, focinhoX, focinhoY,50, 50);
}
function takeSnapshot(){
    save('myFilterImage.png');
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}