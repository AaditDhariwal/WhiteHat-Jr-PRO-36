class Food{
 constructor(){

    this.image = loadImage("Milk.png");
 }


display(){
    var x, y=100;

    imageMode(CENTER);
    image(this.image,300,300,50,50)

    if(food !== 0){
     
      for(var i=0; i<food; i++){
         if(i%10==0){
            x=50
            y=y+100;
        }
       image(this.image,x,y,75,75);
       x=x+50;
      }

    }
}

}