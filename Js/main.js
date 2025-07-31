
fetch('./Components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

    // abrir el agregar
    const botonAgregar = document.querySelector('a[href="#addNewItem"]');
    if (botonAgregar) {
        botonAgregar.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('#addNewItem');
            new bootstrap.Collapse(target, { toggle: true });
        });
    }
});


fetch('./Components/footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const listTask = document.querySelector("#listTask");
    const inputImagen = document.querySelector("#imagen");

    let imagenPreview = "./Public/default.png"; 


    inputImagen.addEventListener("change", function () {
    const archivo = this.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = function (e) {
        imagenPreview = e.target.result;
    };
    lector.readAsDataURL(archivo);
});


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const titulo = document.querySelector("#titulo").value.trim();
    const descripcion = document.querySelector("#descripcion").value.trim();
    const enlace = document.querySelector("#enlace").value.trim();

        
    if (!titulo || !descripcion || !enlace) return;

    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = "row g-4 mb-3";
    nuevaTarjeta.innerHTML = `
      <div class="col-md">
        <div class="card shadow-sm text-center border border-dark">
          <div class="card-body d-flex justify-content-between">
            <div class="d-flex align-items-start gap-3">
              <img src="${imagenPreview}" alt="Vista previa" style="height: 70px; width: 70px;" class="rounded">
              <div class="text-start">
                <h5 class="card-title mb-2">${titulo}</h5>
                <p class="card-text mb-0">Ruta: <a href="${enlace}" target="_blank">${descripcion}</a></p>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <button class="btn btn-danger eliminar">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `;

    listTask.appendChild(nuevaTarjeta);
    form.reset();
    imagenPreview = "./Public/default.png"; // Reinicia el valor por si no hay nueva imagen
});



listTask.addEventListener("click", function (e) {
    if (e.target.classList.contains("eliminar")) {
        const fila = e.target.closest(".row");
        if (fila) fila.remove();
        }
    });
});