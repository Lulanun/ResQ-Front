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
const roles = [
  {
    idRol :1 , 
    Desripcion:"Administrador" 
  },
  {
    idRol :2 , 
    Desripcion:"Operador" 
  }
];
const usuarios = [
  {
  idUsuario: 1,
  nombre: "Lourdes",
  apellido: "Nunes" ,
  mail: "lula@resq.com",
  contra: "",
  idRol:1
},
{
  idUsuario: 2,
  nombre: "Agustin",
  apellido: "Bruno" ,
  mail: "agus@resq.com",
  contra: "",
  idRol: 1
},
{
  idUsuario:3,
  nombre: "Malena",
  apellido: "Chiuzzo" ,
  mail: "male@resq.com",
  contra: "",
  idRol: 2
},
{
  idUsuario: 4,
  nombre: "Jimena",
  apellido: "Perez" ,
  mail: "jime@resq.com",
  contra: "",
  idRol: 2
}
];

const situaciones = 
[
  {
    idSituacion: 1,
    nombreInformador: "María Elena",
    apellidoInformador: "Pérez",
    telefonoInformador: 1130859845,
    nombreMenor: "Facundo Lopez",
    fechaNacimiento: "2017-06-10",
    edad: 8,
    calle: "Muñoz",
    altura: "503",
    codigoPostal: "1663",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Niña de 8 años encontrada sola. Menor en situación de abandono. Encontrada en la vía pública. Falta al colegio ",
    fechaCarga:"2025-03-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 1,
    idUsuario: 0
  },
    {
    idSituacion: 2,
    nombreInformador: "María Elena",
    apellidoInformador: "Pérez",
    telefonoInformador: 1130859845,
    nombreMenor: "Maite Dominguez",
    fechaNacimiento: "2017-06-10",
    edad: 14,
    calle: "Serano",
    altura: "3009",
    codigoPostal: "1663",
    nombreEntidad: "Escuela Secundaria N15",
    comentarios: "Niña de 8 años encontrada sola. Menor en situación de abandono. Encontrada en la vía pública. Falta al colegio ",
    fechaCarga:"2025-03-12",
    idEntidad: 1,
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
    fechaNacimiento: "2017-06-10",
    edad: 8,
    calle: "Mitre",
    altura: "50",
    codigoPostal: "1663",
    nombreEntidad: "Escuela Primaria N4",
    comentarios: "Niña de 8 años encontrada sola. Menor en situación de abandono. Encontrada en la vía pública. Falta al colegio ",
    fechaCarga:"2025-03-12",
    idEntidad: 1,
    idEstado: 1,
    idPrioridad: 3,
    idUsuario: 0
  }

];
          


//ALGO ASI TENGO QUE HACER CON LAS ASIGNACIONES PENSAR LOGICA PRIMERO.

function imprimirSituacionesEnHTML(situaciones) {
  	const contenedor = document.getElementById("Situaciones");
for (const situacion of situaciones) {
		const table = document.createElement("table");
    table.innerHTML = `<table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre menor</th>
              <th scope="col">Edad del menor</th>
              <th scope="col">Direccion</th>
              <th scope="col">Nombre Entidad</th>
            </tr>
            <tr>
              <th scope="row">${situacion.nombreMenor}</th>
              <td>${situacion.edad}</td>
              <td>${situacion.calle}  ${situacion.altura}</td>
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
  
  situacionActual.idUsuario = usuarioSeleccionado
  
  localStorage.setItem('situaciones', JSON.stringify(situaciones))

  const modalElement = document.getElementById('modalAsignar')
  const modalInstance = bootstrap.Modal.getInstance(modalElement)
  modalInstance.hide()
  
  const contenedorSituaciones = document.getElementById("Situaciones")
  contenedorSituaciones.innerHTML = ""
  imprimirSituacionesEnHTML(situaciones)
})


imprimirSituacionesEnHTML(situaciones)
//USAR MAP PARA BUSCAR SITUACIONES POR USUARIOS

//USAR FILTER? PARA MOSTRAR SITUACIONES POR USUARIO? O POR ESTADO 
//CONTEO DE SITUACIONES SEGUN EL ESTADO EN EL QUE SE ENCUENTRAN Y SEGUN PRIORIDAD. VER COMO ESCUPI PO PANTALLA

const conteoEstado = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idEstado] = (conteo[situacion.idEstado] || 0) + 1;
    return conteo;
}, {});

console.log(conteoEstado);

const conteoPrioridades = situaciones.reduce(function(conteo, situacion) {
    conteo[situacion.idPrioridad] = (conteo[situacion.idPrioridad] || 0) + 1;
    return conteo;
}, {});
console.log(conteoPrioridades);

