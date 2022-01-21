// ASINCRONISMO - Async Await  y Callbacks





// EJERCICIOS PRACTICOS DE ASINCRONIAS

/**
 * Crear una funcion asincronica que ejecute 
 * 2 metodos de un objeto de manera sincronica 
 * dentro de su argumento 
 * 
 */
/*
class persona {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
        
    }
    caminar(){
        console.log("esta caminando");
    }
    moverlacabeza(){
        console.log("esta moviendo la cabeza");
    }
}
let user = new persona("juan", 33, "paraladepecho");
async function levantarse() {
    console.log(user.name + " Esta levantado");
    await user.caminar();
    await user.moverlacabeza();
}
levantarse()
*/


/***
 * A partir de una funcion asincronica 
 * ejectur un prompt que ingrese numeros (3 casos)
 * Luego una vez ejecutada la funcion sincronica que ingresa 
 * dichos numeros, guardarlos en un array y mostrarlos
 * con otra funcion asinconrica( await ) que se encargue 
 * de hacer el console log de cada elemento ingresado al array
 * 
 * 
 */

/*
async function function1 (){
    let arrayprueba= []
    for (let i = 0; i < 3; i++) {
       let a =(parseInt(prompt('Ingrese numero')))
       arrayprueba.push(a)
    }

   await fucntion2(arrayprueba)
  
}

function fucntion2(array){
    for (const i of array) {
        console.log(i)
    }
}

function1()
*/
