const cuadrado = function(x)
{
    return x * x; 
}
let numero = 4;
console.log(cuadrado(numero));


const ruido = function()
{
    console.log("katraplum!");
}
ruido();


const exponencial = function (base, exponente)
{
    let resultado = 1;   
    for(let i =0; i < exponente; i++)
    {
       resultado *= base;        
    }
    
    return resultado;
}

console.log(exponencial(2, 10));


console.log(sumar(2,2));
function sumar(x, y)
{
    return x + y;
}


const restar = (a, b) => 
{
    return a - b;
}
console.log(restar(4 , 2))

function saludar(quien)
{
    console.log("Hola " + quien);    
}

saludar("Explorer");
console.log("Bey");

function preguntaDireccion(pregunta)
{
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Direccion invalida: " + result);
}

function mirar() 
{
    if (preguntaDireccion("A que lado?") == "I")
    {
        return "una casa";
    }
    else
    {
        return "2 osos hambrientos";
    }
}

try
{
    console.log("Mirar a ", mirar());
}
catch (error)
{
    console.log("Something went wrong: " + error);    
}