pos = {
    x: 400,
    y: 300,
}
step = {
    x: 0,
    y: 0,
    mag: 15,
}

function setup() {
    createCanvas(800,600);
    background(0);
    stroke('white');
    strokeWeight(1);
}

function draw() {
    step.x = random(-1,1) * step.mag;
    step.y = random(-1,1) * step.mag;
    line(pos.x,pos.y,pos.x+step.x, pos.y+step.y);
    pos.x = pos.x + step.x;
    pos.y = pos.y + step.y;
}