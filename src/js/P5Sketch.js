import React, { useRef, useEffect } from "react";
import "./globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import Firework from "./Firework.js";
import audio from "../audio/fireworks-no-1.ogg";
import cueSet1 from "./cueSet1.js";
import cueSet2 from "./cueSet2.js";


const P5Sketch = () => {
    const sketchRef = useRef();

    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.fireworks = [];
        
        p.gravity = 0;

        p.cueSet1Completed = [];

        p.cueSet2Completed = [];

        p.preload = () => {
          p.song = p.loadSound(audio);
        };

        p.setup = () => {
            p.canvas = p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.colorMode(p.HSB);
            p.gravity = p.createVector(0, 0.2);
            p.stroke(255);
            p.strokeWeight(4);
            p.background(0);

            p.song.onended(p.logCredits);

            for (let i = 0; i < cueSet1.length; i++) {
              p.song.addCue(cueSet1[i].time, p.executeCueSet1, i + 1);
            }

            for (let i = 0; i < cueSet2.length; i++) {
              p.song.addCue(cueSet2[i].time, p.executeCueSet2, i + 1);
            }

        };

        p.draw = () => {
            p.colorMode(p.RGB);
            p.background(0, 0, 0, 25);
            
            for (let i = p.fireworks.length - 1; i >= 0; i--) {
                p.fireworks[i].update(p.gravity);
                p.fireworks[i].show();
                
                if (p.fireworks[i].done()) {
                    p.fireworks.splice(i, 1);
                }
            }
        };

         p.executeCueSet1 = (currentCue) => {
           if (!p.cueSet1Completed.includes(currentCue)) {
             p.cueSet1Completed.push(currentCue);
             p.fireworks.push(new Firework(p, 'circle'));
           }
         };

         p.executeCueSet2 = (currentCue) => {
           if (!p.cueSet2Completed.includes(currentCue)) {
             p.cueSet2Completed.push(currentCue);
             p.fireworks.push(new Firework(p, "point"));
           }
         };

        p.mousePressed = () => {
          if (p.song.isPlaying()) {
            p.song.pause();
          } else {
            if (
              parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)
            ) {
              p.reset();
            }
            //document.getElementById("play-icon").classList.add("fade-out");
            p.canvas.addClass("fade-in");
            p.song.play();
          }
        };

        p.creditsLogged = false;

        p.logCredits = () => {
          if (
            !p.creditsLogged &&
            parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)
          ) {
            p.creditsLogged = true;
            console.log(
              "Music: http://labcat.nz/",
              "\n",
              "Animation: https://github.com/LABCAT/circles-no-2",
              "\n",
              "Code Inspiration: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO"
            );
          }
        };

        p.reset = () => {
          p.clear();
        };

        p.updateCanvasDimensions = () => {
            p.canvasWidth = window.innerWidth;
            p.canvasHeight = window.innerHeight;
            p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.redraw();
        }

        if (window.attachEvent) {
            window.attachEvent(
                'onresize',
                function () {
                    p.updateCanvasDimensions();
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener(
                'resize',
                function () {
                    p.updateCanvasDimensions();
                },
                true
            );
        }
        else {
            //The browser does not support Javascript event binding
        }
    };

    useEffect(() => {
        new p5(Sketch, sketchRef.current);
    }, []);

    return (
        <div ref={sketchRef}>
        </div>
    );
};

export default P5Sketch;
