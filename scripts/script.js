const gridGaleria = document.getElementById('grid-galeria');

const infografias = [
    {
        titulo: 'Infografía 1',
        descripcion: 'Descripción de la infografía 1.',
        imagen: 'images/infografia1.jpg',
        url: '#'
    },
        {
        titulo: 'Infografía 2',
        descripcion: 'Descripción de la infografía 2.',
        imagen: 'images/infografia2.jpg',
        url: '#'
    },

    // Agrega más infografías aquí
];

infografias.forEach(infografia => {
    const divInfografia = document.createElement('div');
    divInfografia.classList.add('div-infografia');

    divInfografia.innerHTML = `
        <img src="${infografia.imagen}" alt="${infografia.titulo}">
        <h3>${infografia.titulo}</h3>
        <p>${infografia.descripcion}</p>
        <a href="${infografia.url}" target="_blank">Ver</a>
    `;

    gridGaleria.appendChild(divInfografia);
});
