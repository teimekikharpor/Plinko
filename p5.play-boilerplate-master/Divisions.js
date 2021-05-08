class Divisions{
constructor ( x,y,w,h){
    var options = {

        isStatic=true;
    }
this.body = bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
World.add(world.body);
}
display(){
var pos = this.body.position;
rectMode(Center);
Fill("white");
rect(pos.x,pos.y,this.w,this.h);

}



For (var k = 0;k<=width; k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
}

];