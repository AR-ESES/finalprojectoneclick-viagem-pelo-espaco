let spaceship;
let meteorites1 = []; // obstacle Type 1 List, duplicate with different name if you want more
let meteorites2 = [];


let obstaclesCleared;
let obstaclesHit;

let frameCountBettwenObstaclesType1 = 40; // quantidade de vezes que aparece
let nivelDeDificuldade = 3;
let backgroundImage; // variável para a imagem de fundo

function setup() {
  var canvas = createCanvas(1420, 800);
  spaceship = new Character();

  obstaclesCleared = 0;
  obstaclesHit = 0;

  //ACRESCENTAR
  meteorites1.push(new Obstacle());
  meteorites2.push(new Obstacle2());
  

}

//CODIGO MARTE
function draw() {
  clear();
  image(backgroundImage, 0, 0, width, height); // desenha a imagem de fundo

  spaceship.show();
  spaceship.update();

  if (frameCount % frameCountBettwenObstaclesType1 == 0) {
    meteorites1.push(new Obstacle());
  }

  for (var i = meteorites1.length - 1; i >= 0; i--) {
    meteorites1[i].show();
    meteorites1[i].update();

    if (meteorites1[i].hits(spaceship)) {
      obstaclesHit++;
    }

    if (meteorites1[i].offscreen()) {
      meteorites1.splice(i, 1);
      obstaclesCleared++;
    }
  }


  //CODIGO NEPTUNO
  if (frameCount % frameCountBettwenObstaclesType1 == 0) {
    meteorites2.push(new Obstacle2());
  }

  for (var i = meteorites2.length - 1; i >= 0; i--) {
    meteorites2[i].show();
    meteorites2[i].update();

    if (meteorites2[i].hits(spaceship)) {
      obstaclesHit++;
    }

    if (meteorites2[i].offscreen()) {
      meteorites2.splice(i, 1);
      obstaclesCleared++;
    }
  }
}

function preload() {
  backgroundImage = loadImage('Background.png'); // imagem de fundo
}

function keyPressed() {
  if (key === " ") {
    spaceship.goUp();
  }
}

