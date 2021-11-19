img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;



function setup() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function modeloaded()
{
  console.log('Model Loaded!');
}

function draw() {
  background("#D3D3D3");
  if(noseX < 300);
  {
    marioX = marioX - 1;
  }
  if(noseX > 300)
    {
       marioX = marioX + 1;
    }
  if(noseY < 150)
    {
      marioY = marioY -1;
    }
  
  image(img, marioX, marioY , 40, 70);
}
function preload()
{
  img = loadImage("mario05.png");
}
function gotPoses(results)
{
  if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      nose.Y = results[0].pose.nose.y
      console.log("noseX = " + noseX + ", noseY = " + noseY);
      
      
    }
}




function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

  video = createCapture(VIDEO);
  video.size(800,400);
  video.parent('game_console');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose' , gotPoses)


}

function draw() {
	game()
}







