//Arrays
// .push añade uno o mas elementos al FINAL
//.poop elimina el ultimo elemento
//shift elimina el primer valor 
//unshift añade un valor al PRINCIPIO
//indexOf e includes para buscar un valor en el array
//IndexOf el primero que encuentra y el Incluedes es true o false 
//.join Coloca un string entre medio de los elementos del array
//for.of es para recorrer el array (NO SE USA EL FOR Y EL .LENGTH)
// Array de usuarios

let usuarios = [];
let contrasenias=[];
let usuario
let pass
let menu
const intentos = 3;


while (menu !== "3") {
        menu = prompt("Bienvenid@s a Res Q! \nSeleccione una opcion: \n\n1 - QUIERO INICIAR SESION \n2 - QUIERO REGISTRARME \n3 - SALIR")
        switch(menu){
        case "1":
            console.log("El usuario selecciono la opcion " + menu+ "\nINICIAR SESION")
            login()
        break
        case "2":
                console.log("El usuario selecciono la opcion " + menu+ "\nREGISTRASE")
        registrarUsuario(usuario, pass)
        break;
        case "3":
                console.log("El usuario selecciono la opcion " + menu+ "\nSALIR")
                confirm("Hasta Luego!")
                console.log("Salida del sistema")
            break
        default:
            alert("INGRESE UN VALOR VALIDO \n 1, 2 o 3")
            console.log("Error: opcion invalida - " + menu )
        break
        }
    }


function login() {
    let intentosRestantes = intentos
    let loginExitoso = false

    while (intentosRestantes > 0 && !loginExitoso) {
        usuario = prompt("INICIO DE SESION \nIngrese nombre de usuario \nIntentos restantes: " + intentosRestantes)
        if (usuario === null) {
            alert("Login cancelado")
        }
        pass = prompt("Ingrese su contraseña")
        if (pass === null) {
            alert("Login cancelado")
        }

        console.log("Validando log in del usuario: " + usuario)
        const posicion = buscarSiExiste(usuario)

        if (posicion === -1) {
            alert("El usuario ingresado no pertenece a un usuario registrado.")
            console.log("Usuario inexistente")
            return
        } 
        
        if (contrasenias[posicion] === pass) {
            bienvenida(usuario)
            console.log("El usuario " + usuario + " inició sesión exitosamente.")
            loginExitoso = true
        } else {
            intentosRestantes--
            alert("Error en la contraseña, intente nuevamente")
            console.log("Contraseña incorrecta")
        }

        if (!loginExitoso && intentosRestantes === 0) {
            alert("Se agotaron los " + intentos + " intentos. Sistema bloqueado.")
            console.log("Sistema bloqueado por intentos fallidos")
        }
    }
}

function buscarSiExiste(usuario) {
    return usuarios.indexOf(usuario)
}

function registrarUsuario(){
    console.log("Registrando nuevo usuario")
    usuario = prompt("CREAR NUEVO USUARIO \nIngrese nombre de usuario")
    if (usuario === "" || usuario === null) {
        alert("Ingrese valores validos")
    } 
    else if(buscarSiExiste(usuario)!==-1) 
    {
        alert("El nombre de usuario  " + usuario + " ya se encuentra registrado. Ingrese un nuevo nombre de usuario")
    }
    console.log("Nombre de usuario: "+ usuario)
    pass =prompt("CREAR NUEVO USUARIO \nIngrese una contraseña. \nAl menos 5 caracteres")

    if (pass === "" || pass === null) {
        alert("La contraseña no puede ser nula. Intente nuevamente")
    } else if (pass.length <5 ) {
        console.log(pass.length)
        alert("La contraseña no cumple con la longitud. Intente nuevamente")
            
    }
    confirm("Registro exitoso! Bienvenido al sistema " + usuario)
        usuarios.push(usuario)
        contrasenias.push(pass)
        console.log("Usuario registrado exitosamente!")
        console.log("Lista de usuarios: "+usuarios)
    }
    function bienvenida(usuario){
        confirm("Bienvenid@ al sistema ResQ " + usuario + "! \nPronto actualizaremos el sitio")
        console.log("El usuario " + usuario + "inicio sesion correctamente.")
    }

