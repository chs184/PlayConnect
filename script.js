document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Cambiar header en scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Crear partido y agregar a reservas
  const formPartido = document.getElementById("formPartido");
  const reservas = document.getElementById("misReservas");

  if (formPartido && reservas) {
    formPartido.addEventListener("submit", (e) => {
      e.preventDefault();
      const deporte = document.getElementById("deporte").value;
      const fecha = document.getElementById("fecha").value;
      const lugar = document.getElementById("lugar").value;

      if (deporte && fecha && lugar) {
        const li = document.createElement("li");
        li.textContent = `${fecha} - ${deporte} en ${lugar}`;
        reservas.appendChild(li);
        formPartido.reset();
      } else {
        alert("Por favor completa todos los campos");
      }
    });
  }

  // Buscador dinámico
  const buscador = document.getElementById("buscador");
  const listaPartidos = document.getElementById("listaPartidos");

  if (buscador && listaPartidos) {
    buscador.addEventListener("input", () => {
      const filtro = buscador.value.toLowerCase();
      Array.from(listaPartidos.getElementsByTagName("li")).forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(filtro) ? "" : "none";
      });
    });
  }
});


// ==== CARRUSEL ====
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  const total = document.querySelectorAll(".slides .contenedor").length;
  index = (i + total) % total; // bucle infinito
  slides.style.transform = `translateX(-${index * 100}%)`;
}

if (prevBtn && nextBtn && slides) {
  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Pase automático cada 5s
  setInterval(() => showSlide(index + 1), 5000);
}



