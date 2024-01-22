let primerValor;
let segundoValor;

primerValor = prompt("Ingresa el primer valor");
segundoValor = prompt("Ingresa el segundo valor");

if(primerValor > segundoValor){
    console.log(`${segundoValor} es menor que ${primerValor}.`);
} else {
    console.log(`${primerValor} es menor que ${segundoValor}.`);
}