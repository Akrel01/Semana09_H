var array = [5,1,8,6,3];

var newArray =[];

for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
}

console.log(newArray);
