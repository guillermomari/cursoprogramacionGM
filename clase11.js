


//PROMISE 

/*
let promesa = new Promise((resolve, reject) => {
  try{
    let cuenta = 1+ 1
    if(cuenta=== 2){
      resolve()
      return {
        message: 'Todo biemn',
        status: 200
      }
    }
    else (cuenta === 3)
      reject()
    }
  catch(err){
    return  {
      message: 'Nabo le erraste',
      status: 400
    }
  }
  finally {
    console.log('Se termino el cuento')
  }
    

})
.then(() => {
  console.log('Se resolvio')

})
.catch(err => {
  console.log('no se resolvio')
})
*/


//EJERCICIOS CON API

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => 
    //length
    console.log(data[0], data[data.length-1]))


//1) Realizar por intermedio de un FETCH un mapeo de los datos recibidos
//y cargar dentro de un array el primer y el ultimo elemento que reciban.


//2 A partir del array con dichos objetos 

// seleccionar 5 propiedades del mismo y almacenarlas
// en un objeto local por intermedio de una class 
// dicha instancia de la clase debera tener
// como propiedades las propiedades extraidas
//y como valor, sus resultados 



//3 A raiz un array obtenido de la consulta a la API, buscar con un ciclo for
// nombres de los usuarios recibidos.
// luego, con un ciclo for, mostrar cada uno de los nombres
// dentro de una funcion sincrona, que se ejecutara como
// callback de la asyncrona (await)


// 4 Crear una promesa donde se llame a la API 
// y como resolucion de la llamada se trate el objeto 
// data como  resultado. Dicho data si tiene un length mayor a 10
// debera ejecutar un console.log que diga es mayor  y 
// resuelva la promesa
// en caso de se menor, la rechaze con un console que diga que es menor
