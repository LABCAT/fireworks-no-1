
export default class Particle {
  constructor(p, x, y, hue, firework, type, rand =0) {
    this.p5 = p;
    this.pos = this.p5.createVector(x, y);
    this.firework = firework;
    this.hue = hue;
    this.type = type;
    this.lifespan = this.type === "circle" ? 1023 : 255;
    this.acc = this.p5.createVector(0, 0);
    if (this.firework) {
      if(rand >= 0){
          if (this.type === "point") {
            rand = this.p5.random(-12, -8);
          } else {
            rand = this.p5.random(-18, -15);
          }
      }
      this.vel = this.p5.createVector(0, rand);
    } else {
      this.vel = window.p5.Vector.random2D();
      //how far does this explosion spread?
      if (this.type === "point") {
        this.vel.mult(this.p5.random(2, 15));
      }
      else if (this.type === "triangle") {
        this.vel.mult(this.p5.random(2, 30));
      } else {
        this.vel.mult(this.p5.random(2, 60));
      }
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    const fillHue = this.hue + 180 < 360 ? this.hue + 180 : this.hue - 180;
    const weight = this.type === 'point' ? 8 : 4;
 
    if (!this.firework) {
      this.p5.strokeWeight(weight / 2);
      this.p5.stroke(this.hue, 100, 100, (this.lifespan / 100));
      this.p5.fill(fillHue, 100, 100, (this.lifespan / 4) / 100);
    } else {
      this.p5.strokeWeight(weight);
      this.p5.stroke(this.hue, 100, 100);
      this.p5.fill(fillHue, 100, 100, 0.5);
    }

    if (this.type === "point") {
      this.p5.point(this.pos.x, this.pos.y);
    } else if (this.type === "circle") {
      this.p5.stroke(this.hue, 255, 255, 0.5);
      this.p5.fill(fillHue, 255, 255, 0.5);
      this.p5.ellipse(this.pos.x, this.pos.y, weight * 2);
      this.p5.ellipse(this.pos.x, this.pos.y, weight * 4);
      this.p5.ellipse(this.pos.x, this.pos.y, weight * 8);
    }
    else {
      this.p5.triangle(
        this.pos.x,
        this.pos.y,
        this.pos.x + 8,
        this.pos.y,
        this.pos.x + 4,
        this.pos.y - 8,
      );
    }
    
  }
}