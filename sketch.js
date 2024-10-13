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
  createCanvas(800, 800); 
}

function draw() {
  background(220);
}