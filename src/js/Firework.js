import Particle from "./Particle.js";

export default class Firework {
  constructor(
    p,
    type,
    xPos = 0,
    hue = 0,
    vel = 0,
    canExplode = true,
    spread = 0
  ) {
    this.p5 = p;
    this.type = type;
    this.spread = spread;
    this.xPos = xPos > 0 ? xPos : this.p5.random(this.p5.width);
    this.hue = hue > 0 ? hue : this.p5.random(255);
    this.canExplode = canExplode;
    this.startTime = this.p5.millis();
    this.firework = new Particle(
      this.p5,
      this.xPos,
      this.p5.height,
      this.hue,
      true,
      this.type,
      this.spread,
      vel
    );
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update(gravity) {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      const oneBarAfterStart = this.startTime + 1967;
      if (this.p5.millis() >= oneBarAfterStart) {
        this.exploded = true;
        if (this.canExplode) {
          this.explode();
        }
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      let hue = this.hue + i;
      hue = hue < 360 ? hue : 0;
      const p = new Particle(
        this.p5,
        this.firework.pos.x,
        this.firework.pos.y,
        hue,
        false,
        this.type,
        this.spread
      );
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
