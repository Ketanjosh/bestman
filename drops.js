class Drops{
    constructor(x,y){
     this.rain=Bodies.circle(x,y,5)
     World.add(world,this.rain)
     
      }
    update(){
      
      if(this.rain.position.y >  height){
        Matter.Body.setPosition(this.rain, {x:random(0,400),y:0})
    }
  
  
      }
      display(){
      
      ellipse(this.rain.position.x,this.rain.position.y,10,10);
      }
  }