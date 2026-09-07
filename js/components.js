const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const cuaderno = document.getElementById("cuaderno");

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