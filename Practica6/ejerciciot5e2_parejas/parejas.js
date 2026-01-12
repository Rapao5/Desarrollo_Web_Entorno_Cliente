let id1 = 0;

function match(id) {
    let carta = document.getElementById(id);
    let imagenInfo = document.getElementById("imagen");

    if (carta.classList.contains('match')) {
        imagenInfo.innerHTML = "<img src='imagenes/stop.png' width='100'>";
        return;
    }

    if (id1 == 0) {
        id1 = id;
        carta.innerHTML = "<img src='imagenes/" + carta.getAttribute('name') + ".jpg'>";
        imagenInfo.innerHTML = "";
        
    } else {
        let carta2 = document.getElementById(id1);
        if (id1 == id) {
            imagenInfo.innerHTML = "<img src='imagenes/stop.png' width='100'>";
            carta.innerHTML = "";
            id1 = 0;
            return;
        }
        carta.innerHTML = "<img src='imagenes/" + carta.getAttribute('name') + ".jpg'>";
        if (carta.getAttribute('name') == carta2.getAttribute('name')) {
            carta.className = "match";
            carta2.className = "match";
            
            imagenInfo.innerHTML = "<h3>¡Pareja encontrada!</h3>";
            id1 = 0;
        } else {
            setTimeout(function() {
                carta.innerHTML = "";
                carta2.innerHTML = "";
                id1 = 0;
                imagenInfo.innerHTML = "Inténtalo de nuevo";
            }, 700); 
        }
    }
}