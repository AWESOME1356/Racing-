var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var A, B, C, D, E, F;

function preload() {

A=loadImage("images/car1.png");
B=loadImage("images/car2.png");
C=loadImage("images/car3.png");
D=loadImage("images/car4.png");
E=loadImage("images/ground.png");
F=loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
