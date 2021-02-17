const linkNodes = document.querySelectorAll('.icon-navbar__link');
const links = Array.from(linkNodes);

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    })
});