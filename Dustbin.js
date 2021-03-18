class Dustbin{
constructor(x,y){
    var options={isStatic:false};
    this.width=110;
    this.height=110;
    //this.thickness=50;

    this.image=loadImage("dustbinImage.png");
    this.image.scale=0.1;
    
    this.body = Bodies.rectangle(x, y, options);
    World.add(world, this.body);
}
display(){
    image(this.image,1020,350,this.width,this.height);
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    pop();
}
}