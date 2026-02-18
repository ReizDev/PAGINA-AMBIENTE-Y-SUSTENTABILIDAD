// Mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente ✅");
});

// Confirmación al enviar archivo
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tu archivo ha sido enviado correctamente 🌍");
  });
}

// Animación suave al hacer clic en los menús
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  link.addEventListener("click", () => {
    document.body.style.transition = "background 1s ease";
    document.body.style.background = "linear-gradient(to right, #e0f7fa, #f1f8e9)";
    setTimeout(() => {
      document.body.style.background = "linear-gradient(to right, #f1f8e9, #e3f2fd)";
    }, 1000);
  });
});

// Botón scroll-to-top
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Volver arriba";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#388e3c";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.padding = "10px";
scrollBtn.style.borderRadius = "5px";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

