/**
 Las FUNCIONES se declaran ANTES de ser llamadas.

-----------Arrays
.push añade uno o mas elementos al FINAL
.poop elimina el ultimo elemento
shift elimina el primer valor
unshift añade un valor al PRINCIPIO
indexOf e includes para buscar un valor en el array
IndexOf el primero que encuentra y el Incluedes es true o false
.join Coloca un string entre medio de los elementos del array
for.of es para recorrer el array (NO SE USA EL FOR Y EL .LENGTH)
localStorage: Almacena datos sin fecha de expiración. Los datos no se eliminarán cuando se cierre el navegador y estarán disponibles entre las sesiones de navegación.
sessionStorage: Almacena datos solo para una sesión de página. Los datos se eliminan cuando se cierra la pestaña o el navegador.


-----------DOM

getElementById(): acceder al elemento con el ID unico de html. 
Este método es ideal cuando se sabe con certeza que el elemento tiene un id único y se necesita acceder a él de manera directa.

getElementsByClassName(): obtener todos los elementos que tienen una clase específica.
Este método es útil cuando se necesita trabajar con múltiples elementos que comparten una misma clase, como cuando se aplican estilos o se realizan manipulaciones a un grupo de elementos.

(NO USAR)
getElementsByTagName():acceder a todos los elementos del DOM que tienen un nombre de etiqueta específico.
Este método es conveniente cuando se desea acceder a todos los elementos de un tipo particular, como todos los <div>, <p>, o <span> en un documento.

querySelector(): permite seleccionar el primer elemento del DOM que coincida con uno o más selectores CSS especificados. 

querySelectorAll(): devuelve una lista estática de todos los elementos que coinciden con los selectores CSS especificados.
La lista devuelta es de tipo NodeList, que puede ser iterada con métodos como forEach.

innerHTML: Este método permite leer o modificar el contenido HTML interno de un elemento. 
Se utiliza para actualizar todo el contenido de un nodo de una sola vez.

innerText / textContent: Permiten modificar el texto dentro de un nodo. 
innerText considera el estilo y el renderizado actual, mientras que textContent devuelve el contenido textual sin tener en cuenta el estilo.

setAttribute(): Se usa para modificar o establecer un nuevo atributo en un elemento.

createElement(): Este método permite crear un nuevo elemento en el DOM.

appendChild(): Añade un nodo como el último hijo de un nodo padre.

insertBefore(): Inserta un nodo antes de un nodo hijo específico.

removeChild(): Este método elimina un nodo hijo de un elemento.

remove(): Elimina directamente el nodo seleccionado.

*/
const asignadas = [];
let situacionActual = null;

const estados = [
  {
    idEstado: 1,
    nombre: "Sin asignar"
  },
    {
    idEstado: 2,
    nombre: "En progreso"
  },
    {
    idEstado: 3,
    nombre: "Demorado"
  },
    {
    idEstado: 4,
    nombre: "Terminado"
  }
];
const prioridades = [
  {
    idPrioridad:1,
    nombre:"Alta",
    color:"Rojo"
  },  {
    idPrioridad:2,
    nombre:"Media",
    color:"Amarillo"
  },
    {
    idPrioridad:3,
    nombre:"Baja",
    color:"Verde"
  }

];
const entidades = [
  {
    idEntidad: 1,
    nombre:"Escuela N 4",
    direccion:"Av. Primera Junta 1108, San Miguel",
    mail:"escuelacuatro@gmail.com",
    telefono:"44552266"
  },  
  {
    idEntidad: 2,
    nombre:"Hospital San Miguel",
    direccion:"Av. Primera Junta 1025, San Miguel",
    mail:"hospital@gmail.com",
    telefono:"44550000"
  },
  {
    idEntidad: 3,
    nombre:"Merendero familia",
    direccion:"Av.Mitre 489, San Miguel",
    mail:"merendero@gmail.com",
    telefono:"44552244"
  }

];

