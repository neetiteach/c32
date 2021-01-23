const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var world,engine;
var grd,std1,std2;
var blk1=[],blk2=[],blk3=[],blk4;
var blk5=[],blk6=[],blk7;
var hobj,sling1;
var pnts=0;
var bg="lightyellow";
var gmode="onsling";
function preload(){
//  hImg=loadImage("polgon.png");
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    engine=Engine.create();
    world=engine.world;
     

    grd=new Ground(width/2,height-5,width,20);
    std1=new Ground(width/2-100,height/2+150,250,10);
    std2=new Ground(width/2+200,height/2+50,200,10);
    var w=width/2
   for(var i=0,x=width/2-190;i<7;i++,x+=32){ 
    blk1[i]=new Box(x,height/2+125,30,40);
     }
   for(var i=0,x=width/2-158;i<5;i++,x+=32){
     blk2[i]=new Box(x,height/2+83,30,40);
    }  
   for(var i=0,x=width/2-126;i<3;i++,x+=32){
    blk3[i]=new Box(x,height/2+42,30,40);
    }  
   blk4=new Box(width/2-94,height/2+1,30,40);
   for(var i=0,x=width/2+130;i<5;i++,x+=32){
    blk5[i]=new Box(x,height/2+25,30,40);
   }  
  for(var i=0,x=width/2+162;i<3;i++,x+=32){
   blk6[i]=new Box(x,height/2-17,30,40);
   }  
  blk7=new Box(width/2+194,height/2-58,30,40);

  hobj=new Hexa();

  sling1=new Sling(hobj.body,{x:40,y:350});
  Engine.run(engine);
  chgcolor();
}
function draw() {
    
    background(bg);

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    text("score:"+pnts,200,50);
    grd.display();
    std1.display();
    std2.display();
    
  for(var i=0;i<blk1.length;i++){
    
    blk1[i].display("skyblue");
    blk1[i].cscore();
  
  }
  
  for(var i=0;i<blk2.length;i++){
    blk2[i].display("pink");
    blk2[i].cscore();
    
  }
  
  for(var i=0;i<blk3.length;i++){
    blk3[i].display("turquoise");
    blk3[i].cscore();
    
  }
  
   blk4.display("darkgrey");
   blk4.cscore();
   
   for(var i=0;i<blk5.length;i++){
    blk5[i].display("pink");
    blk5[i].cscore();
    
  }
  for(var i=0;i<blk6.length;i++){
    blk6[i].display("turquoise");
    blk6[i].cscore();
   
  }
  blk7.display("darkgrey");
  blk7.cscore();
    
  hobj.display();


  sling1.display();
}


function mouseDragged(){

  if(gmode==="onsling"){
  Matter.Body.setPosition(hobj.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  sling1.fly();
  gmode="launched";
}

function keyPressed(){
  if(keyCode===32&& gmode!=="onsling"){
    Matter.Body.setPosition(hobj.body,{x:100,y:350});
    sling1.attach(hobj.body);
    gmode="onsling";
    
  }
}

async function chgcolor(){
  var wtime=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var wtimejs=await wtime.json();
  var dtime=wtimejs.datetime;
  var hrs=dtime.slice(11,13);
  
  if(hrs>=06 && hrs<=18)
  {
    bg="lightyellow";
  }else{
    bg="black";
  }
  
}