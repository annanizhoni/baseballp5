let currentBase = 1;
const bases = [
  { x: -200, y: 1 },
  { x: -1, y: 200 },
  { x: 200, y: -1 },
  { x: 1, y: -200 },
];
let ballPosition;
let targetPosition;
let isAnimating = false;
let startButton;
let stopButton;
let baseballImg;

function preload() {
  baseballImg = loadImage('https://clipartix.com/wp-content/uploads/2016/12/Baseball-clipart-dr-odd.png');
}

function setup() {
  createCanvas(600, 600);
  ballPosition = createVector(bases[currentBase].x, bases[currentBase].y);
  targetPosition = createVector(bases[currentBase].x, bases[currentBase].y);

  startButton = createButton('Start');
  startButton.position(10, 620);
  startButton.mousePressed(() => {
    isAnimating = true;
  });

  stopButton = createButton('Stop');
  stopButton.position(80, 620);
  stopButton.mousePressed(() => {
    isAnimating = false;
  });
}

function draw() {
  background(76, 153, 0);
  drawBaseballDiamond();

  if (isAnimating) {
    if (ballPosition.dist(targetPosition) < 1) {
      currentBase = (currentBase + 1) % bases.length;
      targetPosition.set(bases[currentBase].x, bases[currentBase].y);
    }
    ballPosition.lerp(targetPosition, 0.05);
  }

  push();
  translate(width / 2, height / 2);
  drawBaseball(ballPosition.x, ballPosition.y);
  pop();
}

function drawBaseball(x, y) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(baseballImg, 0, 0, 15, 15);
  pop();
}


function drawBaseballDiamond() {
  push();
  translate(width / 2, height / 2);

  // Large brown diamond
  fill(139, 69, 19);
  stroke(92, 64, 51);
  beginShape();
  vertex(-250, 0);
  vertex(0, 250);
  vertex(250, 0);
  vertex(0, -250);
  endShape(CLOSE);

  // Green diamond
  fill(0, 128, 0);
  stroke(92, 64, 51);
  beginShape();
  vertex(-200, 0);
  vertex(0, 200);
  vertex(200, 0);
  vertex(0, -200);
  endShape(CLOSE);

  // Small white diamonds for bases
  fill(255);
  for (const base of bases) {
    stroke(128, 128, 128);
    push();
    translate(base.x, base.y);
    rotate(PI / 4);
    rectMode(CENTER);
    rect(0, 0, 30, 30);
    pop();
  }

  // Pitcher's mound
  fill(139, 69, 19);
  stroke(92, 64, 51);
  ellipse(0, 0, 40, 40);

  // Catcher's mound
  noStroke();
  fill(139, 69, 19);
  ellipse(0, 260, 70, 70);

  pop();
}

function drawBase(x, y) {
  push();
  translate(x, y);
  rectMode(CENTER);
  rotate(PI / 4);
  rect(0, 0, 25, 25);
pop();
}
