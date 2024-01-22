let vehiculo;

vehiculo = prompt(`Escribe el número que coincida con el vehiculo:
                        1.-coche
                        2.-moto
                        3.-autobus                            `);

//----------------------

var kilometrosR;

kilometrosR = prompt(`Ingresa cuantos kilometros recorrio el vehiculo.`);

var litrosCon;

litrosCon = prompt("Escribe cuantos litros consumio el vehiculo");

//----------------------

//Calculo vehiculo 1:

if(vehiculo == 1 && litrosCon >= 0 && litrosCon <= 100){
     let resultado = kilometrosR * 0.20 + 5
     console.log(`El total a pagar es ${resultado}.`)
} 

if(vehiculo == 1 && litrosCon > 100){
    let resultadoCoche = kilometrosR * 0.20 + 10;
    console.log(`El total a pagar es ${resultadoCoche}`)
}

//Calculo vehiculo 2:

if(vehiculo == 2 && litrosCon >= 0 && litrosCon <= 100){
    let resultado = kilometrosR * 0.10 + 5
    console.log(`El total a pagar es ${resultado}.`)
}  

if(vehiculo == 2 && litrosCon > 100){
    let resultadoCoche = kilometrosR * 0.10 + 10;
    console.log(`El total a pagar es ${resultadoCoche}`)
}

//Calculo vehiculo 3:

if(vehiculo == 3 && litrosCon >= 0 && litrosCon <= 100){
    let resultado = kilometrosR * 0.50 + 5
    console.log(`El total a pagar es ${resultado}.`)
} 

if(vehiculo == 3 && litrosCon > 100){
    let resultadoCoche = kilometrosR * 0.50 + 10;
    console.log(`El total a pagar es ${resultadoCoche}`)
}