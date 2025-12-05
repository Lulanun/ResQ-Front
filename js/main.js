
const URL = "./db/data.json"
let situaciones = []
let usuarios = []
let guardadas =[];
let sinAsignar = [];
let nuevas = [];



function obtenerUsuarios(){
fetch(URL)
.then(response => response.json())
.then(data =>{
usuarios =data.Usuarios
situaciones = data.Situaciones

guardadas = JSON.parse(localStorage.getItem("Asignadas")) || [];
sinAsignar = JSON.parse(localStorage.getItem("NoAsignadas")) || [];
nuevas = JSON.parse(localStorage.getItem("NuevasSituaciones")) || [];


if (sinAsignar.length > 0) {
    situaciones = sinAsignar;
} else {
    situaciones 
}
situaciones = situaciones.concat(nuevas)
situaciones = situaciones.filter(situacion => !guardadas.some(guardada => parseInt(guardada.idSituacion) === parseInt(situacion.idSituacion)))

imprimirSituacionesEnHTML(situaciones);
mostrarAsignadas(guardadas);
})
.catch(error =>
Swal.fire({
      icon: 'error',
      title: 'Error al cargar datos',
      text: 'No se pudieron cargar las situaciones. Por favor, recargá la página.'
    })
    )
}
  
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
  Swal.fire({
  title: "Estas seguro?",
  text: "Se borraran todas las asignaciones de la sesion. \nEsta accion no se puede revertir!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, borrar todo!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Borrado!",
      text: "Las asignaciones fueron borradas. No hay situaciones asignadas",
      icon: "success"
    });
  }
});
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
document.getElementById("btnConfirmarAsignacion").addEventListener("click", ()=>{
Toastify({
text: "Situacion asignada correctamente",
duration: 2000,
position : "center",
}).showToast();
})

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

obtenerUsuarios() 



