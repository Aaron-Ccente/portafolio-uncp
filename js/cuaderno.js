const weeks = [
  {
    number: 1,
    title: "Semana 01",
    description: "Fundamentos de la Tecnología Web",
    image: "/assets/images/cuaderno/semana01/semana-01-actividad-02-img-01.png",
    tags: ["HTML", "Web", "Introducción", "CSS", "JS"],
  },
  {
    number: 2,
    title: "Semana 02",
    description: "Reto semana 2 | ELICITACIÓN Y ANÁLISIS DE REQUERIMIENTOS",
    image: "/assets/images/cuaderno/semana02/semana-02-actividad-01-img-01.png",
    tags: ["HTML", "Web", "Reto", "CSS", "JS", "Flex", "Grid", "requerimientos", "Grupo"],
  },
  {
    number: 3,
    title: "Semana 03",
    description: "Reto semana 3 | Práctica grupal usando Tailwindcss",
    image: "/assets/images/cuaderno/semana03/semana-03-actividad-01-img-01.png",
    tags: ["HTML", "Web", "Reto", "Tailwindcss", "Grupo", "GitHub"],
  },
  {
    number: 4,
    title: "Semana 04",
    description: "Reto semana 4 | Práctica grupal y tarea de laboratorio",
    image: "/assets/images/cuaderno/semana04/semana-04-actividad-01-img-01.png",
    tags: ["HTML", "Web", "Reto", "Tailwindcss", "Grupo", "GitHub", "SEO", "Performance"],
  },
  {
    number: 5,
    title: "Semana 05",
    description: "Creación de proyectos con Create React App, Vite y Next.js; práctica de React con CSR, JSX, Props y Children",
    image: "/assets/images/cuaderno/semana05/semana-05-actividad-02-img-01.png",
    tags: ["React", "CSR", "JSX", "Props", "Children", "Vite", "Next.js"],
  },
  {
    number: 6,
    title: "Semana 06",
    description: "Estructuras HTML con Props y Children; desarrollo de SPA con React, Vite y consumo de API",
    image: "/assets/images/cuaderno/semana06/semana-06-actividad-02-img-02.png",
    tags: ["React", "SPA", "Vite", "Props", "Children", "CSR", "API"],
  },
  {
    number: 7,
    title: "Semana 07",
    description: "Examen Parcial",
    image: "/assets/images/cuaderno/semana07/semana-07-actividad-01-img-01.png",
    tags: ["React", "SPA", "Vite", "Props", "Children", "CSR", "API"],
  },
  {
    number: 9,
    title: "Semana 09",
    description: "Formularios y procesamiento en PHP y JSP, sesiones, ciclo HTTP y seguridad web básica",
    image: "/assets/images/cuaderno/semana09/semana-09-actividad-01-img-01.png",
    tags: ["PHP", "JSP", "HTTP", "Sesiones", "Formularios", "Seguridad"],
  },
  {
    number: 10,
    title: "Semana 10",
    description: "POO con Python y desarrollo de una API REST de productos con Express y MySQL",
    image: "/assets/images/cuaderno/semana09/semana-10-actividad-01-img-02.png",
    tags: ["Python", "POO", "Node.js", "Express", "REST", "MySQL"],
  }
];

function createWeekCard(week) {
  const article = document.createElement("article");

  article.className = "week-card";

  article.innerHTML = `
        <div class="week-image">
            <img 
                src="${week.image}" 
                alt="${week.title}"
                loading="lazy"
            >

            <span class="week-number">
                ${String(week.number).padStart(2, "0")}
            </span>
        </div>

        <div class="week-content">

            <p class="week-title">
                ${week.title}
            </p>

            <h2>
                ${week.title}
            </h2>

            <p class="week-description">
                ${week.description}
            </p>

            <div class="week-tags">
                ${week.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>

            <div class="week-div">
                <a href="/cuaderno/semana-${String(week.number).padStart(2, "0")}.html" class="week-link">
                    Ver actividad
                </a>
            </div>
        </div>
    `;

  return article;
}

function renderWeeks() {
  const weeksContainer = document.getElementById("weeks-container");

  if (!weeksContainer) {
    return;
  }

  weeksContainer.innerHTML = "";

  weeks.forEach(week => {
    const card = createWeekCard(week);

    weeksContainer.appendChild(card);
  });
}

renderWeeks();
document.addEventListener("cuaderno:loaded", renderWeeks);
