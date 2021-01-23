class Sling{
    constructor(bodya,pntb){
        var opt={
            bodyA:bodya,
            pointB:pntb,
            stiffness:0.004,
             length:1
        }
    
        this.body=Constraint.create(opt);
         World.add(world,this.body);         
    }

   attach(body1){
    this.body.bodyA=body1;
   }
   
   fly(){
     this.body.bodyA=null;
     
   }

    display(){
        if(this.body.bodyA){
        var posa=this.body.bodyA.position;
        
        var posb=this.body.pointB;
        strokeWeight(2);
        stroke("white");
        line(posa.x,posa.y,posb.x,posb.y);
       }
   }
}