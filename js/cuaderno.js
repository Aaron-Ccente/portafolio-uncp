const weeks = [
  {
    title: "Semana 01",
    description:
      "Fundamentos de la Tecnología Web",
    image: "/assets/images/cuaderno/semana01/semana-01-actividad-02-img-01.png",
    tags: ["HTML", "Web", "Introducción", "CSS", "JS"],
  },
];

function createWeekCard(week, index) {
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
                ${String(index + 1).padStart(2, "0")}
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
                <a href="/cuaderno/semana-${String(index + 1).padStart(2, "0")}.html" class="week-link">
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

  weeks.forEach((week, index) => {
    const card = createWeekCard(week, index);

    weeksContainer.appendChild(card);
  });
}

renderWeeks();
document.addEventListener("cuaderno:loaded", renderWeeks);
