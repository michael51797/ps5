var x;
function setup() {
  x=187;
 createCanvas(640, 480);
}

function draw() {
  if (KeyIsPressed == true) {
    x=x+25;
  }
  background('lightblue')
  fill('gray');
        rect(0, 400, 640, 80);
        fill('black')
        rect(x+148, 380, 14, 3);
        ellipse(x+133, 390, 20, 20);
        ellipse(x+13, 390, 20, 20);
        ellipse(x+233, 390, 20, 20);
        ellipse(x+174, 390, 20, 20);
        fill('white');
        rect(x, 340, 150, 50);
          fill('red')
          rect(x+163, 340, 80, 50)
          fill('red')
          rect(x+188, 315, 55, 55, 20, 15, 10, 5);
          fill('white')
          rect(x+208, 325, 25, 25);
}
