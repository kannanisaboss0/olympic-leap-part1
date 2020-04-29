class Game{
    constructor(){}
getState(){
  var GameRef=db.ref('gameState')
  GameRef.on("value",function(data){
    gameState=data.val();
  })
}
update(state){
  db.ref('/').update({
    gameState:state
  });
}
async start(){
    if (gameState===0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1=createSprite(200,200,13,14);
      player2=createSprite(200,210,34,0);
      players=[player1,player2];
  

    }


 play(){
   if(gameState===2){
     form.hide();
     player.getPlayerInfo();
   }

   if(allPlayers!==undefined){
     background("black")

     var index=0;
     var x=200
     var y;


  for(var plr in allPlayers){
    index=index+1;
    x=x+200;
    y=displayWidth-allPlayers[plr].distance;
    players[index-1].x;
    players[index-1].y
  }   

   }
   if(keyIsDown(UP_ARRROW)){
    player.distance+=10;
    player.show();
   }
 }   
}
