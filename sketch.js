var ball;
var database;
var allPlayers;
var form1, game1, player1;

var gameState=0;
var playerCount=0;

var car1, car2, car3, car4;
var cars = []

var car1_image, car2_image, car3_image, car4_image, track_image;

function preload() 
{
    car1_image = loadImage("images/car1.png")
    car2_image = loadImage("images/car2.png")
    car3_image = loadImage("images/car3.png")
    car4_image = loadImage("images/car4.png")

    track_image = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth, displayHeight);
   
    database=firebase.database();
    //ballrefence=database.ref("ball/position")
    //ballrefence.on("value",readPosition);
    game1 = new game();
    game1.getGameState();
    game1.startGame();
} 

function draw(){
    background("white");
    if (playerCount===4) 
    {
     game1.update(1)
    }
    if (gameState===1)
    {
     clear();
     game1.play();
    }

    if (gameState===2)
    {
      game1.end();
    }
    
}