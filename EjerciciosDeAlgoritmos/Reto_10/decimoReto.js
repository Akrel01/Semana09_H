

let cursoElegido;

cursoElegido = prompt(`Elige la opcion en que programa deseas matricularte: 
                                1.-Course
                                2.-Carrera
                                3.-Master                          `);



let tipoDeDesc;

tipoDeDesc = prompt(`Si usted tiene alguna de las siguientes becas, marcar la opcion 
         correspondiente:
                    1.-Beca Facebook
                    2.-Beca Google
                    3.-Beca Jesua   
                    4.-No tengo ni una beca     `);



//With Couse-------------------

if(cursoElegido == 1 && tipoDeDesc == 1){

    let Des = 4999 * 0.2
    var precioConDes = 4999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 1 && tipoDeDesc == 2){

    let Des = 4999 * 0.15
    var precioConDes = 4999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 1 && tipoDeDesc == 3){

    let Des = 4999 * 0.5
    var precioConDes = 4999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 1 && tipoDeDesc == 4){

    var precioConDes = 4999;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };
 

//With Carrera-----------------

if(cursoElegido == 2 && tipoDeDesc == 1){

    let Des = 3999 * 0.2
    var precioConDes = 3999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 2 && tipoDeDesc == 2){

    let Des = 3999 * 0.15
    var precioConDes = 3999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 }; 

 if(cursoElegido == 2 && tipoDeDesc == 3){

    let Des = 3999 * 0.5
    var precioConDes = 3999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 2 && tipoDeDesc == 4){

    var precioConDes = 3999;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

//With Master-------------
if(cursoElegido == 3 && tipoDeDesc == 1){

    let Des = 2999 * 0.2
    var precioConDes = 2999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

if(cursoElegido == 3 && tipoDeDesc == 2){

    let Des = 2999 * 0.15
    var precioConDes = 2999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 3 && tipoDeDesc == 3){

    let Des = 2999 * 0.5
    let precioConDes = 2999 - Des;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };

 if(cursoElegido == 3 && tipoDeDesc == 4){

    var precioConDes = 2999;
    Math.round(precioConDes)
    console.log(`Usted debera pagar  ${precioConDes} MXN mensual.`)
 };



//Total-----------------------------------------------

 if(cursoElegido == 1){
     let gastoT = precioConDes * 2
     console.log(`El total por el curso entero es de ${gastoT} MXM.`)
 }

 if(cursoElegido == 2){
     let gastoT = precioConDes * 6
     console.log(`El total por el curso entero es de ${gastoT} MXM.`)
 }

 if(cursoElegido == 3){
     let gastoT = precioConDes * 12
     console.log(`El total por el curso entero es de ${gastoT} MXM.`)
 }

 

