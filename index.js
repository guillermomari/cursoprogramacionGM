/*
armar un sistema que utilizando
el metodo promt, ingresen los nombres
de 3 personas y luego se guarden en 3
variables. Al finalizar 
Mostrar por consola.. 

console.log()
promt()
let, const, var







*/
// RESOLUCION

/*
const nombre1 = prompt("Nombre")
const nombre2 = prompt("Nombre2")
const nombre3 = prompt("Nombre3")

console.log(nombre1, nombre2, nombre3)
*/
/*

INGRESAR 1 NUMERO, Y SI EL NUMERO 
INGRESADO ES MAYOR QUE 4
DEVOLVER UN MENSAJE POR CONSOLA QUE DIGA: ES MAYOR
SINO LO ES , DEVOLVER OTRO QUE DIGA ES MENOR

herramientas: if, else, prompt, parseInt

*/
//RESOLUCION

/*const numer1 = parseInt(prompt('Numero'));

if(numer1 > 4){
    console.log('Es mayor')
}
else{
    console.log('Es menor')
}*/

/**
 * Ingresar 4 numeros. Guardar dicho numeros 
 * en una variable de 
 * tipo array ( con el metodo push)
 * luego recorrer el array (map, for, for of) y 
 * para cada elemento que sea mayor a 3 mostrar
 * el mensaje El elemento "" es mayor a 3
 */

// metodo push del array. ciclo for y el for of.

// RESOLUCION

/*
let array = [];

array.push (parseInt(prompt("ingrese un numero")))
array.push (parseInt(prompt("ingrese un numero")))
array.push (parseInt(prompt("ingrese un numero")))
console.log(array)

let primera = array[0]

console.log('Esta es la primera',primera)
*/

/*
Crear una clase iMC que permita 
obtener en su constructor
datos de peso y altura de cada paciente
y un metodo que calcule el IMC (peso/h*h)
luego instanciar un objeto de dicha clase
y ejecutar el metodo con un peso y una altura

*/

// class , new class,
// propiedades, metodos, clave: valor
// constructor
//palabra reservada this

/*
class IMC {
    constructor (peso, altura){
        this.peso = peso;
        this.altura = altura;
    }
    calculo(){

        let pesogr = parseInt(this.peso)*1000;
        let cuadrado = parseInt(this.altura)*parseInt(this.altura);
        let result = pesogr/cuadrado
        console.log("En IMC de la persona es " ,result);
        
    }
}


let peso = parseInt(prompt("Ingrese el Peso"));
let altura = parseInt(prompt("Ingrse la Altura en cm"));
let persona = new IMC(parseInt(peso),parseInt(altura));

persona.calculo()
console.log(persona.peso)
*/





