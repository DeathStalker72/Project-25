class Paper{
constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.radius=radius;

    this.image=loadImage("paperImage.png");

    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world, this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,100,100,this.radius,this.radius);
    //ellipse(50,50,10);
    pop();
}
}
/*function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    };
}
*/