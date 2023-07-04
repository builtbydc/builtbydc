let r;
let x, y, lastx, lasty;
let dx, dy;
let ddx, ddy;

let speed;

let time;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(0);

    noStroke();
    colorMode(HSB);

    r = 1;

    x = windowWidth / 2;
    y = windowHeight / 2;
    lastx = x;
    lasty = y;

    dx = 0;
    dy = 0;

    ddx = 0;
    ddy = 0;

    speed = 50;

    time = 0;
}

function draw() {
    fill(time, 50, 100);
    time++;
    time %= 360;
    for(let i = 0; i < speed; i++) {
        ellipse(x, y, 2*r, 2*r);

        lastx = x;
        lasty = y;
        x += dx;
        y += dy;

        if(x < 0) x = windowWidth;
        if(y < 0) y = windowHeight;
        if(x > windowWidth) x = 0;
        if(y > windowHeight) y = 0;

        dx += ddx;
        dy += ddy;

        ddx += pnrand(0.01);
        ddy += pnrand(0.01);

        if(Math.sqrt(dx*dx + dy*dy) > 0.1) {
            dx *= 0.999;
            dy *= 0.999;
            ddx *= -0.99;
            ddy *= -0.99;
        }
    }
}

function pnrand(magnitude) {
    return 2 * magnitude * Math.random() - magnitude;
}