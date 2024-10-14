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
    image(imgElp, 100, 100);
    image(imgEly, 400, 100);
    image(imgMheg, 100, 400);
    image(imgWol, 400, 400); 
    image(imgClutch, 670, 285, 808, 456);
  } else {
    image(imgEnem, 400, 100); 
    image(imgPlat, 100, 400); 
    image(imgShrine, 400, 400); 
    image(imgWhat, 250, 250);
    image(imgOops, 100, 100);
  }
  text(mouseX, 0, 180); 
  text(mouseY, 0, 200); 
}