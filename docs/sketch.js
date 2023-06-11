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

    background(0);
    

    
}

let x = 0;
let y = 0;

function draw() {
    for(let i = 0; i < 10000; i++) {
        push();
        translate(windowWidth / 2, windowHeight);

        px = x * windowHeight / 15;
        py = -y * windowHeight / 12;

        if(py <= 0 && -py < windowHeight) {
            fill(colors[~~(-9*py / windowHeight)]);
            ellipse(px, py, 1, 1);
        }

        pop();

        let nextX;
        let nextY;

        let r = Math.random();

        if(r < 0.01) {
            nextX = 0;
            nextY = 0.001 * y;
        } else if(r < 0.86) {
            nextX = 1.3 * x;
            nextY = 0.84 * y + 1.6;
        } else if(r < 0.93) {
            nextX = 0.1 * x - 0.2 * y;
            nextY = 0.3 * x + 0.05 * y;
        } else {
            nextX = -0.1 * x + 0.2 * y;
            nextY = 0.3 * x + 0.05 * y;
        }

        x = nextX;
        y = nextY;
    }
}

