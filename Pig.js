class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //make the pig completely visible at first(visibility is always between 0-255)
    //0=1 fully off byte(8 bits)=0000 0000=completely invisible
    //1=1 fully on byte(8 bits)=1111 1111=completely visible
    this.Visibility=255;
  }
  display(){
    
    console.log(this.body.speed);
    //if the speed of the pig is less than 3 display it, else gradually make the pig vanish
    if (this.body.speed<3) {
      super.display();
    } else {
      World.remove(world,this.body)
      //push and pop so that chanf=ges do not apply to the entire game
      push();
      this.Visibility=this.Visibility-5
      //tint creates vanishing effect,adds a transperent layer to the image
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop();
    }
  }
};