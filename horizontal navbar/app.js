//Obtener todos los nodos:
const linkNodes = document.querySelectorAll('.icon-navbar__link');
//Convertir a un arreglo:
const links = Array.from(linkNodes);

//Agregar el evento:
links.forEach((link) => {
    link.addEventListener('click', () => {
        //Recorro todos los botones y quito la clase active:
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }
        //Le agrego la clase active al elemento seleccionad:
        link.classList.add('active');
    });
});