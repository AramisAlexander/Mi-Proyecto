document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        // Redirigir sin alertas
        const url = event.currentTarget.getAttribute('href');
        window.open(url, '_blank'); // Abre en una nueva pestaña
    });
});
