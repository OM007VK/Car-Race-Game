class form{
         constructor()
{
  this.title = createElement("h2");
  this.input=createInput("Name");
  this.button = createButton("PLAY")
  this.greeting = createElement("h3");
}        

hideForm()
{
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}

display(){

this.title.html("Car Racing Game");
this.title.position(width/2,0);

this.input.position(width/2,160);

this.button.position(width/2,200);

this.button.mousePressed(()=>
{
 this.input.hide();
 this.button.hide();

 var name = this.input.value()

 this.greeting.html("Hello " + name)
 this.greeting.position(130,160);
 
 playerCount = playerCount + 1;
 player1.index=playerCount;
 player1.name=name;
 player1.updateCount(playerCount);
 player1.update();
  })
 }
}

