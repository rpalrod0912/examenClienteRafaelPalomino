class Juego{
    contPerdidos=0;
    constructor(nombre,apellidos,nivel=1,puntuacion=1){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nivel=nivel;
        this.puntuacion=puntuacion;
    }

    sumarPuntuacion = ()=>{this.puntuacion+=1;
        if (this.puntuacion>=10){
            this.nivel+=1;
        }
    }

    restarPuntuacion= ()=>{this.puntuacion-=1;
        if (this.contPerdidos>=10){
            this.contPerdidos=0;
            this.nivel-=1;
        }
        if (this.puntuacion==0){
            this.resetearPuntuacion;
        }
    }

    resetearPuntuacion=()=>{this.puntuacion=1
    alert("El Jugador ha sido reseteado");
    }
}

let jug1= new Juego(nombre="Paco",apellidos="Gonzalez");
let jug2= new Juego(nombre="Juan",apellidos="Gonzalez");
jugadoresBase=[jug1,jug2];





/*let Juego={
    nombre:"",
    apellidos:"",
    nivel:1,
    puntuacion:1,
}
let jug1={
    nombre:"",
    apellidos:"",
    nivel:1,
    puntuacion:1,
}
jug1.nombre="Nacho";
jug1.apellidos="Vidal";
let jug2= {
    nombre:"",
    apellidos:"",
    nivel:1,
    puntuacion:1,
}
jug2.nombre="Juan";
jug2.apellidos="Rodríguez";
console.log(jug2);
jugPrecargados=[jug1,jug2];
console.log(jugPrecargados);

jug1.sumar= ()=>this.puntuacion ++;
console.log(jug1)
*/