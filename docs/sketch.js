let particles;
let number = 10000;

let pointx;
let pointy;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(35, 35, 35);

    particles = [];

    for(let i = 0; i < number; i++) {
        particles.push(new Particle());
    }

    pointx = windowWidth / 2;
    pointy = windowHeight / 2;
}

let t = 0;

function draw() {
    fill(0, 0, 0, 23);
    rect(0, 0, windowWidth, windowHeight);

    fill(255);
    ellipse(windowWidth/2, windowHeight/2, 100 + 20*Math.sin(t/30), 100 + 20*Math.sin(t/30));
    t++;

    for(let i = 0; i < number; i++) {
        particles[i].display();
    }
}

function randomX(radius) {
    let rx = (windowWidth / 2 - radius - 100) * Math.random() + radius;
    //if(Math.random() > 0.5) rx += windowWidth / 2 + 100;
    return rx;
}

function randomY(radius) {
    let ry = (windowHeight / 2 - radius - 100) * Math.random() + radius;
    if(Math.random() > 0.5) ry += windowHeight / 2 + 100;
    return ry;
}

class Particle {

    constructor() {
        let speed = 25;
        this.acceleration = speed * speed;
        let minSize = 2;
        let maxSize = 2;

        this.r = (maxSize - minSize)*Math.random() + minSize;
        this.x = randomX(this.r);
        this.y = windowHeight / 2;
        this.lastX = this.x;
        this.lastY = this.y;

        let phi = Math.atan2(windowHeight / 2 - this.y, windowWidth / 2 - this.x) + Math.PI / 2;
        //if(Math.random() > 0.5) phi -= Math.PI;

        let tdx = windowWidth / 2 - this.x;
        let tdy = windowHeight / 2 - this.y;
        let td = Math.sqrt(tdx*tdx + tdy*tdy);
        let tspeed = speed*Math.sqrt(1 / td);

        this.dx = tspeed*Math.cos(phi);
        this.dy = tspeed*Math.sin(phi);
    }

    display() {
        fill(255);
        stroke(255);
        strokeWeight(this.r);
        line(this.lastX, this.lastY, this.x, this.y);

        noStroke();
        //ellipse(this.x, this.y, 2*this.r, 2*this.r);
        this.update();
    }

    update() {
        let theta = Math.atan2(windowHeight / 2 - this.y, windowWidth / 2 - this.x);
        let tdx = windowWidth / 2 - this.x;
        let tdy = windowHeight / 2 - this.y;
        let td = Math.sqrt(tdx*tdx + tdy*tdy);
        let taccel = this.acceleration / (td * td);
        let ddx = taccel*Math.cos(theta);
        let ddy = taccel*Math.sin(theta);

        this.dx += ddx;
        this.dy += ddy;

        this.lastX = this.x;
        this.lastY = this.y;

        this.x += this.dx;
        this.y += this.dy;
    }
}