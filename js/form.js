class Form{
    constructor (){
        this.input= createInput("Name");
        this.greet= createElement ('h3');
        this.button= createButton("Submit");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }

    display(){
     var title= createElement ('h2');
     title.html("Car Racing Game"); 
     title.position(130, 0);

     this.input.position(130, 160);

     this.button.position(250, 200);

     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
         playerCount++;
         player.index= playerCount;
         player.name= this.input.value();
         player.update();
         player.updateCount(playerCount);
         this.greet.html("Welcome, "+ player.name);
         this.greet.position(130,150);
     });
    }
}