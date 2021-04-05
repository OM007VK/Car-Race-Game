class game{
    constructor()
    {}
getGameState()
{  
  var gamerefence=database.ref("gameState");
    gamerefence.on("value",function(data){gameState=data.val()})
}
update(state)
  {
   database.ref("/").update({gameState :state})

  }
startGame(){
   if (gameState===0) 
   {
    player1 = new player();
    player1.getPlayerCount();
    form1 = new form();
    form1.display();
    
    car1 = createSprite(100,200);
    car1.addImage(car1_image)
    car2 = createSprite(100,200);
    car2.addImage(car2_image)
    car3 = createSprite(100,200);
    car3.addImage(car3_image)
    car4 = createSprite(100,200);
    car4.addImage(car4_image)

    cars = [car1,car2,car3,car4]
   }

}
  play()
  {
    form1.hideForm()

    player.getPlayerInfo();
    if(allPlayers!==undefined)
    {
      background(rgb(198,135,103));
      image(track_image, 0,-height*4,width,5*height)
      var index = 0;
      var x = 200;
      var y = height;
  
     for (var plr in allPlayers) 
     {
      index = index +1;

      

      y = height - allPlayers[plr].distance;
      x = x+ 200;

      cars[index-1].x = x;
      cars[index-1].y = y;

        if(index === player1.index)
        {
          cars[index-1].shapeColor = "red";
          camera.position.x = width/2;
          camera.position.y = cars[index-1].y
        }
        
     }
    }

    if(keyIsDown(UP_ARROW) && player1.index !==null)
    {
      player1.distance = player1.distance + 50;
      player1.update();
      console.log(player1.distance)
    }
    if(player.distance > 3750){
      gameState = 2;
    }

    drawSprites();
  }

  end()
  {
   console.log("game ended")
   

  }
}