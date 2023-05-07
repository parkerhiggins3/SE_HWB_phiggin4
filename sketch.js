xLoc = 200
yLoc = 200
dx = 5;
dy = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#202A44');
  rect(10,yLoc-40,10,80);
  rect (380,mouseY, 10, 80);
  ellipse (xLoc,yLoc,20,20);
  if (xLoc >= width-20 || xLoc == 20){ dx = -dx; }
  if (yLoc >=height-20 || yLoc == 20){ dy = -dy; }
  
  fill('#00A4B4');
  
  xLoc = xLoc + dx;
  yLoc = yLoc + dy;
  
}