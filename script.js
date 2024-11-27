var acc = document.getElementsByClassName("accordion");
var dropdowns = document.getElementsByClassName("dropdown");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Agregar funcionalidad para el menú desplegable "Descubre"
for (var j = 0; j < dropdowns.length; j++) {
    dropdowns[j].addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic se propague
        var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Cierra el menú desplegable si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        for (var k = 0; k < dropdowns.length; k++) {
            var dropdownContent = dropdowns[k].getElementsByClassName("dropdown-content")[0];
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeImage = document.querySelector('.fade-image');
    const images = [
        'imagenesPortada/torola.jpg',
        'imagenesPortada/fonseca.jpg', // Cambia esto por el nombre real de la imagen
        'imagenesPortada/conchagua.jpg'  // Cambia esto por el nombre real de la imagen
    ];
    
    let currentIndex = 0;

    function changeImage() {
        fadeImage.classList.add('hidden'); // Agregar clase para desvanecer
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
            fadeImage.src = images[currentIndex]; // Cambiar la fuente de la imagen
            fadeImage.classList.remove('hidden'); // Quitar clase para mostrar
        }, 1000); // Esperar el tiempo de desvanecimiento (1 segundo)
    }

    // Cambiar la imagen cada 5 segundos
    setInterval(changeImage, 4000); // Cambia la imagen cada 5 segundos
});