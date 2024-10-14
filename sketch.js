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
  createCanvas(1740, 950); 
}

function draw() {
  if (displaySet1) {
  background(180, 220, 255);
  textFont("Itim");
  } else {
    background(255, 220, 180);
    textFont("Comic Neue");
  } 
  
  if (displaySet1) {
    image(imgElp, 1309, 189, 431.8, 767.8);
    image(imgEly, 0, 409, 453.7, 561.6);
    image(imgMheg, 883, 189, 431.8, 767.8);
    image(imgWol, 441, 459, 447.75, 540); 
    image(imgClutch, 0, 0, 888.8, 501.6);
    textSize(85);
    fill(110, 24, 98);
    text("Clutch! An epic finish.", 915, 118);
  } else {
    image(imgEnem, 0, 0, 496.2, 531.6); 
    image(imgPlat, 495, 0, 330, 523.2); 
    image(imgShrine, 0, 518, 540, 469);
    image(imgWhat, 538, 515, 445, 445);
    image(imgOops, 825, 0, 915.2, 514.8);
    textSize(100);
    fill(110, 24, 24);
    text("Oops! Mis-timed!", 999, 760);
  }
}