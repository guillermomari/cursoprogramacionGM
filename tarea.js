// RESOLUCION DE EJERCICIOS DE TAREA

//EJ 1

/*
let qtpersonas = parseInt(prompt("Ingrese cantidad"))
class Person {
    constructor(nombre,apellido,dni){
        nombre = this.nombre
        apellido = this.apellido
        dni = this.dni
    }
}

let arraydeUsuarios =[]

for (let i = 0; i < qtpersonas; i++) {
    let n1 = prompt("Ingrese Nombre");
    let n2 = prompt("Ingrese Apellido");
    let n3 = prompt("Ingrese Dni");

    const usuario = new Person()
    usuario.nombre = n1
    usuario.apellido = n2
    usuario.dni = n3

    arraydeUsuarios.push(usuario)


}

console.log(arraydeUsuarios[0].nombre);

*/
//Ej 2
/*
const prueba = ['a','b','z','j','r','t'];

let pruebaOrdenado = prueba.sort()

pruebaOrdenado.push(1,2,3,4,5)

let arraynuevo = []
pruebaOrdenado.map((x)=>{
    if(typeof(x) === 'number'){
        arraynuevo.push(x)
    }
})
console.log(arraynuevo)
*/


//Ej3
/*
let afiliado1 = parseInt(prompt('Ingrese numero de afiliado'));
let afiliado2 = parseInt(prompt('Ingrese numero de afiliado'));
let afiliado3 = parseInt(prompt('Ingrese numero de afiliado'));
let afiliado4 = parseInt(prompt('Ingrese numero de afiliado'));

const grupoafiliados = []

grupoafiliados.push(afiliado1, afiliado2, afiliado3, afiliado4)

grupoafiliados.sort((a,b)=>{
    if(a===b){
        return 0
    }

    if(a>b){
        return 1
    }

    if (a<b){
        return -1
    }
})

console.log('El afiliado mas antiguo es', grupoafiliados[0])
*/

//ej 4
/*
let botonElemento = document.getElementById('boton');

botonElemento.addEventListener('click', ()=>{
    console.log('Hola prueba')
})
*/

//Ej 5
/*
let numeros= [1,3,5,6,8,10,164,231]

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];

    if(element%2 === 0){
        console.log('Es par', element)
    }
    else{
        console.log('No es par', element)
    }
    
}*/


