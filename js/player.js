class player{
    constructor()
 {
  this.name= "";
  this.distance= 0;
  this.index=null
 }

    getPlayerCount(){
    var playerrefence=database.ref("playerCount");
    playerrefence.on("value",function(data){playerCount=data.val()})
    }
    
    update(){
    var playerindex="players/player" + this.index
    database.ref(playerindex).set({name:this.name,distance:this.distance})
    }
    
    updateCount(count)
    {
    database.ref("/").update({playerCount : count})
    }

    static getPlayerInfo()
    {
     var playerrefence=database.ref("players") ;
     playerrefence.on("value",function(data){allPlayers=data.val()})
    }
}

