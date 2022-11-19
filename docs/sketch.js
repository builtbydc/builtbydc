let particles = [];
let numParticles;

let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    numParticles = ~~(windowWidth * windowHeight / 1000);
    console.log(numParticles);

    colors.push(color(255, 173, 173));
    colors.push(color(255, 214, 165));
    colors.push(color(253, 255, 182));
    colors.push(color(202, 255, 191));
    colors.push(color(155, 246, 255));
    colors.push(color(160, 196, 255));
    colors.push(color(189, 178, 255));
    colors.push(color(255, 198, 255));
    colors.push(color(255, 255, 252));
}

function draw() {
    background(0);
    if (particles.length < numParticles) {
        let x = width * Math.random();
        let y = height * Math.random() - height;
        let r = 3 * (y + height) / height + 3;
        let c = colors[~~(9*Math.random())];
        particles.push(new Particle(x, y, r, c));
    }
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        if (p.y > windowHeight) {
            let x = width * Math.random();
            let y = height * Math.random() - height;
            let r = 3 * (y + height) / height + 3;
            let c = colors[~~(9*Math.random())];
            particles[i] = new Particle(x, y, r, c);
        }
        p.display();
    }
}

class Particle {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.c = c;

        this.dx = 0;
        this.dy = 0;
    }

    update() {
        if(mouseIsPressed) {
            let tempx = Math.abs(this.x - mouseX);
            let tempy = Math.abs(this.y - mouseY);
            let tempd = tempx * tempx + tempy * tempy;
            let theta = Math.atan(tempy / tempx);

            if (this.x < mouseX) this.dx -= Math.min(5, 5000*Math.cos(theta) / tempd);
            else this.dx += Math.min(5, 5000 * Math.cos(theta) / tempd);

            if(this.y < mouseY) this.dy -= Math.min(5, 5000 * Math.sin(theta) / tempd);
            else this.dy += Math.min(5, 5000 * Math.sin(theta) / tempd);
        }

        if(this.dy < 0) this.dy *= 0.95;
        this.dx *= 0.95;

        this.dy += 0.05;
        this.x += this.dx;
        this.y += this.dy;
    }

    display() {
        this.update();
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }
}