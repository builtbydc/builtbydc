let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    if (particles.length < 2048) {
        let x = width * Math.random();
        let y = height * Math.random() - height;
        let r = 3 * (y + height) / height + 3;
        particles.push(new Particle(x, y, r));
    }
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        if (p.y > windowHeight) {
            let x = width * Math.random();
            let y = height * Math.random() - height;
            let r = 3 * (y + height) / height + 3;
            particles[i] = new Particle(x, y, r);
        }
        p.display();
    }
}

class Particle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

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
        fill(255, 200, 200);
        ellipse(this.x, this.y, this.r, this.r);
    }
}