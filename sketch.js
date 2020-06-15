var canvas, bgImg;
var database, playerCount;
var gameState= 0; 
var form, game, player;
var allPlayers;

function setup(){
    database= firebase.database();
    canvas= createCanvas(500,500);
    game= new Game(); 
    game.getState();
    game.start();
    console.log(gameState);
}

function draw(){  
    if (playerCount===4){
        game.update(1);
    }
    if (gameState===1){
        clear();
        game.play();
    }
}
