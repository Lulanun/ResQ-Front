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

/*No esta en uso aun 
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
Contadores- usar en alguna funcion.
const conteoEstado = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idEstado] = (conteo[situacion.idEstado] || 0) + 1;
    return conteo;
}, {});

const conteoPrioridades = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idPrioridad] = (conteo[situacion.idPrioridad] || 0) + 1;
    return conteo;
}, {});
 */

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
    nombreEntidad: "Hospital San Miguel",
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
    nombreEntidad: "Merendero Familia",
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
    fechaNacimiento: "2010-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Hospital San Miguel",
    comentarios: "Ideación suicida.",
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
    fechaNacimiento: "2018-05-07",
    direccion: "Mitre 50",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Víctima de bullying / ciberacoso.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  }
  ,
  {
    idSituacion: 6,
    nombreInformador: "Milagros",
    apellidoInformador: "Enriquez",
    nombreMenor: "Ines Gutierrez",
    fechaNacimiento: "2013-05-07",
    direccion: "Gaspar Campos 1895",
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
    nombreInformador: "Alfonso",
    apellidoInformador: "Horten",
    nombreMenor: "Tomas Ferro",
    fechaNacimiento: "2019-05-07",
    direccion: "Anchorena 5250",
    nombreEntidad: "Merendero Familia",
    comentarios: "Ambiente hostil/violento en el hogar.",
    fechaCarga:"2023-07-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  }

];

let guardadas = JSON.parse(localStorage.getItem("Asignadas")) || [];
let sinAsignar = JSON.parse(localStorage.getItem("NoAsignadas")) || [];
let nuevas = JSON.parse(localStorage.getItem("NuevasSituaciones")) || [];

if (sinAsignar.length > 0) {
    situaciones = sinAsignar;
} else {
    situaciones 
}
situaciones = situaciones.concat(nuevas)
situaciones = situaciones.filter(situacion => !guardadas.some(guardada => parseInt(guardada.idSituacion) === parseInt(situacion.idSituacion)))

  
//FUNCIONES PARA index.html
function calcularEdades(fechaNacimiento){
const fechaNac = new Date(fechaNacimiento)
const añoActual = new Date()
let edad = añoActual.getFullYear() - fechaNac.getFullYear()
return edad;
}

function imprimirSituacionesEnHTML(situaciones) {
const noAsignadas = situaciones.filter(situacion => parseInt(situacion.idUsuario) === 0)
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

function mostrarAsignadas(guardadas){

const contenedor = document.getElementById("SituacionesAsignadas");
  contenedor.innerHTML = "";
for (const situacion of guardadas) {
const edadSituacion = calcularEdades(situacion.fechaNacimiento)
const responsable = usuarios.find(usuairo => usuairo.idUsuario === parseInt(situacion.idUsuario));

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
function puedeAsignarse(idUsuario) {
idUsuario = parseInt(idUsuario);
const cantidad = guardadas.reduce((total, situacion) => {
  if (parseInt(situacion.idUsuario) === idUsuario) {
            total++;
  }
  return total;
  }, 0)

    return cantidad < 3;
}
function AsignarSituacion(situacion){
situacionActual = situacion;
const contenedor = document.getElementById("selectUsuarios");
contenedor.innerHTML = ""
for (const usuario of usuarios) {
  const menu = document.createElement("option")
  menu.value = usuario.idUsuario
  menu.innerHTML = `${usuario.idUsuario}-${usuario.nombre} ${usuario.apellido}`

if (!puedeAsignarse(parseInt(usuario.idUsuario))) {
  menu.disabled = true;
  menu.style.color = "gray";
  menu.innerHTML +="(Maximo alcanzado)"
}
contenedor.appendChild(menu)
}
}
const botonBorrar = document.getElementById("btnBorrarAsignadas")
botonBorrar.addEventListener("click", () => {
  for (const situacion of guardadas) {
        situacion.idUsuario = 0;  //
    }
situaciones = situaciones.concat(guardadas);
guardadas = [];
localStorage.clear()
document.getElementById("SituacionesSinAsignar").innerHTML = "";
document.getElementById("SituacionesAsignadas").innerHTML = "";
imprimirSituacionesEnHTML(situaciones);  
mostrarAsignadas(guardadas);
})

const botonConfirmar = document.getElementById("btnConfirmarAsignacion")
botonConfirmar.addEventListener("click", () => {
const select = document.getElementById("selectUsuarios")
const usuarioSeleccionado = select.value

situacionActual.idUsuario = parseInt(usuarioSeleccionado)
guardadas.push(situacionActual)


situaciones = situaciones.filter(situacion => parseInt(situacion.idSituacion) !== parseInt(situacionActual.idSituacion))
localStorage.setItem('Asignadas', JSON.stringify(guardadas))
localStorage.setItem('NoAsignadas', JSON.stringify(situaciones)) 

const sinAsignar = document.getElementById("SituacionesSinAsignar")
sinAsignar.innerHTML = ""

const asignadas = document.getElementById("SituacionesAsignadas")
asignadas.innerHTML = ""
imprimirSituacionesEnHTML(situaciones);
mostrarAsignadas(guardadas);
})

imprimirSituacionesEnHTML(situaciones);
mostrarAsignadas(guardadas);



