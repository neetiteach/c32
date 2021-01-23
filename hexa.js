class Hexa{
    constructor(){
        this.body=Bodies.circle(100,350,10,{isStatic:false,density:1});
        this.image=loadImage("polygon.png");
        this.r=30;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.r*2,this.r*2);

    }
}
