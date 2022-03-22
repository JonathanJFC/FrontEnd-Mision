console.log("/n********** Variables *********\n")
var numero1 = 4;
var numero2 = 2;

console.log("Numero 1: " +numero1 + " Numero 2: " + numero2);

console.log("/n********** Cadenas *********\n")
var frase1 = "Ejemplo Comillas Dobles";
var frase2 = 'Ejemplo Comillas simples';
var frase3 = `Ejemplo Comillas ${numero2} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3 );

console.log("/n********** Condicionales *********\n")

console.log(numero1 > numero2);

console.log("/n********** Operador logico AND *********\n")
console.log(true && false);

console.log("/n********** Operador logico OR *********\n")
console.log(true || false);

console.log("/n********** Arreglos *********\n")
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[0]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


let ListaDePalabras = ["Explorer", "MisionComander", "Launchx", "Innovacion"];
console.log(ListaDePalabras);
console.log(ListaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


console.log("/n********** Objetos *********\n")
let Explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg:12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],    
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(Explorer);
console.log(Explorer.email);
console.log(Explorer.proPer.escolar);



/*Flujo condicional*/
console.log("/n********** Flujo condicional *********\n")
let number1 =4;
let number2 = 2;
console.log("\n********* if / else ********\n");
if (number1 > number2 && number2 > 5)
{
    console.log("El numero 1 es mayor que numero 2");
}
else if (number1 == number2 || number1 < 3)
{
    console.log("Los numeros son iguales");
}
else
{
    console.log("El numero 2 es mayor que numero 1");
}

/*Ciclo condicional*/
console.log("/n********** ciclo condicional *********\n")
let numberWhile = 0;
while (numberWhile <= 12)
{
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio del while "+ numberWhile)


/*Ciclo condicional de una iteracion minimo*/
console.log("/n********** Do While *********\n")
let numeroDoWhile = 10;
do{
    numeroDoWhile = numeroDoWhile + 2 ;
    console.log(numeroDoWhile);    
} while (numeroDoWhile < 20);
console.log("Aqui ya salio del Do While "+ numeroDoWhile)

/*Ciclo for de una iteracion controlada*/
console.log("/n********** for *********\n")
let numeroFor = 0;
for ( numeroFor; numeroFor <= 12; numeroFor = numeroFor + 2)
{
    console.log(numeroFor);
}
console.log("Aqui ya salio del For "+ numeroFor);


/*Opciones para evitar anidar condicionales*/
console.log("/n********** Switch *********\n")
switch (prompt("?Como esta el clima?"))
{
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("ponte bloqueador");
        break;
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Aqui ya salimos del; switch ");