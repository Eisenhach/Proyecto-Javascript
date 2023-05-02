//-----------cambiar icono-----------

function cambiarIcono(id) {
  let icono = document.getElementById(id).querySelector("i");
  if (icono.classList.contains("fa-regular")) {
    icono.classList.remove("fa-regular");
    icono.classList.add("fa-solid");
  } else {
    icono.classList.remove("fa-solid");
    icono.classList.add("fa-regular");
  }
}

