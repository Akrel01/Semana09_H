


let n;
n = prompt("Ingresa un numero");
 
function factorial(n){
    if(n === 0){
        return 1
    } else{
        return n * factorial(n-1)
    }
}

console.log(factorial(n));
