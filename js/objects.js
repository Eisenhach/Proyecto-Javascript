const libros = [
  {
    titulo: "Caraval",
    autor: "Stephanie Garber",
    precio: "USD 25",
    paginas: 432,
    genero: "Fantasía",
  },
  {
    titulo: "Asylum",
    autor: "Madeleine Roux",
    precio: "USD 22",
    paginas: 336,
    genero: "Terror",
  },
  {
    titulo: "Anna And The French Kiss",
    autor: "Stephanie Perkins",
    precio: "USD 13",
    paginas: 400,
    genero: "Romance",
  },
  {
    titulo: "The Paris Apartment",
    autor: "Lucy Foley",
    precio: "USD 55",
    paginas: 512,
    genero: "Misterio",
  },
  {
    titulo: "Renegados",
    autor: "Marissa Meyer",
    precio: "USD 22",
    paginas: 584,
    genero: "Ciencia Ficción",
  },
  {
    titulo: "Los Juegos Del Hambre",
    autor: "Suzanne Collins",
    precio: "USD 27",
    paginas: 374,
    genero: "Ciencia Ficción",
  },
  {
    titulo: "Escrito en el agua",
    autor: "Paula Hawkins",
    precio: "USD 12",
    paginas: 560,
    genero: "Misterio",
  },
  {
    titulo: "Confess",
    autor: "Colleen Hoover",
    precio: "USD 20",
    paginas: 320,
    genero: "Romance",
  },
];

const form = document.querySelector(".search-bar");
const resultados = document.querySelector(".busqueda-resultados");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = form.querySelector("input");
  const busqueda = input.value.trim().toLowerCase();

  const librosEncontrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda)
  );

  if (librosEncontrados.length > 0) {
    resultados.innerHTML = "";

    librosEncontrados.forEach((libroEncontrado) => {
      const resultado = document.createElement("div");
      resultado.classList.add("resultado");
      resultado.innerHTML = `
        <h3>${libroEncontrado.titulo}</h3>
        <p>Autor: ${libroEncontrado.autor}</p>
        <p>Precio: ${libroEncontrado.precio}</p>
        <p>Páginas: ${libroEncontrado.paginas}</p>
        <p>Género: ${libroEncontrado.genero}</p>
      `;
      resultados.appendChild(resultado);
    });

    resultados.style.display = "block";
  } else {
    resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    resultados.style.display = "block";
  }
});
