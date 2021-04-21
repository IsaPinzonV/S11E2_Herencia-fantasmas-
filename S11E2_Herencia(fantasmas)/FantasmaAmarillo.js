class FantasmaAmarillo extends Fantasmas{//extiende de la clase padre
    constructor(x, y,dir,r,g,b){
        super(x,y,dir,r,g,b);//mismas variables presentes contructor de la clase padre
    }

    especial(){
        this.saltar();
    }

    saltar(){
        if(this.y>400){
            this.y = 0; 
        }
    }
    mover(){
        if(this.dir === 1){            
            this.y++;
        }
    }
}