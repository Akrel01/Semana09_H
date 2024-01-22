
let nota;

nota = prompt("Ingrese una calificacion");

let resultado =""
 

if(nota > 10 || nota < 1){
    console.error("Colocar una nota entre 1 y 10")
}

if(nota < 6 && nota >= 1){
    
    resultado += "reprobado";
}

if(nota <= 8 && nota >= 6){
    resultado += "Regular";
}

if(nota == 9){
    resultado += "Bien"
}

if(nota == 10){
    resultado += "Excelente"
}

console.log(resultado);





 

