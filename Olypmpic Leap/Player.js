class Player{
    constructor(){
        this.distance=0;
        this.name=null;
        this.index=null
    }
   getCount(){
       var PlayerRef=db.ref('PlayerCount');
       PlayerRef.on("value",(data)=>{
           playerCount=data.val();
       })}
    updateCount(count){
        db.ref('/').update({
            playerCount:count
        });
    }
     show(){
         var playerIndex='players/player'+this.index;
         db.ref(playerIndex).set({
         name:this.name,
         distance:this.distance

        })
     }  
    static getPlayerInfo(){
        var playerInfoRef=db.ref('players')
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
           
       
    }    
       
   
