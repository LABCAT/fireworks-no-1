(this["webpackJsonpfireworks-no-1"]=this["webpackJsonpfireworks-no-1"]||[]).push([[0],{12:function(i,t,e){},15:function(i,t,e){"use strict";e.r(t);var n=e(1),o=e(0),a=e.n(o),d=e(6),c=e.n(d),s=(e(12),e(2));window.p5=s;e(14);var m=e(3),r=e(4),u=function(){function i(t,e,n,o,a,d){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;Object(m.a)(this,i),this.p5=t,this.pos=this.p5.createVector(e,n),this.firework=a,this.hue=o,this.type=d,this.startTime=this.p5.millis(),this.lifespan="circle"===this.type?1023:255,this.acc=this.p5.createVector(0,0),this.firework?(s>=0&&(s="point"===this.type?this.p5.random(-12,-8):this.p5.random(-18,-15)),this.vel=this.p5.createVector(0,s)):(this.vel=window.p5.Vector.random2D(),console.log(c),c>0?this.vel.mult(c):"point"===this.type?this.vel.mult(this.p5.random(2,10)):"triangle"===this.type?this.vel.mult(this.p5.random(2,30)):this.vel.mult(this.p5.random(2,60)))}return Object(r.a)(i,[{key:"applyForce",value:function(i){this.acc.add(i)}},{key:"update",value:function(){this.firework||(this.vel.mult(.9),this.lifespan-=4),this.vel.add(this.acc),this.pos.add(this.vel),this.acc.mult(0)}},{key:"done",value:function(){var i=this.startTime+1967;return this.p5.millis()>=i}},{key:"show",value:function(){var i=this.hue+180<360?this.hue+180:this.hue-180,t="point"===this.type?8:4;this.firework?(this.p5.strokeWeight(t),this.p5.stroke(this.hue,100,100),this.p5.fill(i,100,100,.5)):(this.p5.strokeWeight(t/2),this.p5.stroke(this.hue,100,100,this.lifespan/100),this.p5.fill(i,100,100,this.lifespan/4/100)),"point"===this.type?this.p5.point(this.pos.x,this.pos.y):"circle"===this.type?(this.p5.noFill(),this.p5.stroke(this.hue,255,255,.5),this.p5.ellipse(this.pos.x,this.pos.y,4*t),this.p5.stroke(i,255,255,.5),this.p5.ellipse(this.pos.x,this.pos.y,8*t),this.p5.stroke(this.hue,255,255,.5),this.p5.ellipse(this.pos.x,this.pos.y,16*t)):this.p5.triangle(this.pos.x,this.pos.y,this.pos.x+8,this.pos.y,this.pos.x+4,this.pos.y-8)}}]),i}(),k=function(){function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,d=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;Object(m.a)(this,i),this.p5=t,this.type=e,this.spread=c,this.xPos=n>0?n:this.p5.random(this.p5.width),this.hue=o>0?o:this.p5.random(255),this.canExplode=d,this.startTime=this.p5.millis(),this.firework=new u(this.p5,this.xPos,this.p5.height,this.hue,!0,this.type,this.spread,a),this.exploded=!1,this.particles=[]}return Object(r.a)(i,[{key:"done",value:function(){return!(!this.exploded||0!==this.particles.length)}},{key:"update",value:function(i){if(!this.exploded){this.firework.applyForce(i),this.firework.update();var t=this.startTime+1967;this.p5.millis()>=t&&(this.exploded=!0,this.canExplode&&this.explode())}for(var e=this.particles.length-1;e>=0;e--)this.particles[e].applyForce(i),this.particles[e].update(),this.particles[e].done()&&this.particles.splice(e,1)}},{key:"explode",value:function(){for(var i=0;i<100;i++){var t=this.hue+i;t=t<360?t:0;var e=new u(this.p5,this.firework.pos.x,this.firework.pos.y,t,!1,this.type,this.spread);this.particles.push(e)}}},{key:"show",value:function(){this.exploded||this.firework.show();for(var i=0;i<this.particles.length;i++)this.particles[i].show()}}]),i}(),l=e.p+"static/media/fireworks-no-1.2065e452.ogg",v=[{name:"E2",midi:40,time:0,velocity:.7874015748031497,duration:7.868848},{name:"D2",midi:38,time:1.967212,velocity:.7874015748031497,duration:5.901636},{name:"G1",midi:31,time:3.934424,velocity:.7874015748031497,duration:3.934424},{name:"B1",midi:35,time:5.901636,velocity:.7874015748031497,duration:1.967212},{name:"E2",midi:40,time:7.868848,velocity:.7874015748031497,duration:7.868848},{name:"D2",midi:38,time:9.83606,velocity:.7874015748031497,duration:5.901636},{name:"G1",midi:31,time:11.803272,velocity:.7874015748031497,duration:3.934424},{name:"B1",midi:35,time:13.770484,velocity:.7874015748031497,duration:1.967212},{name:"E2",midi:40,time:15.737696,velocity:.7874015748031497,duration:7.868848},{name:"D2",midi:38,time:17.704908,velocity:.7874015748031497,duration:5.901636},{name:"G1",midi:31,time:19.67212,velocity:.7874015748031497,duration:3.934424},{name:"B1",midi:35,time:21.639332,velocity:.7874015748031497,duration:1.967212},{name:"E2",midi:40,time:23.606544,velocity:.7874015748031497,duration:7.868848},{name:"D2",midi:38,time:25.573756,velocity:.7874015748031497,duration:5.901636},{name:"G1",midi:31,time:27.540968,velocity:.7874015748031497,duration:3.934424},{name:"B1",midi:35,time:29.50818,velocity:.7874015748031497,duration:1.967212},{name:"E2",midi:40,time:31.475392,velocity:.7874015748031497,duration:7.868848000000014},{name:"D2",midi:38,time:33.442604,velocity:.7874015748031497,duration:5.9016360000000105},{name:"G1",midi:31,time:35.409816000000006,velocity:.7874015748031497,duration:3.934424000000007},{name:"B1",midi:35,time:37.37702800000001,velocity:.7874015748031497,duration:1.9672120000000035},{name:"E2",midi:40,time:39.34424000000001,velocity:.7874015748031497,duration:7.868848000000014},{name:"D2",midi:38,time:41.31145200000002,velocity:.7874015748031497,duration:5.9016360000000105},{name:"G1",midi:31,time:43.27866400000002,velocity:.7874015748031497,duration:3.934424000000007},{name:"B1",midi:35,time:45.245876000000024,velocity:.7874015748031497,duration:1.9672120000000035},{name:"E2",midi:40,time:47.21308800000003,velocity:.7874015748031497,duration:7.868848000000014},{name:"D2",midi:38,time:49.18030000000003,velocity:.7874015748031497,duration:5.9016360000000105},{name:"G1",midi:31,time:51.147512000000035,velocity:.7874015748031497,duration:3.934424000000007},{name:"B1",midi:35,time:53.11472400000004,velocity:.7874015748031497,duration:1.9672120000000035}],y=[{duration:7.868848,durationTicks:245760,midi:40,name:"E2",ticks:983040,time:31.475392,velocity:.7874015748031497},{duration:5.901635999999996,durationTicks:184320,midi:38,name:"D2",ticks:1044480,time:33.442604,velocity:.7874015748031497},{duration:3.934424,durationTicks:122880,midi:31,name:"G1",ticks:1105920,time:35.409816,velocity:.7874015748031497},{duration:1.9672120000000035,durationTicks:61440,midi:35,name:"B1",ticks:1167360,time:37.377027999999996,velocity:.7874015748031497},{duration:7.868848,durationTicks:245760,midi:40,name:"E2",ticks:1228800,time:39.34424,velocity:.7874015748031497},{duration:5.901635999999996,durationTicks:184320,midi:38,name:"D2",ticks:1290240,time:41.311452,velocity:.7874015748031497},{duration:3.934424,durationTicks:122880,midi:31,name:"G1",ticks:1351680,time:43.278664,velocity:.7874015748031497},{duration:1.9672120000000035,durationTicks:61440,midi:35,name:"B1",ticks:1413120,time:45.245875999999996,velocity:.7874015748031497},{duration:7.868848,durationTicks:245760,midi:40,name:"E2",ticks:1474560,time:47.213088,velocity:.7874015748031497},{duration:5.901635999999996,durationTicks:184320,midi:38,name:"D2",ticks:1536e3,time:49.1803,velocity:.7874015748031497},{duration:3.934424,durationTicks:122880,midi:31,name:"G1",ticks:1597440,time:51.147512,velocity:.7874015748031497},{duration:1.9672120000000035,durationTicks:61440,midi:35,name:"B1",ticks:1658880,time:53.114723999999995,velocity:.7874015748031497}],h=[{duration:.06147537499999878,durationTicks:1920,midi:37,name:"C#2",ticks:384e3,time:12.295075,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:403200,time:12.909828749999999,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:414720,time:13.278680999999999,velocity:.6299212598425197},{duration:.06147537499999878,durationTicks:1920,midi:37,name:"C#2",ticks:445440,time:14.262287,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:483840,time:15.4917945,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:506880,time:16.229499,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:533760,time:17.09015425,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:537600,time:17.213105,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:545280,time:17.4590065,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:568320,time:18.196711,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:599040,time:19.180317,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:606720,time:19.4262185,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:629760,time:20.163923,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:648960,time:20.77867675,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:660480,time:21.147529,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:691200,time:22.131135,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:729600,time:23.3606425,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:752640,time:24.098347,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:779520,time:24.95900225,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:783360,time:25.081953,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:791040,time:25.3278545,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:814080,time:26.065559,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:844800,time:27.049165,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:852480,time:27.2950665,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:875520,time:28.032771,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:894720,time:28.64752475,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:906240,time:29.016377,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:936960,time:29.999983,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:975360,time:31.2294905,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:37,name:"C#2",ticks:998400,time:31.967195,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1025280,time:32.82785025,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1029120,time:32.950801,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1036800,time:33.1967025,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1059840,time:33.934407,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1090560,time:34.918013,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1098240,time:35.1639145,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1121280,time:35.901619,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1140480,time:36.51637275,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1152e3,time:36.885225,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1182720,time:37.868831,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1221120,time:39.0983385,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1244160,time:39.836043,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1271040,time:40.69669825,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1274880,time:40.819649,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1282560,time:41.0655505,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1305600,time:41.803255,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1336320,time:42.786861,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1344e3,time:43.0327625,velocity:.23622047244094488},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1367040,time:43.770467,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1386240,time:44.38522075,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:37,name:"C#2",ticks:1397760,time:44.754073,velocity:.6299212598425197}],C=[{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:491520,time:15.737696,velocity:.6299212598425197},{duration:.06147537499999878,durationTicks:1920,midi:36,name:"C2",ticks:499200,time:15.9835975,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:518400,time:16.59835125,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:522240,time:16.721302,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:529920,time:16.9672035,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:533760,time:17.09015425,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:537600,time:17.213105,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:541440,time:17.33605575,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:549120,time:17.58195725,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:552960,time:17.704908,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:560640,time:17.9508095,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:579840,time:18.56556325,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:583680,time:18.688513999999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:591360,time:18.9344155,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:610560,time:19.54916925,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:614400,time:19.67212,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:622080,time:19.9180215,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:641280,time:20.53277525,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:645120,time:20.655726,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:652800,time:20.9016275,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:672e3,time:21.51638125,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:675840,time:21.639332,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:683520,time:21.8852335,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:702720,time:22.49998725,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:706560,time:22.622937999999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:714240,time:22.8688395,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:733440,time:23.48359325,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:737280,time:23.606544,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:744960,time:23.852445499999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:764160,time:24.46719925,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:768e3,time:24.59015,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:775680,time:24.8360515,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:779520,time:24.95900225,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:783360,time:25.081953,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:787200,time:25.20490375,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:794880,time:25.45080525,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:798720,time:25.573756,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:806400,time:25.819657499999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:825600,time:26.43441125,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:829440,time:26.557361999999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:837120,time:26.8032635,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:856320,time:27.41801725,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:860160,time:27.540968,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:867840,time:27.786869499999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:887040,time:28.40162325,velocity:.6299212598425197},{duration:.061475374999997,durationTicks:1920,midi:36,name:"C2",ticks:890880,time:28.524574,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:898560,time:28.7704755,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:917760,time:29.38522925,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:921600,time:29.50818,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:929280,time:29.754081499999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:948480,time:30.36883525,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:952320,time:30.491785999999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:96e4,time:30.7376875,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:979200,time:31.35244125,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:983040,time:31.475392,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:990720,time:31.721293499999998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1009920,time:32.33604725,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1013760,time:32.458998,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1021440,time:32.704899499999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1025280,time:32.82785025,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1029120,time:32.950801,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1032960,time:33.07375175,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1040640,time:33.31965325,velocity:.6299212598425197},{duration:.06147537499999345,durationTicks:1920,midi:36,name:"C2",ticks:1044480,time:33.442604,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1052160,time:33.6885055,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1071360,time:34.303259249999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1075200,time:34.42621,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1082880,time:34.6721115,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1102080,time:35.28686525,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1105920,time:35.409816,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1113600,time:35.6557175,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1132800,time:36.27047125,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1136640,time:36.393422,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1144320,time:36.639323499999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1163520,time:37.25407725,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1167360,time:37.377027999999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1175040,time:37.6229295,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1194240,time:38.237683249999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1198080,time:38.360634,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1205760,time:38.6065355,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1224960,time:39.22128925,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1228800,time:39.34424,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1236480,time:39.5901415,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1255680,time:40.20489525,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1259520,time:40.327846,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1267200,time:40.573747499999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1271040,time:40.69669825,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1274880,time:40.819649,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1278720,time:40.94259975,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1286400,time:41.18850125,velocity:.6299212598425197},{duration:.06147537499999345,durationTicks:1920,midi:36,name:"C2",ticks:1290240,time:41.311452,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1297920,time:41.5573535,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1317120,time:42.172107249999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1320960,time:42.295058,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1328640,time:42.5409595,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1347840,time:43.15571325,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1351680,time:43.278664,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1359360,time:43.5245655,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1378560,time:44.13931925,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1382400,time:44.26227,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1390080,time:44.508171499999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1409280,time:45.12292525,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1413120,time:45.245875999999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1420800,time:45.4917775,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:144e4,time:46.106531249999996,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1443840,time:46.229482,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1451520,time:46.4753835,velocity:.6299212598425197},{duration:.061475375000000554,durationTicks:1920,midi:36,name:"C2",ticks:1470720,time:47.09013725,velocity:.6299212598425197}],T=function(){var i=Object(o.useRef)(),t=function(i){i.canvas=null,i.canvasWidth=window.innerWidth,i.canvasHeight=window.innerHeight,i.song=null,i.tempo=122,i.barAsSeconds=Math.floor(60/i.tempo*4*1e5)/1e5,i.fireworks=[],i.gravity=0,i.cueSet1Completed=[],i.cueSet2Completed=[],i.cueSet3Completed=[],i.cueSet4Completed=[],i.preload=function(){i.song=i.loadSound(l)},i.setup=function(){i.canvas=i.createCanvas(i.canvasWidth,i.canvasHeight),i.colorMode(i.HSB),i.gravity=i.createVector(0,.2),i.stroke(255),i.strokeWeight(4),i.background(0),i.song.onended(i.logCredits);for(var t=0;t<v.length;t++)i.song.addCue(v[t].time,i.executeCueSet1,t+1);for(var e=0;e<y.length;e++)i.song.addCue(y[e].time,i.executeCueSet2,e+1);for(var n=0;n<h.length;n++){var o={currentCue:n+1,time:h[n].time,midi:h[n].midi};i.song.addCue(h[n].time,i.executeCueSet3,o)}for(var a=0;a<C.length;a++){var d={currentCue:a+1,time:C[a].time,midi:C[a].midi};i.song.addCue(C[a].time,i.executeCueSet4,d)}},i.draw=function(){if(i.song&&i.song.isPlaying()){i.background(0,0,0,.1);for(var t=i.fireworks.length-1;t>=0;t--)i.fireworks[t].update(i.gravity),i.fireworks[t].show(),i.fireworks[t].done()&&i.fireworks.splice(t,1)}},i.executeCueSet1=function(t){i.cueSet1Completed.includes(t)||(i.cueSet1Completed.push(t),i.fireworks.push(new k(i,"triangle")))},i.executeCueSet2=function(t){i.cueSet2Completed.includes(t)||(i.cueSet2Completed.push(t),i.fireworks.push(new k(i,"circle")))},i.snareHue=60,i.executeCueSet3=function(t){if(!i.cueSet3Completed.includes(t.currentCue)){i.cueSet3Completed.push(t.currentCue);var e=Math.floor(1e5*t.time)/1e5;if(parseFloat(e)>=parseFloat(i.barAsSeconds)){for(;e>=i.barAsSeconds;)e-=i.barAsSeconds;e=e>0?e:0}var n=i.width/32+i.width/i.barAsSeconds*e;i.fireworks.push(new k(i,"point",n,i.snareHue,-15,!0)),i.snareHue=i.snareHue>=360?60:i.snareHue+60}},i.executeCueSet4=function(t){if(!i.cueSet4Completed.includes(t.currentCue)){i.cueSet4Completed.push(t.currentCue);var e=Math.floor(1e5*t.time)/1e5;if(parseFloat(e)>=parseFloat(i.barAsSeconds)){for(;e>=i.barAsSeconds;)e-=i.barAsSeconds;e=e>0?e:0}var n=i.width/32+i.width/i.barAsSeconds*e;i.fireworks.push(new k(i,"point",n,0,-12.5,!1))}},i.mousePressed=function(){i.song.isPlaying()?i.song.pause():(parseInt(i.song.currentTime())>=parseInt(i.song.buffer.duration)&&i.reset(),i.canvas.addClass("fade-in"),i.song.play())},i.creditsLogged=!1,i.logCredits=function(){!i.creditsLogged&&parseInt(i.song.currentTime())>=parseInt(i.song.buffer.duration)&&(i.creditsLogged=!0,console.log("Music: http://labcat.nz/","\n","Animation: https://github.com/LABCAT/circles-no-2","\n","Code Inspiration: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO"))},i.reset=function(){i.clear()},i.updateCanvasDimensions=function(){i.canvasWidth=window.innerWidth,i.canvasHeight=window.innerHeight,i.createCanvas(i.canvasWidth,i.canvasHeight),i.redraw()},window.attachEvent?window.attachEvent("onresize",(function(){i.updateCanvasDimensions()})):window.addEventListener&&window.addEventListener("resize",(function(){i.updateCanvasDimensions()}),!0)};return Object(o.useEffect)((function(){new s(t,i.current)}),[]),Object(n.jsx)("div",{ref:i})};var p=function(){return Object(n.jsx)(T,{})};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.530dbb6b.chunk.js.map