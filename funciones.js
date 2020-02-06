//Creá una función que se llame tripler que tome un número como input 
//(osea, como parametro) y retorne el triple de ese valor.
//Creá una función multiply que tome dos números como parámetros 
//y devuelva el producto de los dos.
//Creá una función divide que tome dos números como parámetros 
//y devuelva el resultado de dividir el primero por el segundo.
//Creá una función reminder que tome dos números como parámetros 
//y devuelva el resultado del módulo del primero sobre el segundo
//Usando solamente las funciones que escribieron arriba, y sin otros operadores, 



function tripler(num1) {
    return num1 * 3;
}


function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;

}

function reminder(num1, num2) {
    return num1 % num2;
}

reminder(divide(multiply(tripler(5), 12), 12), 3);//calculen el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y 
//encontrar el resto de dividir eso en 3.







//Crea una función esPar que tome un número como argumento y 
//devuelva true si es par o false si no lo es. 
//Acá tienes unos ejemplos para probar si tu código funciona

function esPar(num1) {

    return (num1 % 2 == 0) ? true : false  //if y el otro es un else,esto es un ternario
}


//En el tag script de un HTML, definí una nueva función llamada crearFrase.
//crearFrase debería seleccionar aleatoriamente entre dos o más opciones 
//de frases pre-establecidas y devolverla (return). Una buena forma es crear 
//un número aleatorio usando Math.randon() y evaluar: si ese número es mayor que cierto 
//valor, la frase es… Si es menor que cierto valor, entonces la frase seria… usando un if.
//Invocar crearFrase y guardar el valor retornado en una variable que se llame nuevaFrase
//Usa alert para mostrar la frase en pantalla.
//Refactoreá tu código para que no necesite la variable nuevaFrase
//Usá un while loop para correr crearFrase diez veces seguidas para ver si 
//realmente la selección de oraciones es aleatorio.


var nuevaFrase
var contador = 0

function CrearFrase() {
    var numero = Math.round(Math.random() * 10)

    return (numero <= 5) ? 'todo pasa por algo' : 'no es mi culpa'

}

nuevaFrase = CrearFrase()

alert(nuevaFrase)

while (contador <= 10) {
    console.log(CrearFrase());
    contador++

}


//Escribí una función llamada contarDeA_n que tenga los 
//parámetros contar_de_a y contar_hasta, y escriba en la consola los 
//números desde 1 hasta contar_hasta en intervalos de contar_de_a.
//Por ejemplo: si ponemos 2 y 10 como parámetros, la función debería 
//contar de a dos hasta llegar a diez.

var contador = 1

function contarDeA_n(contar_de_a, contar_hasta) {

    while (contador <= contar_hasta) {
        console.log(contador)
        contador += contar_de_a
    }

}
var x = Number(prompt('ingrese de cuanto en cuanto'))
var y = Number(prompt('ingrese hasta que numero'))

console.log(contarDeA_n(x, y))



//Escribe lo de abajo desde cero si puedes, 
//intenta no ayudarte con tu código anterior de fizzbuzz.
//Escribe una función fizzBuzz2 que tome dos strings como 
//argumento y reimplemente el fizzbuzz pero con esas dos palabras en vez de fizz y buzz. 
//(Escribir los número del 1 al 100. Para múltiplos de 3 escribir la palabra1, 
//para múltiplos de 3 escribir la palabra2, y para múltiplos de 3 y 5 la combinación de 
//ambas palabras)
//Haz que fizzBuzz2 devuelva un string con los números separados por comas.
//Mejora la función para que el usuario pueda ingresar un argumento contar_hasta
//Mejora la función para que el usuario pueda ingresar fizznum y buzznum 
//para que la sustitución de palabras ocurra en los números múltiplos de los nuevos
// argumentos de entrada, en vez de sólo 3 y 5.
//REVISAR

function fizzbuzz(string1, string2) {
        string1 = 'fizz'
        string2 = 'buzz'
        var x =1

    while (x <= 100) {

        if (x % 3 == 0) {
            return(string1)
        } else if (x % 5 == 0) {
            return(string2)
        } else (x % 3 == 0 && x % 5 == 0); {
            return(string1 + string2)
        }

        x++

    }
}

//Crea una función factorial que tome un número como argumento 
//y devuelva el factorial de ese número. Osea que si hacemos factorial(5)
//la función debería hacer 5x4x3x2x1, y devolver el resultado, osea 120. 
//Algo que tenés que tener en cuenta: el factorial de 0 es igual a 1, 
//osea que si el usuario ingresa factorial(0) el resultado debería ser 1.
//Algunos tips:
//Vas a necesitar hacer una variable para almacenar el resultado.
//Vas a necesitar hacer un loop para recorrer hasta el número que recibís como input.
//En cada vuelta del loop vas a tener que actualizar el resultado.
//Ojo con el caso en que el usuario pone 0, o un número negativo. 
//Vas a tener que hacer algo para verificar eso. Podés utilizar estos ejemplos para 
//ver si tu código funciona.


var x = Number(prompt('ingrese el numero para factorear'))

function factorial(x) {
    var y=1
    var r=1 //resultado


        while (y<=x){
            r*=y; //r=r*y 
            y++;
        }
return r;       
}



//Por definición, los dos primeros números de la serie de 
//Fibonacci son el 0 y el 1, los siguientes números de la serie son la 
//suma de los dos anteriores. Por ejemplo, los primeros diez números de la serie son:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//Escribí una función que acepte un número n y devuelva el n-ésimo 
//término de la serie de Fibonacci.

var x
var y=0
var sum=0

var x = Number(prompt('ingrese el numero para fibonacci'))

function fibonacci(x) {

    if (x<0){
        var x = Number(prompt('ingrese el numero para fibonacci')) 
    }else if (x==0) {
        return 0;
    }else if (x==1){
        return 1;
    }else{
        sum=fibonacci(x-1)+fibonacci(x-2);
    }
    return sum;
}



