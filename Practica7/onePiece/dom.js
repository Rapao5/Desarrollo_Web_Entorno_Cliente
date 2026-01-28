document.addEventListener("DOMContentLoaded", () => {
    const galeria = document.getElementById('galeria');
    const containerBotones = document.getElementById('container-botones');
    const containerFiltros = document.getElementById('container-filtros');

    const btnGenerar = document.createElement('button');
    btnGenerar.textContent = "Generar personaje";
    containerBotones.appendChild(btnGenerar);

    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar personaje";
    containerBotones.appendChild(btnBorrar);

    btnGenerar.addEventListener('click', () => {
        const seleccion = prompt("Elija el nombre del personaje:\n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy");
        let nombreImg = "";
        let clasePersonaje = "";

        switch (seleccion) {
            case "1": nombreImg = "sanji.jpg"; clasePersonaje = "sanji"; break;
            case "2": nombreImg = "zoro.jpg"; clasePersonaje = "zoro"; break;
            case "3": nombreImg = "nami.jpg"; clasePersonaje = "nami"; break;
            case "4": nombreImg = "luffy.jpg"; clasePersonaje = "luffy"; break;
            default: alert("Opción no válida"); return;
        }

        const img = document.createElement('img');
        img.src = `img/${nombreImg}`;
        img.classList.add('personaje-img', clasePersonaje);
        galeria.appendChild(img);
    });

    btnBorrar.addEventListener('click', () => {
        if (galeria.lastElementChild) {
            galeria.removeChild(galeria.lastElementChild);
        } else {
            alert("No hay personajes para borrar");
        }
    });

    const personajes = ["Sanji", "Zoro", "Nami", "Luffy"];
    
    personajes.forEach(p => {
        const btnCount = document.createElement('button');
        btnCount.textContent = `Nº ${p}`;
        btnCount.style.margin = "5px";
        
        btnCount.addEventListener('click', () => {
            const cantidad = document.querySelectorAll(`.${p.toLowerCase()}`).length;
            alert(`Hay ${cantidad} imágenes de ${p}`);
        });
        
        containerFiltros.appendChild(btnCount);
    });
});