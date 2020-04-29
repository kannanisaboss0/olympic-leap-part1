class Form{
    constructor(){
        this.Title=createElement('h1');
        this.SubTitle=createElement('h2');
        this.Top=createElement('h3')

    }
    display(){
        if(gameState===0){
            this.Title.html("OlympicLeap");
            this.SubTitle.html("Welcome to the final of the olympics 2054. You are waiting for the other player to come");
            this.Title.position(100,200);
            this.SubTitile.position(200,200)
            playerCount+=1;
            
        }
        if(playerCount===2){
            this.Top.createElement("OhOh!The game is about to start, first one to fall down loses!");
            this.Top.position(0,100);
            gameState===2;
            player.show();
            player.index=playerCount

        }
    }
}