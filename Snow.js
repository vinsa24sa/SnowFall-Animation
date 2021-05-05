class Snow {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
        //  restitution:1.4,
          friction:0,
          density:7.8
      }
      this.body = Bodies.circle(x, y, (radius)/2, options);
      this.radius = radius;
    //  this.color = color(random(0, 255), random(0, 255), random(0, 255));
          
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle
      push ()
      translate(pos.x,pos.y)
      rotate (angle)
  
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("white");
      fill(white)
    
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }