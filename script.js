const arribaBtn= document.getElementById("arriba");
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.responsive');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
window.onscroll = function() {
    // Comprueba la cantidad de desplazamiento vertical
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    // Ajusta la opacidad del botón basado en la cantidad de desplazamiento vertical
    arribaBtn.style.opacity = scrollPosition > 30 ? 1 : 0;

    // Ajusta la posición del botón desde la parte inferior de la ventana
    arribaBtn.style.bottom = scrollPosition > 30 ? "10%" : "20%";
}
