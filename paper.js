class Paper{
constructor(x,y,radius){
var options={
isStatic : false,
restitution : 0.3,
density: 1.2,
friction: 0.5
}

this.body=Bodies.circle(x,y,radius/2,options)
this.x=x;
this.y=y;
this.radius = radius;


World.add(world,this.body);



}

display(){

var pos = this.body.position;

push();
ellipseMode(RADIUS);
translate(pos.x,pos.y);
ellipse(0,0,this.radius,this.radius);
pop();

}





}