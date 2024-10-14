let imgClutch, imgElp, imgEly, imgMheg, imgWol; 
let imgOops, imgEnem, imgPlat, imgShrine, imgWhat; 
let displaySet1;

function preload() {
  imgClutch = loadImage("1clutch.gif");
  imgElp = loadImage("elli-elpis.jpg");
  imgEly = loadImage("elli-elysion.jpg");
  imgMheg = loadImage("elli-mheg.jpg");
  imgWol = loadImage("elli-wol.jpg");
  
  imgOops = loadImage("1botw-oops.gif");
  imgEnem = loadImage("botw-enemies.jpg");
  imgPlat = loadImage("botw-plateau.jpg");
  imgShrine = loadImage("botw-shrine.jpg");
  imgWhat = loadImage("btotk-what.jpg"); 

  displaySet1 = localStorage.getItem('displaySet1') === 'true';
  localStorage.setItem('displaySet1', !displaySet1);
}

function setup() {
  createCanvas(2020, 950); 
}

function draw() {
  if (displaySet1) {
  background(180, 220, 255);
  } else {
    background(255, 220, 180);
  } 
  
  if (displaySet1) {
    image(imgElp, 325, 0, 323.85, 575.85);
    image(imgEly, 1540, 0, 349, 432);
    image(imgMheg, 0, 400, 323.85, 575.85);
    image(imgWol, 1540, 400, 447.75, 540); 
    image(imgClutch, 650, 285, 808, 456);
  } else {
    image(imgEnem, 0, 0, 496.2, 531.6); 
    image(imgPlat, 495, 0, 330, 523.2); 
    image(imgShrine, 0, 518, 540, 469);
    image(imgWhat, 538, 515, 445, 445);
    image(imgOops, 820, 0, 915.2, 514.8);
  }
  text(mouseX, 0, 240); 
  text(mouseY, 0, 260); 
}