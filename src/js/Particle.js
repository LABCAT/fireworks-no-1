
export default class Particle {
  constructor(p, x, y, hue, firework, type) {
    this.p5 = p;
    this.pos = this.p5.createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hue = hue;
    this.type = type;
    this.acc = this.p5.createVector(0, 0);
    if (this.firework) {
        let rand = 0;
        if (this.type === "point") {
          rand = this.p5.random(-12, -8);
        } else {
          rand = this.p5.random(-20, -15);
        }
      this.vel = this.p5.createVector(0, rand);
    } else {
      this.vel = window.p5.Vector.random2D();
      //how far does this explosion spread?
      this.vel.mult(this.p5.random(2, 40));
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
    this.p5.colorMode(this.p5.HSB);
    const fillHue = this.hue + 180 < 360 ? this.hue + 180 : this.hue - 180;
    const weight = this.type === 'point' ? 8 : 4;
 
    if (!this.firework) {
      this.p5.strokeWeight(weight / 2);
      this.p5.stroke(this.hue, 255, 255, this.lifespan);
      this.p5.fill(fillHue, 255, 255, this.lifespan / 4);
    } else {
      this.p5.strokeWeight(weight);
      this.p5.stroke(this.hue, 255, 255);
      this.p5.fill(fillHue, 255, 255, 127);
    }

    if (this.type === "point") {
        this.p5.point(this.pos.x, this.pos.y);
    }
    else {
        this.p5.ellipse(this.pos.x, this.pos.y, weight * 2);
    }
    // this.p5.triangle(
    //   this.pos.x,
    //   this.pos.y,
    //   this.pos.x + 8,
    //   this.pos.y,
    //   this.pos.x + 4,
    //   this.pos.y - 8,
    // );
  }
}