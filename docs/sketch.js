let r;
let x, y, lastx, lasty;
let dx, dy;
let ddx, ddy;

let minx,maxx,miny,maxy;
let minxm,maxxm, minym, maxym;

let speed;

let time;

let PIXEL_DENSITY;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(0);

    noStroke();


    PIXEL_DENSITY = pixelDensity();

    r = 1;

    x = windowWidth / 2;
    y = windowHeight / 2;
    lastx = x;
    lasty = y;

    dx = 0;
    dy = 0;

    ddx = 0;
    ddy = 0;

    speed = 30;

    time = 0;
}

function getPixel(px, py) {
    let d = PIXEL_DENSITY;
    let index = 4 * d * (py * width * d + px);
    return color(
        pixels[index],
        pixels[index+1],
        pixels[index+2]
    );
}

function setPixel(px, py, color) {
    let r = color.levels[0];
    let g = color.levels[1];
    let b = color.levels[2];
    let d = PIXEL_DENSITY;
    for (let i = 0; i < d; i++) {
        for (let j = 0; j < d; j++) {
            // loop over
            index = 4 * ((py * d + j) * windowWidth * d + (px * d + i));
            pixels[index] = r;
            pixels[index+1] = g;
            pixels[index+2] = b;
        }
    }
}

function avgColor(px, py) {
    let colors = [];
    if(px > 0) {
        colors.push(getPixel(px-1, py));
        if(py > 0) colors.push(getPixel(px-1, py-1));
        if(py < windowHeight-1) colors.push(getPixel(px-1, py+1));
    }
    if(py > 0) colors.push(getPixel(px, py-1));
    if(py < windowHeight-1) colors.push(getPixel(px, py+1));
    if(px < windowWidth-1) {
        colors.push(getPixel(px+1, py));
        if(py > 0) colors.push(getPixel(px+1, py-1));
        if(py < windowHeight-1) colors.push(getPixel(px+1, py+1));
    }

    let r = 0;
    let g = 0;
    let b = 0;
    for(let i = 0; i < colors.length; i++) {
        r += colors[i].levels[0];
        g += colors[i].levels[1];
        b += colors[i].levels[2];
    }

    r /= colors.length;
    g /= colors.length;
    b /= colors.length;

    return color(r, 0.99*g, b);
}

function draw() {
    colorMode(HSB);
    fill(time, 50, 100);
    colorMode(RGB);
    time++;
    time %= 360;
    if(time % 2 === 0) {
        let bb = Math.max(x - minx, maxx - x, y - miny, maxy - y) + 7;
        loadPixels();
        for(let px = Math.max(Math.round(x - bb), 0); px < Math.min(x + bb, windowWidth); px++) {
            for(let py = Math.max(Math.round(y - bb), 0); py < Math.min(y + bb, windowHeight); py++) {
                setPixel(px, py, avgColor(px, py));
            }
        }
        for(let px = Math.max(Math.round((windowWidth - x) - bb), 0); px < Math.min((windowWidth - x) + bb, windowWidth); px++) {
            for(let py = Math.max(Math.round((windowHeight - y) - bb), 0); py < Math.min((windowHeight - y) + bb, windowHeight); py++) {
                setPixel(px, py, avgColor(px, py));
            }
        }
        updatePixels();

        minx = x;
        maxx = x;
        miny = y;
        maxy = y;
    }
    for(let i = 0; i < speed; i++) {
        ellipse(x, y, 2*r, 2*r);
        ellipse(windowWidth - x, windowHeight - y, 2*r, 2*r);

        lastx = x;
        lasty = y;
        x += dx;
        y += dy;

        minx = Math.min(minx, x);
        maxx = Math.max(maxx, x);
        miny = Math.min(miny, y);
        maxy = Math.max(maxy, y);

        minxm = Math.min(minxm, windowWidth - x);
        maxxm = Math.max(maxxm, windowWidth - x);
        minym = Math.min(minym, windowHeight - y);
        maxym = Math.max(maxym, windowHeight - y);

        if(x < 0) flipX(0);
        if(y < 0) flipY(0);
        if(x > windowWidth) flipX(windowWidth-1);
        if(y > windowHeight) flipY(windowHeight-1);

        dx += ddx;
        dy += ddy;

        ddx += pnrand(0.01);
        ddy += pnrand(0.01);

        let dk = 0.83;
        let ddk = -0.5;
        if(Math.sqrt(dx*dx + dy*dy) > 0.3) {
            dx *= dk;
            dy *= dk;
            ddx *= ddk;
            ddy *= ddk;
        }
    }
}

function flipX(pos) {
    x = pos;
    dx *= -1;
    ddx *= -1;
}

function flipY(pos) {
    y = pos;
    dy *= -1;
    ddy *= -1;
}

function pnrand(magnitude) {
    return 2 * magnitude * Math.random() - magnitude;
}