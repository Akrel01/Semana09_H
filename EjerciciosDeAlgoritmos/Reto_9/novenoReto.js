let typeToppin;

let helado = 50
typeToppin = prompt(`Elije entre los 3 diferentes toppings colocando el numero del topping:
                         1.-Topping de oreo.
                         2.-Topping de KitKat.
                         3.-Topping de brownie.
                         4.-Topping de fresas.`)






if(typeToppin == 1){
    console.log("El topping de oreo cuesta 10 MXN y sumado al helado es 60 MXM");
}        

if(typeToppin == 2){
    console.log("El topping de KitKat cuesta 15 MXN y sumado al helado es 65 MXM.");
}

if(typeToppin == 3){
    console.log("El topping de brownie cuesta 20 MXN y sumado al helado es 80 MXM.");
} else if(typeToppin == 4){
    console.log("No disponemos del topping indicado, el precio del helado es de 50MXM.")
}