// // ejercicio 1

// let miArray = [12, 5, 80, "string"]

// function longitudArray(arr) {
//     return arr[arr.length -1];
// }

// alert(longitudArray(miArray));

// ejercicio 2

// let miArray = [14, 6, 76, 3]

// function longitudArray(arr) {
//     return arr[0];
// }

// alert(longitudArray(miArray));

// ejercicio 3

let miArray = [14, 6, 76, 3];
let num = 6;
let arr2 = [];

function operacion(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
        arr2.push (arr[i])
    }
    arr2.push (numero);
}

operacion(miArray, num);

alert(arr2);