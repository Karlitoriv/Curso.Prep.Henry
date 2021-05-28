// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  console.log("primer valor", array);
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log("ultimo valor",array);
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log("Largo del arreglo", array);
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++ ){
    array[i] = array[i] + 1;
    console.log("valores del array", array);
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //------------------------------------------------------------------//
  // para poder devolver la frase formada por la concatenación de los strings contenidos en el Array "palabras"
  // se declara otra variable (de tipo string a la que se le asignará el valor final).
  var frase = palabras[0]; 
  for ( var i = 1; i<palabras.length; i++){ //Para recorrer cada item dentro del Array ("palabras")
    frase = frase + ' ' + palabras[i]; //Se le asigna, a la variable auxiliar, el resultado solicitado
    console.log(frase);
   }
   return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++){
    if (array[i] === elemento){
      console.log("Valor del elemento", elemento);
      return true;
    }
  }  
    return false; 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for ( var i = 0; i < numeros.length; i++){
    suma = numeros[i] + suma;
  }
  console.log("Resultado de la suma", suma);
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = 0;
  prom = 0;
  for (var i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  } 
  prom = suma / i;
  console.log("Promedio es", prom);
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande =  numeros[0];
  for (var i = 1; i < numeros.length; i++){
    if (numeros[i] > grande){ 
      grande = numeros[i];
    }
  } 
  console.log("El número es", grande);
  return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var multip = 1; // variable auxiliar que mostrará el resultado pedido (producto de todos los argumentos).
  if (arguments.length === 0) return 0; //Comprobando que el Array tenga argumentos.
  if (arguments.length === 1) return arguments[0]; //Comprobar si el Array contiene solo un arumento.
  for (var i = 0; i < arguments.length; i++){ //Bucle para recorrer todos los items del Array.
    multip = multip * arguments[i]; // Asigna el result de la multiplicación de los argum. a la variable declarada.
    console.log("REsult Multiplicacion", multip); //Opcional: muestra por consola los resultados.
  }
  return multip; // devuelve el resultado final
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for ( var i = 0; i < arreglo.length; i++){
    if ( arreglo[i] > 18) cantidad++;
    }
    console.log("Cantidad es", cantidad);
    return cantidad;
  }
  

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
    
    //El parámetro de la función diaDeLaSemana es una variable. No es un array,
    //por lo que el ejerc. se resuelve simplemente con dos condiciones que evalúan los valores que toma la misma.
    
    if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
    if (numeroDeDia > 1 && numeroDeDia < 7) return "Es dia Laboral"; 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.  
  //Escribe tu código aquí:
  n = n + ''; // convierte el parámetro (n) en un string
  if (n[0] === '9') return true; // Al evaluar la condición, en este caso el n° 9 debe ser tratado como string,
  return false;                  // es decir que debe ser encerrado entre comillas.                               
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  for (var i = 1; i < arreglo.length; i++){ //Se inicializa 'i' a 1 y no a 0 ya que comenzará a compararse a
                                            // desde el item en la segunda posición en adelante.  
    if ( arreglo[0] === arreglo[i]) return true;
  }
  console.log(arreglo);
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for ( var i = 0; i < array.length; i++){
    if ( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      meses.push (array[i]);//En esta primera condición se recorre el array y si alguno de los strings coincide
    }                       //con el mes pedido, se agrega al nuevo arreglo mediante el método ".push"
  }
    if (meses.length < 3) return "No se encontraron los meses pedidos"; //Aquí se comprueba que el largo del array
    console.log("meses", meses);                                        //No exceda los elementos pedidos en la      
    return meses;                                                       //consigna(Puede haber encontrado un elemento  
}                                                                       //más de una vez)  


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let maycien = [];
  for ( var i = 0; i < array.length; i++){
    if (array[i] > 100){
      maycien.push(array[i]);
    }
  }
  console.log(maycien);
  return maycien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
  for (var i = 0; i < 10; i++){
  numero = numero + 2;
  if (numero !== i){
    array.push(numero);     
  } else {   
    array = "Se interrumpió la ejecución";
    break;
  }
}
  console.log("Resultado", array);
  return array;
}
  
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = [];
  for (var i = 0; i < 10; i++){
    if ( i === 5) continue;
    numero = numero + 2;
    array.push(numero);
  } 
    console.log ("Resultado", array);
    return array;
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
