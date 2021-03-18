import React, { useRef, useEffect } from "react";
import "./globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import Firework from "./Firework.js";
import audio from "../audio/fireworks-no-1.ogg";
import cueSet1 from "./cueSet1.js";
import cueSet2 from "./cueSet2.js";
import cueSet3 from "./cueSet3.js";


const P5Sketch = () => {
    const sketchRef = useRef();

    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.song = null;

        p.tempo = 122;

        p.barAsSeconds = Math.floor((60 / p.tempo) * 4 * 100000) / 100000;

        p.fireworks = [];
        
        p.gravity = 0;

        p.cueSet1Completed = [];

        p.cueSet2Completed = [];

        p.cueSet3Completed = [];

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
              let vars = {
                currentCue: i + 1,
                time: cueSet2[i].time,
                midi: cueSet2[i].midi,
              };
              p.song.addCue(cueSet2[i].time, p.executeCueSet2, vars);
            }

            for (let i = 0; i < cueSet3.length; i++) {
              p.song.addCue(cueSet3[i].time, p.executeCueSet3, i + 1);
            }
        };

        p.draw = () => {
            p.background(0, 0, 0, 0.1);
            
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
             p.fireworks.push(new Firework(p, 'triangle'));
           }
         };

         p.executeCueSet2 = (vars) => {
           if (!p.cueSet2Completed.includes(vars.currentCue)) {
             p.cueSet2Completed.push(vars.currentCue);
             let xPos = Math.floor(vars.time * 100000) / 100000 / 2;
             console.log(p.barAsSeconds);
             if (parseFloat(xPos) >= parseFloat(p.barAsSeconds)) {
               while (xPos >= p.barAsSeconds) {
                 xPos = xPos - p.barAsSeconds;
               }
               xPos = xPos > 0 ? xPos : 0;
             }

             let hue = 0;
             let rand = 0;
             switch (vars.midi) {
               case 36:
                 hue = p.random(90, 269);
                 rand = p.random(-8, -4);
                 break;
               case 37:
                 hue = p.random(270, 449);
                 hue = hue <= 360 ? hue : (hue = hue - 360); 
                 rand = p.random(-20, -16);
                 break;
             } 

             let x = p.width / 32 + (p.width / p.barAsSeconds) * xPos;
             p.fireworks.push(new Firework(p, "point", x, hue, rand));
           }
         };

        p.executeCueSet3 = (currentCue) => {
          if (!p.cueSet3Completed.includes(currentCue)) {
            p.cueSet3Completed.push(currentCue);
            p.fireworks.push(new Firework(p, "circle"));
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
