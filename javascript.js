function ejercicio1(num) {
    if (num%2==0) {
        console.log("el numero es par");
    } else {
        console.log("el numero es impar")
    }
}

function ejercicio2(num1, num2){
    if (num1==num2) {
        console.log("los numeros son iguales")
    } else if (num1>num2) {
        console.log("el numero 1 es mayor al numero 2")
    } else{
        console.log("el numero 2 es mayor al numero 1")
    }
}

function ejercicio3(num) {
    if (num%5==0) {
        console.log("el numero es multiplo de 5");
    } else {
        console.log("el numero no es multiplo de 5")
    }
}

function ejercicio4(num){
    for (i=0; num>=i ; i++) {
        console.log(i);
    }
}

function ejercicio5(palabra, num) {
    for (var i = 1; num >= i; i++) {
        console.log(palabra);
    }
}

function ejercicio6(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(arr[i]);
    }
}

function ejercicio7(array) {
    for (var i = 0; i < array.length; i++) {
        if (array.length==10){
            if (i !== 4) { 
                console.log(array[i]);
            }
        }else{
            break;
        }
        
    }
}
function ejercicio8(array, multiplicador) {
    for (var i = 0; i < array.length; i++) {
        var resultado = array[i] * multiplicador;
        console.log(resultado);
    }
}



