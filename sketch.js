var dog,dogImg, dogImg2;
var database;
var food=20,foodStock;
var button1,button2;
var lastFed;
var milk,milkPic;

function preload()
{
	dogImg=loadImage("dogImg.png");
  dogImg2=loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800,500);

  dog = createSprite(600,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  button1 = createButton('Add Food');
  button2 = createButton('Feed Mr.Doggie');
  button1.position(375,75);
  button2.position(375,110);  

  milk=new Food();
 
}


function draw() {  

  background("green");

 button1.mousePressed(function(){
  writeStock(food);
  food=food+1
  dog.addImage(dogImg);
 })

 button2.mousePressed(function(){
  writeStock(food);
  food=food-1;
  dog.addImage(dogImg2);

 })

  textSize(40);
  fill("white");
  stroke(2);
  text("Food Remaining:"+food,200,100);

  milk.display();

  console.log(food);
  drawSprites();


}

function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
