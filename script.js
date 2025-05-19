// script.js

document.addEventListener("DOMContentLoaded", () => {
    const botonesDetalles = document.querySelectorAll(".btn-ver-detalles");
  
    botonesDetalles.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // Aquí simulamos una navegación pasando datos por localStorage
        const grupo = {
          ciclo: "Enero-2025-Inglés",
          nivel: index === 0 ? "Basico1" : "Basico2",
          modalidad: index === 0 ? "Presencial" : "Virtual",
          horario: index === 0 ? "8am-10am" : "2pm-6pm",
          estudiantes: [
            {
              nombres: "Ana",
              apellidos: "López Díaz",
              email: "ana.lopez@idiomas.edu"
            },
            {
              nombres: "Carlos",
              apellidos: "Ramírez Vega",
              email: "carlos.ramirez@idiomas.edu"
            }
          ]
        };
  
        localStorage.setItem("grupoSeleccionado", JSON.stringify(grupo));
        window.location.href = "grupo.html";
      });
    });
  });
  