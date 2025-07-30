fetch('./Components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

// Para abrir la pantalla de agregar 

document.querySelector('a[href="#addNewItem"]').addEventListener('click', function (e) {
    e.preventDefault(); // evita el salto directo

    const target = document.querySelector('#addNewItem');
    const bsCollapse = new bootstrap.Collapse(target, {
        toggle: true // muestra u oculta
    });
});


document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.cardComplete').remove();
    });
});