const usuarios = [
  {
  idUsuario: 1,
  nombre: "Lourdes",
  apellido: "Nunes" ,
  mail: "lula@resq.com",
  contra: "AdminLula",
  idRol:"Administrador"
},
{
  idUsuario: 2,
  nombre: "Agustin",
  apellido: "Bruno" ,
  mail: "agus@resq.com",
  contra: "AdminAgus",
  idRol: "Administrador"
},
{
  idUsuario:3,
  nombre: "Malena",
  apellido: "Chiuzzo" ,
  mail: "male@resq.com",
  contra: "123",
  idRol: "Operador"
},
{
  idUsuario: 4,
  nombre: "Jimena",
  apellido: "Perez" ,
  mail: "jime@resq.com",
  contra: "321",
  idRol: "Operador"
}
];

let situaciones = 
[
  {
    idSituacion: 1,
    nombreInformador: "María Elena",
    apellidoInformador: "Pérez",
    telefonoInformador: 1130859845,
    nombreMenor: "Facundo Lopez",
    fechaNacimiento: "2017-06-10",
    direccion: "Muñoz 503",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Niña de 8 años encontrada sola. Menor en situación de abandono. Encontrada en la vía pública. Falta al colegio ",
    fechaCarga:"2024-03-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 1,
    idUsuario: 0
  },
    {
    idSituacion: 2,
    nombreInformador: "Elena",
    apellidoInformador: "Miller",
    telefonoInformador: 1130859845,
    nombreMenor: "Maite Dominguez",
    fechaNacimiento: "2011-06-10",
    direccion: "Serano 3009",
    nombreEntidad: "Hospital",
    comentarios: "Problemas con el consumo de estupefacientes.",
    fechaCarga:"2017-11-12",
    idEntidad: 2,
    idEstado: 1,
    idPrioridad: 2,
    idUsuario: 0
  },
  {
    idSituacion: 3,
    nombreInformador: "Hector",
    apellidoInformador: "Paz",
    telefonoInformador: 1130859845,
    nombreMenor: " Francisco Gutierrez",
    fechaNacimiento: "2015-03-25",
    direccion: "Blasco Ibañez 2353",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Niña de 8 años encontrada sola. Menor en situación de abandono. Encontrada en la vía pública. Falta al colegio ",
    fechaCarga:"2025-03-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  },
  {
    idSituacion: 4,
    nombreInformador: "Macarena",
    apellidoInformador: "Lago",
    nombreMenor: "Maia Gines",
    fechaNacimiento: "2013-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Necesidad de realizar algún deporte actividad física/artística en un entorno inclusivo.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  },
  {
    idSituacion: 5,
    nombreInformador: "Macarena",
    apellidoInformador: "Lago",
    nombreMenor: "Nicolas Franco",
    fechaNacimiento: "2013-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Necesidad de realizar algún deporte actividad física/artística en un entorno inclusivo.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  }
  ,
  {
    idSituacion: 6,
    nombreInformador: "Macarena",
    apellidoInformador: "Lago",
    nombreMenor: "Ines Gutierrez",
    fechaNacimiento: "2013-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Necesidad de realizar algún deporte actividad física/artística en un entorno inclusivo.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  },
  {
    idSituacion: 7,
    nombreInformador: "Macarena",
    apellidoInformador: "Lago",
    nombreMenor: "Tomas Ferro",
    fechaNacimiento: "2013-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Necesidad de realizar algún deporte actividad física/artística en un entorno inclusivo.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  }

];


//FUNCIONES PARA Login - PENSAR Y COMPLETAR UN BUEN LOGIN

    
//FUNCIONES PARA index.html

function calcularEdades(fechaNacimiento){
const fechaNac = new Date(fechaNacimiento)
const añoActual = new Date()
let edad = añoActual.getFullYear() - fechaNac.getFullYear()
return edad;
}


function imprimirSituacionesEnHTML(situaciones) {

const noAsignadas = situaciones.filter(situacion => situacion.idUsuario === 0)
const contenedor = document.getElementById("SituacionesSinAsignar");
for (const situacion of noAsignadas) {
  const edadSituacion = calcularEdades(situacion.fechaNacimiento)
	const table = document.createElement("table");
    table.innerHTML = `
    <table class="table">
      <thead>
            <tr>
              <th scope="col">Nombre menor</th>
              <th scope="col">Edad del menor</th>
              <th scope="col">Comentarios</th>
              <th scope="col">Direccion</th>
              <th scope="col">Nombre Entidad</th>
            </tr>
            <tr>
              <th scope="row">${situacion.nombreMenor}</th>
              <td>${edadSituacion} años</td>
              <td>${situacion.comentarios}</td>
              <td>${situacion.direccion}</td>
              <td>${situacion.nombreEntidad}</td>
              <button id="${situacion.nombreMenor}${situacion.idSituacion}"data-bs-toggle="modal" data-bs-target="#modalAsignar">Asignar</button>
            </tr>
      </thead>
    </table>`			
          contenedor.appendChild(table)
          const boton = document.getElementById(`${situacion.nombreMenor}${situacion.idSituacion}`)
          boton.addEventListener("click", () => AsignarSituacion(situacion) )
  }
}

function mostrarAsignadas(situaciones){
const asignadas = situaciones.filter(situacion => situacion.idUsuario != 0)
const contenedor = document.getElementById("SituacionesAsignadas");
for (const situacion of asignadas) {
const edadSituacion = calcularEdades(situacion.fechaNacimiento)
const responsable = usuarios.find(u => u.idUsuario === parseInt(situacion.idUsuario));

		const table = document.createElement("table");
    table.innerHTML = `
    <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre menor</th>
              <th scope="col">Edad del menor</th>
              <th scope="col">Comentarios</th>
              <th scope="col">Direccion</th>
              <th scope="col">Nombre Entidad</th>
              <th scope="col">Usuario a cargo</th>
            </tr>
            <tr>
              <th scope="row">${situacion.nombreMenor}</th>
              <td>${edadSituacion} Años</td>
              <td>${situacion.comentarios}</td>
              <td>${situacion.direccion}</td>
              <td>${situacion.nombreEntidad}</td>
              <td>${situacion.idUsuario} - ${responsable.nombre} ${responsable.apellido}</td>
            </tr>
          </thead>
          </table>`			
          contenedor.appendChild(table)
}
}

function AsignarSituacion(situacion){
//MOSTRAR USUARIOS DISPONIBLES PARA ASIGNAR LA SITUACION.

  //Esto llama al modal y se alimenta con el array de USUARIOS.
  //Aca llamo al localstorage y tambien muestro que usuario tiene casos asignados
situacionActual = situacion;
const contenedor = document.getElementById("selectUsuarios");
contenedor.innerHTML = ""
for (const usuario of usuarios) {
      const menu = document.createElement("option")
      menu.value = usuario.idUsuario
      menu.innerHTML = `${usuario.idUsuario}-${usuario.nombre} ${usuario.apellido}`
      contenedor.appendChild(menu)
}
}
const botonConfirmar = document.getElementById("btnConfirmarAsignacion")
botonConfirmar.addEventListener("click", () => {
const select = document.getElementById("selectUsuarios")
const usuarioSeleccionado = select.value
situacionActual.idUsuario = parseInt(usuarioSeleccionado)
localStorage.setItem('situaciones', JSON.stringify(situaciones))
const sinAsignar = document.getElementById("SituacionesSinAsignar")
sinAsignar.innerHTML = ""

  const asignadas = document.getElementById("SituacionesAsignadas")
  asignadas.innerHTML = ""
  imprimirSituacionesEnHTML(situaciones);
  mostrarAsignadas(situaciones);
})

let situacionesGuardadas = JSON.parse(localStorage.getItem('situaciones'));

if (situacionesGuardadas != null) {
    situaciones = situacionesGuardadas;   
} else {
    situaciones = situaciones; 
}
imprimirSituacionesEnHTML(situaciones);
mostrarAsignadas(situaciones);


const conteoEstado = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idEstado] = (conteo[situacion.idEstado] || 0) + 1;
    return conteo;
}, {});



const conteoPrioridades = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idPrioridad] = (conteo[situacion.idPrioridad] || 0) + 1;
    return conteo;
}, {});


//puedeasignarse()

//FUNCIONES PARA nuevaSituacion
//const fechaCarga = document.getElementById("fechaCarga")
//const Hoy = new Date()
//fechaCarga.value = Hoy.toISOString().split('T')[0] 