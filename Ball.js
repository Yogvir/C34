class Ball {
  constructor(x, y) {
    var options = {
      frictionAir: 0.0005,
      density: 1.5,
    };
    this.body = Bodies.circle(x, y, 40);
    this.r = 40;
    World.add(world, this.body);
  }
  display() {
    ellipseMode(RADIUS);
    fill("purple");
    strokeWeight(4);
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
  }
}
