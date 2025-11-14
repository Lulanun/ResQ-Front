//FUNCIONES PARA nuevaSituacion

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
]

const fechaCargaInput = document.getElementById("fechaCarga");
fechaCargaInput.value = new Date().toISOString().split("T")[0];

let situaciones = JSON.parse(localStorage.getItem("NuevasSituaciones")) || [];
let guardadas = JSON.parse(localStorage.getItem("Asignadas")) || [];
let sinAsignar = JSON.parse(localStorage.getItem("NoAsignadas")) || [];


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