var canvas, backgroundImage;
var gameState=0;
var distance=0;
var gameState=0;
var database;
var allPlayers;
var form,player,game;
var player1,player2;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  db= firebase.database();
  game= new Game();
  game.start();
  game.getState();
}


function draw(){
  if(playerCount===2){
    game.play();

  }
}
