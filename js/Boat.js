class Boat {
    constructor(x, y, width, height,boatPos) {
      var options = {
restitution:0.8,
friccion:1.0,
density:1.0,
      };
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      this.width = width;
      this.height = height;
      this.boatPosition=boatPos
      this.image=loadImage("assets/boat.png")
      World.add(world,this.body);
      }
display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    //change the rect as image(challenge 5)
    image(this.image,0,this.boatPosition,this.width,this.height);
    noTint();
    pop();
  }
}