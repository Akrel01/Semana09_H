
let primerV;
let segundoV;

primerV= prompt("Ingrese el primer valor");
segundoV=prompt("Ingrese el segundo valor");



for (let index = 50; index > 0; index--) {

   console.log(index)

   let resultados = index

   if(resultados == primerV){
    console.log(`${primerV} ¡Lotería!`)
   } else if(resultados == segundoV){
    console.log(`${segundoV} ¡Lotería!`)
   }
}
    






