const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const cuaderno = document.getElementById("cuaderno");
const cvUrl = new URL(
  "../assets/cv/CV_CCENTE ROJAS JUAN AARON.pdf",
  document.currentScript.src,
).href;

function setCvDownloadLinks(container) {
  container.querySelectorAll("[data-cv-download]").forEach(link => {
    link.href = cvUrl;
  });
}

if (navbar) {
  const componentUrl = new URL("../components/navbar.html", document.currentScript.src);

  fetch(componentUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el navbar (${response.status})`);
      }

      return response.text();
    })
  .then(data => {
    navbar.innerHTML = data;
    setCvDownloadLinks(navbar);
  })
  .catch(error => {
    console.error(error);
  });
}

if (hero) {
  const componentUrl = new URL("../components/portada.html", document.currentScript.src);

  fetch(componentUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el navbar (${response.status})`);
      }

      return response.text();
    })
  .then(data => {
    hero.innerHTML = data;
    setCvDownloadLinks(hero);
  })
  .catch(error => {
    console.error(error);
  });
}

if (cuaderno) {
  const componentUrl = new URL("../components/cuaderno.html", document.currentScript.src);

  fetch(componentUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el navbar (${response.status})`);
      }

      return response.text();
    })
  .then(data => {
    cuaderno.innerHTML = data;
    document.dispatchEvent(new CustomEvent("cuaderno:loaded"));
  })
  .catch(error => {
    console.error(error);
  });
}