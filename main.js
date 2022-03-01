function preload()
{

}
function setup()
{
video=createCapture(VIDEO);
canvas=createCanvas(400,400);
canvas.position(800,300)
pose_net=ml5.poseNet(video,model_loaded);
pose_net.on("pose" , got_poses)
}
function draw()
{

}
function model_loaded()
{
    console.log("Pose Net is on");
}
function got_poses(result)
{
if (result.length > 0) 
{
    console.log(result)
}
}