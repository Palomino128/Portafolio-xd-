// Mostrar modal de bienvenida al cargar la página
function mostrarBienvenida() {
  var modal = document.getElementById("modal-bienvenida");
  modal.style.display = "block";
}

// Cerrar el modal de bienvenida
function cerrarModal() {
  var modal = document.getElementById("modal-bienvenida");
  modal.style.display = "none";
}

// Validar formulario de contacto (versión básica)
function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;

  // Eliminar espacios manualmente
  nombre = nombre.replace(/^\s+|\s+$/g, "");
  correo = correo.replace(/^\s+|\s+$/g, "");
  mensaje = mensaje.replace(/^\s+|\s+$/g, "");

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (correo.indexOf("@") === -1 || correo.indexOf(".") === -1) {
    alert("Por favor, ingresa un correo válido.");
    return false;
  }

  alert("Formulario enviado correctamente.");
  return true;
}

// Menú hamburguesa
function toggleMenu() {
  var nav = document.querySelector(".nav ul");
  if (nav.className.indexOf("show") === -1) {
    nav.className += " show";
  } else {
    nav.className = nav.className.replace(" show", "");
  }
}

