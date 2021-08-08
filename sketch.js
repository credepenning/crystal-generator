let helvetica;

function preload(){
	helvetica = loadFont('Assets/Helvetica.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  textFont(helvetica);
  textAlign(CENTER, CENTER);
  textSize(50);
}

function draw() {
  background(0);

  let time = millis();

  rotateX(time * .001);

  text('hello world', 0, 0);

  // for(i = 50; i > 45; i = i - 1){
  //   textSize(i);
  //   text("Hello World", 0, 0);
  // }

}