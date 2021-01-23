class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.4,friction:0.0});
        this.width=width;
        this.height=height;
        this.visiblity=255;
       // this.score=0;
        World.add(world,this.body);

    }
   

     cscore(){
     
        if(this.visiblity<0 && this.visiblity>-105){
            pnts++;
        }
       }
   


    
    


    display(c1){
        var pos=this.body.position;
        var ang=this.body.angle;
        if(this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        
      rectMode(CENTER);
      fill(c1);
      noStroke();
      rect(0,0,this.width,this.height);
      
      pop();
        }else{
            World.remove(world,this.body);
            push();
            this.visiblity-=5;
            tint(255,this.visiblity);
            pop();
        }
    }
}