let fanVerde=new FantasmaVerde(300,100,0,0,255,0)
let fanAmarillo=new FantasmaAmarillo(100,100,1,255,255,0)
let fanRojo=new FantasmaRojo(200,100,1,255,0,0)

//let fan=new Fantasmas(200,100,1,255,0,0) 
//prueba de error 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 

  fanVerde.mostrar()
 fanVerde.mover()

  fanAmarillo.mostrar()
 fanAmarillo.mover()
 
  fanRojo.mostrar()
  fanRojo.mover()

}
