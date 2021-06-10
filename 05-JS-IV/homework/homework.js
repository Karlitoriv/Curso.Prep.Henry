// No cambies los nombres de las funciones.


function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  let gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    } 
  }
  return gato;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado 
  // "property" (una cadena/string)
  // Tu código:
  //-----------------------------------
  //Aquí se utiliza la "Bracket Notation" ya que si usáramos la de Punto, estaríamos referenciando
  //una propiedad declarada dentro del objeto, y en este caso la propiedad es el parámetro "property" de la
  //función "agregarPropiedad"
  objeto[property] = null;
  return objeto;
}



function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  objeto[metodo](); //nuevamente usamos notación de brackets y paréntesis para invocar al método (función)
  console.log ("la propiedad es", objeto);
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var resul = 0;
  resul = objetoMisterioso.numeroMisterioso * 5;
  console.log ("El resultado es", resul);
  return resul;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad "unaPropiedad" de "objeto"
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  console.log("objeto:", objeto); // Muestro por consola cómo está compuesto el objeto.
  delete objeto[unaPropiedad]; // En este caso no se usan comillas ya que la propiedad es un parámetro.
  console.log('El objeto es:', objeto); // Muestro el objeto luego de borrar un parámetro.
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  let usuario = {
    nombre: nombre, 
    email: email,
    password: password,
  }
  console.log("usuario: ", usuario);
  return usuario;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario['email'] != null){
    console.log('El mail es: ', usuario['email']);
    return true;
  } return false;
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]){
    console.log('La propiedad es: ', propiedad);
    return true;
  }return false;
}


function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if ( usuario.password === password){
    return true;
  } 
  console.log('La passw es: ', password);
  return false;
  
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  console.log('nueva passw', nuevaPassword);
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  console.log('Array :', usuario.amigos);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0; i < usuarios.length; i++){
    usuarios[i].esPremium = true; //Aquí se accede a la estructura del arreglo mediante el índice [i]
  }                              //con lo cual ya se puede acceder a la propiedad indicada (por pto. o bracket)                     
    console.log('Usuarios es: ', usuarios);
    return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es 
  // un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" 
  // que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  //---------------------------------------------------
  /*
    usuario = {
      nombre: 'carlos',
      apellido: 'rivero,
      posts: [
        {
          fecha: 12-12-12,
          likes: 3,
        },
        {
          fecha: 11-11-11,
          likes: 6,
        }
        {
          fecha: 10-10-10,
          likes: 7,
        }
      ]
    } 
  */      

  var suma = 0;
  for ( i = 0; i < usuario.posts.length; i++){ // Mediante notación de pto. se accede a la prop "posts" y luego a la prop "length", es decir,
    suma = usuario.posts[i].likes + suma;     // se puede concatenar más de una propiedad.
  }
    console.log('La suma es: ', suma);
    return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" 
  // para obtener el descuento.
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
   producto.calcularPrecioDescuento = function() {
     var descuento = producto.precio * producto.porcentajeDeDescuento;
     console.log('El descuento es: ', descuento);
     return producto.precio - descuento;
   }
   console.log('el producto es:', producto);
   return producto;



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
