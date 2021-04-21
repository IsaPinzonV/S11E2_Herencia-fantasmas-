class Fantasmas{
    constructor(x,y,dir,r,g,b){
        this.x = x;
        this.y = y;
        this.r= r;
        this.g=g;
        this.b=b;
        this.dir = dir;

        if(new.target === Fantasmas){            
          //window.stop()
          throw new Error("Sorry, this class should not be instantiated");            
      }
}
  mostrar(){
    fill(this.r,this.g,this.b);
    rectMode(CENTER);
    rect(this.x, this.y, 50, 50);
    rectMode(CORNER); 
    this.especial();       
}
especial(){}
mover(){}
}