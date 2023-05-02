const libro1 = {
  titulo: "Caraval",
  autor: "Stephanie Garber",
  precio: "USD " + 25,
  paginas: 432,
  genero: "Fantasía",
};

const libro2 = {
  titulo: "Asylum",
  autor: "Madeleine Roux",
  precio: "USD " + 22,
  paginas: 336,
  genero: "Terror",
};

const libro3 = {
  titulo: "Anna And The French Kiss",
  autor: "Stephanie Perkins",
  precio: "USD " + 13,
  paginas: 400,
  genero: "Romance",
};

const libro4 = {
  titulo: "The Paris Apartment",
  autor: "Lucy Foley",
  precio: "USD " + 55,
  paginas: 512,
  genero: "Misterio",
};

const libro5 = {
  titulo: "Renegados",
  autor: "Marissa Meyer",
  precio: "USD " + 22,
  paginas: 584,
  genero: "Ciencia Ficción",
};

const libro6 = {
  titulo: "Los Juegos Del Hambre",
  autor: "Suzanne Collins",
  precio: "USD " + 27,
  paginas: 374,
  genero: "Ciencia Ficción",
};

const libro7 = {
  titulo: "Escrito en el agua",
  autor: "Paula Hawkins",
  precio: "USD " + 12,
  paginas: 560,
  genero: "Misterio",
};

const libro8 = {
  titulo: "Confess",
  autor: "Colleen Hoover",
  precio: "USD " + 20,
  paginas: 320,
  genero: "Romance",
};

const libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8];

const form = document.querySelector(".search-bar");
const resultados = document.querySelector(".busqueda-resultados");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = form.querySelector("input");
  const busqueda = input.value.trim().toLowerCase();

  const libroEncontrado = libros.find((libro) =>
    libro.titulo.toLowerCase().includes(busqueda)
  );

  if (libroEncontrado) {
    resultados.innerHTML = `
      <div class="resultado">
        <h3>${libroEncontrado.titulo}</h3>
        <p>Autor: ${libroEncontrado.autor}</p>
        <p>Precio: ${libroEncontrado.precio}</p>
        <p>Páginas: ${libroEncontrado.paginas}</p>
        <p>Género: ${libroEncontrado.genero}</p>
      </div>
    `;
    resultados.style.display = "block";
  } else {
    resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    resultados.style.display = "block";
  }
});
