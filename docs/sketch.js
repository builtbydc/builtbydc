let particles = [];
let particleNumber = 500;

let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    noStroke();

    colors.push(color(255, 173, 173));
    colors.push(color(255, 214, 165));
    colors.push(color(253, 255, 182));
    colors.push(color(202, 255, 191));
    colors.push(color(155, 246, 255));
    colors.push(color(160, 196, 255));
    colors.push(color(189, 178, 255));
    colors.push(color(255, 198, 255));
    colors.push(color(255, 255, 252));

    let particleSize = 5;
    for(let i = 0; i < particleNumber; i++) {
        let px = windowWidth*Math.random();
        let py = windowHeight*Math.random();
        particles[i] = new Particle(px, py, particleSize, colors[~~(9*Math.random())], i);
    }

    background(0);
}

function draw() {
    //background(0);

    for(let p of particles) {
        p.display();
    }
}

class Particle {
    constructor(x, y, size, color, index) {
        this.x = x;
        this.y = y; 
        this.size = size;
        this.color = color;
        this.index = index;
        
        this.dx = 0; 
        this.dy = 0;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
        this.update();
    }

    update() {
        for(let i = 0; i < particleNumber; i++) {
            if(i !== this.index) {
                let other = particles[i];
                let xdist = other.x - this.x;
                let ydist = other.y - this.y;
                let dist = Math.sqrt(xdist*xdist + ydist*ydist);
                let theta = Math.atan2(ydist, xdist);

                if(Math.abs(dist) > 1) {
                    let forceConstant = 7;
                    this.dx -= forceConstant * Math.cos(theta) / (dist*dist);
                    this.dy -= forceConstant * Math.sin(theta) / (dist*dist);
                }
            }
        }
        this.x += this.dx;
        this.y += this.dy;

        if(this.x < this.size/2) {
            this.dx *= -0.5;
            this.x = this.size/2;
        }
        if(this.x > windowWidth - this.size/2) {
            this.dx *= -0.5;
            this.x = windowWidth - this.size/2;
        }
        if(this.y < this.size/2) {
            this.dy *= -0.5;
            this.y = this.size/2;
        }
        if(this.y > windowHeight-this.size/2) {
            this.dy *= -0.5;
            this.y = windowHeight - this.size/2;
        }

        this.dx *= 0.99;
        this.dy *= 0.99;
    }
}