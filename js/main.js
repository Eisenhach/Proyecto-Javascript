//-------------Boton de ver mas y ver menos ------------

// Selecciona el botón "ver más"
const verMasBtn = document.querySelector(".ver-mas");

// Selecciona el botón "ver menos"
const verMenosBtn = document.querySelector(".ver-menos");

// Selecciona la parte oculta de la descripción
const descripcionAdicional = document.querySelector(".oculto");

// Agrega un evento click al botón "ver más"
verMasBtn.addEventListener("click", () => {
  // Cambia el estilo CSS de la parte oculta para que se muestre
  descripcionAdicional.style.display = "block";

  // Oculta el botón "ver más" después de mostrar la descripción completa
  verMasBtn.style.display = "none";

  // Muestra el botón "ver menos"
  verMenosBtn.style.display = "block";
});

// Agrega un evento click al botón "ver menos"
verMenosBtn.addEventListener("click", () => {
  // Cambia el estilo CSS de la parte oculta para que se oculte de nuevo
  descripcionAdicional.style.display = "none";

  // Oculta el botón "ver menos"
  verMenosBtn.style.display = "none";

  // Muestra el botón "ver más" de nuevo
  verMasBtn.style.display = "block";
});

// Esconde el botón "ver menos" al cargar la página
verMenosBtn.style.display = "none";

// ----------- botones ver mas y ver menos #2 ---------

const verMasBtn2 = document.querySelector(".ver-mas-2");

const verMenosBtn2 = document.querySelector(".ver-menos-2");

const descripcionAdicional2 = document.querySelector(".oculto-2");

verMasBtn2.addEventListener("click", () => {
  descripcionAdicional2.style.display = "block";

  verMasBtn2.style.display = "none";

  verMenosBtn2.style.display = "block";
});

verMenosBtn2.addEventListener("click", () => {
  descripcionAdicional2.style.display = "none";

  verMenosBtn2.style.display = "none";

  verMasBtn2.style.display = "block";
});

verMenosBtn2.style.display = "none";

// ------- botones para ver mas y menos #3 -----------
const verMasBtn3 = document.querySelector(".ver-mas-3");
const verMenosBtn3 = document.querySelector(".ver-menos-3");
const descripcionAdicional3 = document.querySelector(".oculto-3");

verMasBtn3.addEventListener("click", () => {
  descripcionAdicional3.style.display = "block";

  verMasBtn3.style.display = "none";

  verMenosBtn3.style.display = "block";
});

verMenosBtn3.addEventListener("click", () => {
  descripcionAdicional3.style.display = "none";

  verMenosBtn3.style.display = "none";

  verMasBtn3.style.display = "block";
});

verMenosBtn3.style.display = "none";

// ------- botones para ver mas y menos #4 -----------
const verMasBtn4 = document.querySelector(".ver-mas-4");
const verMenosBtn4 = document.querySelector(".ver-menos-4");
const descripcionAdicional4 = document.querySelector(".oculto-4");

verMasBtn4.addEventListener("click", () => {
  descripcionAdicional4.style.display = "block";

  verMasBtn4.style.display = "none";

  verMenosBtn4.style.display = "block";
});

verMenosBtn4.addEventListener("click", () => {
  descripcionAdicional4.style.display = "none";

  verMenosBtn4.style.display = "none";

  verMasBtn4.style.display = "block";
});

verMenosBtn4.style.display = "none";


// ------- botones para ver mas y menos #5 -----------
const verMasBtn5 = document.querySelector(".ver-mas-5");
const verMenosBtn5 = document.querySelector(".ver-menos-5");
const descripcionAdicional5 = document.querySelector(".oculto-5");

verMasBtn5.addEventListener("click", () => {
  descripcionAdicional5.style.display = "block";

  verMasBtn5.style.display = "none";

  verMenosBtn5.style.display = "block";
});

verMenosBtn5.addEventListener("click", () => {
  descripcionAdicional5.style.display = "none";

  verMenosBtn5.style.display = "none";

  verMasBtn5.style.display = "block";
});

verMenosBtn5.style.display = "none";


// ------- botones para ver mas y menos #6 -----------
const verMasBtn6 = document.querySelector(".ver-mas-6");
const verMenosBtn6 = document.querySelector(".ver-menos-6");
const descripcionAdicional6 = document.querySelector(".oculto-6");

verMasBtn6.addEventListener("click", () => {
  descripcionAdicional6.style.display = "block";

  verMasBtn6.style.display = "none";

  verMenosBtn6.style.display = "block";
});

verMenosBtn6.addEventListener("click", () => {
  descripcionAdicional6.style.display = "none";

  verMenosBtn6.style.display = "none";

  verMasBtn6.style.display = "block";
});

verMenosBtn6.style.display = "none";


// ------- botones para ver mas y menos #7 -----------
const verMasBtn7 = document.querySelector(".ver-mas-7");
const verMenosBtn7 = document.querySelector(".ver-menos-7");
const descripcionAdicional7 = document.querySelector(".oculto-7");

verMasBtn7.addEventListener("click", () => {
  descripcionAdicional7.style.display = "block";

  verMasBtn7.style.display = "none";

  verMenosBtn7.style.display = "block";
});

verMenosBtn7.addEventListener("click", () => {
  descripcionAdicional7.style.display = "none";

  verMenosBtn7.style.display = "none";

  verMasBtn7.style.display = "block";
});

verMenosBtn7.style.display = "none";



// ------- botones para ver mas y menos #8 -----------
const verMasBtn8 = document.querySelector(".ver-mas-8");
const verMenosBtn8 = document.querySelector(".ver-menos-8");
const descripcionAdicional8 = document.querySelector(".oculto-8");

verMasBtn8.addEventListener("click", () => {
  descripcionAdicional8.style.display = "block";

  verMasBtn8.style.display = "none";

  verMenosBtn8.style.display = "block";
});

verMenosBtn8.addEventListener("click", () => {
  descripcionAdicional8.style.display = "none";

  verMenosBtn8.style.display = "none";

  verMasBtn8.style.display = "block";
});

verMenosBtn8.style.display = "none";