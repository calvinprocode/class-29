class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visiblity = 0-255 , 0 = not at all visible/transparent
    //visiblity = 255 = it is totally visible /opaque 
    //0 and 1 11111111 , 00000000
    
    this.Visiblity = 255; // pig is visible intially

  }
   display() {
   console.log(this.body.speed);
    

    if (this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body)
      push();
      this.Visiblity = this.Visiblity - 5; //every time reduce transparency by 5
      tint(255, this.Visiblity); //update the transparency of the body
      
      image(this.image, this.body.x, this.body.y, 50,50);
      pop();
    }

      

 
  }

}
