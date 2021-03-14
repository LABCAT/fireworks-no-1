import Particle from "./Particle.js";

export default class Firework {
  constructor(p, type) {
    this.p5 = p;
    this.type = type;
    this.hue = this.p5.random(255);
    this.firework = new Particle(
      this.p5,
      this.p5.random(this.p5.width),
      this.p5.height,
      this.hue,
      true,
      this.type
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

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
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
      const p = new Particle(
        this.p5,
        this.firework.pos.x,
        this.firework.pos.y,
        this.hue + i,
        false,
        this.type
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
