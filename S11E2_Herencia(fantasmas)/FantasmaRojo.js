class FantasmaRojo extends Fantasmas{ //extiende de la clase padre
    constructor(x, y,dir,r,g,b) {
        super(x,y,dir,r,g,b);//mismas variables presentes contructor de la clase padre
    }

    especial() {
        if (frameCount % 90 == 0) {
            this.cambiarDeDireccion();
        }
    }

    cambiarDeDireccion() {
        this.dir = int(random(4));
    }
    mover() {
        switch (this.dir) {
            case 0:
                this.y--;
                break;
            case 1:
                this.y++;
                break;
            case 2:
                this.x++;
                break;
            case 3:
                this.x--;
                break;
        }
    this.especial();
    }
}