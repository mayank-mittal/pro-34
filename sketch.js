const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var backgroundpic,engine,world;
var hero,rope,ground;
var building1,monster;

function preload() {
//preload the images here
backgroundpic=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1540, 750);
  // create sprites here
 engine=Engine.create();
 world=engine.world;

 hero = new SuperHero(250,250,350,200);
 rope=new FlyRope(hero.body,{x:300,y:200});
 ground=new Ground(800,650,1600,30);
 monster=new Monster(1250,450,200,200);

 // first building
 building1=new blocks(700,450,50,60);
 building2=new blocks(700,420,70,30);
 building3=new blocks(700,400,50,60);
 building4=new blocks(700,380,70,30);
 building5=new blocks(700,360,50,60);
 building6=new blocks(700,340,70,30);
 building7=new blocks(700,320,50,60);
 building8=new blocks(700,300,70,30);

 // second building
 building9=new blocks(800,450,60,50);
 building10=new blocks(800,430,60,50);
 building11=new blocks(800,410,60,50);
 building12=new blocks(800,390,60,50);
 building13=new blocks(800,370,60,50);
 building14=new blocks(800,350,60,50);
 building15=new blocks(800,330,60,50);
 building16=new blocks(800,310,60,50);
 building17=new blocks(800,300,30,50);
 building18=new blocks(800,280,30,30);

 // third building
 building19=new blocks(900,450,60,60);
 building20=new blocks(900,430,60,60);
 building21=new blocks(900,410,60,60);
 building22=new blocks(900,390,60,60);
 building23=new blocks(900,370,60,60);
 building24=new blocks(900,350,60,60);
 building25=new blocks(900,330,60,60);
 building26=new blocks(900,310,60,60);

}

function draw() {
  Engine.update(engine);
  background(backgroundpic);
  fill("black")
  textSize(30)
  text("Drag the superhero and kill the monster",500,50);

  ground.display();
  rope.display();
  hero.display();
  monster.display();
  fill("red")
  building1.display();
  building3.display();
  building5.display();
  building7.display();
  fill("yellow")
  building2.display();
  building4.display();
  building6.display();
  building8.display();
  fill("green")
  building9.display();
  building11.display();
  building13.display();
  building15.display();
  building17.display();
  fill("lightpink")
  building10.display();
  building12.display();
  building14.display();
  building16.display();
  building18.display();
fill("orange");
building19.display();
building20.display();
building22.display();
building23.display();
building25.display();
building26.display();
fill("blue");
building21.display();
building24.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

