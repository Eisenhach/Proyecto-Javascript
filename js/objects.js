const form = document.querySelector(".search-bar");
const resultados = document.querySelector(".busqueda-resultados");

// Cargar y utilizar los datos del archivo JSON
fetch('js/libros.json')
  .then(response => response.json())
  .then(data => {
    const libros = data; 

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

    // Storage

    // Guardar el array libros en el localStorage
    localStorage.setItem("libros", JSON.stringify(libros));

    // Obtener los libros almacenados del localStorage
    const librosGuardados = JSON.parse(localStorage.getItem("libros"));
    console.log(librosGuardados);
  })
  .catch(error => {
    console.error('Error al cargar los datos del archivo JSON:', error);
  });










