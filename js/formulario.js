//FUNCIONES PARA nuevaSituacion

let entidades = []
const URL = "../db/data.json"
const fechaCargaInput = document.getElementById("fechaCarga");
fechaCargaInput.value = new Date().toISOString().split("T")[0];

let situaciones = JSON.parse(localStorage.getItem("NuevasSituaciones")) || [];
let guardadas = JSON.parse(localStorage.getItem("Asignadas")) || [];
let sinAsignar = JSON.parse(localStorage.getItem("NoAsignadas")) || [];

function obtenerEntidades(){
fetch(URL)
.then(response => response.json())
.then(data =>{
entidades =data.Entidades
inicializarFormulario() 
}).catch( error =>
Swal.fire({
    icon: 'error',
    title: 'Error al cargar datos',
    text: 'No se pudieron cargar los datos. Por favor, recargá la página.'
    })
    )
}

function obtenerNuevoId() {
    const todasLasSituaciones = situaciones.concat(guardadas, sinAsignar);
    
    let idMasAlto = 0;
    for (const situacion of todasLasSituaciones) {
        if (parseInt(situacion.idSituacion) > idMasAlto) {
            idMasAlto = situacion.idSituacion;
        }
    } 
    return idMasAlto + 1;
}
function inicializarFormulario() {
const contenedor = document.getElementById("selectEntidad");
contenedor.innerHTML = ""

for (const entidad of entidades) {
  const menu = document.createElement("option")
  menu.value = entidad.idEntidad
  menu.innerHTML = `${entidad.nombre}- ${entidad.direccion}`
  contenedor.appendChild(menu)
}

const form = document.getElementById("formNuevaSituacion");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreInformador = document.getElementById("nombreInformador").value;
    const apellidoInformador = document.getElementById("apellidoInformador").value;
    const nombreMenor = document.getElementById("nombreMenor").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const direccion = document.getElementById("direccion").value;
    const comentario = document.getElementById("comentario").value;
    const entidadId = parseInt(document.getElementById("selectEntidad").value);

    const entidad = entidades.find(e => e.idEntidad === entidadId);

const nuevaSituacion = {
        idSituacion: obtenerNuevoId(),
        nombreInformador,
        apellidoInformador,
        telefonoInformador: 0,
        nombreMenor,
        fechaNacimiento,
        direccion: direccion,
        nombreEntidad: entidad.nombre,
        comentarios: comentario,
        fechaCarga: fechaCargaInput.value,
        idEntidad: entidadId,
        idEstado: 1,
        idPrioridad: 2,
        idUsuario: 0
};

situaciones.push(nuevaSituacion);

localStorage.setItem("NuevasSituaciones", JSON.stringify(situaciones));
form.reset();
});
}

obtenerEntidades()
