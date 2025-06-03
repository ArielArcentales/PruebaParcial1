document.getElementById("cambiar-tema").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let carrera = document.getElementById("carrera").value.trim();

    if (!nombre || !correo || !carrera) {
        alert("Todos los campos son obligatorios.");
        return;
    }
});

fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
        let lista = document.querySelector(".lista-participantes");
        data.results.forEach(persona => {
            let tarjeta = document.createElement("div");
            tarjeta.innerHTML = `
                <img src="${persona.picture.medium}" alt="Foto de ${persona.name.first}">
                <p>${persona.name.first} ${persona.name.last}</p>
            `;
            lista.appendChild(tarjeta);
        });
    });