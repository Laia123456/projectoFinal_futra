let jugadores = document.querySelectorAll(".jugador_card");
let buscador = document.querySelector(".input_filtrosJugadores");
let selects = document.querySelectorAll(".select_filtroJugadores");

function filtrarJugadores() {

    let texto = buscador.value.toLowerCase();
    let posicion = selects[0].value;
    let pais = selects[1].value;
    let media = selects[2].value;

    jugadores.forEach(function(jugador) {

        let nombreJugador = jugador.querySelector(".jugador_nombre").textContent.toLowerCase();
        let posicionJugador = jugador.querySelector(".posicion_jugador p").textContent;
        let mediaJugador = parseInt(
            jugador.querySelector(".grl_jugador p").textContent
        );

        // ✅ FIX: usar alt en vez de src
        let bandera = jugador.querySelector(".banderaJugador img").alt.toLowerCase();

        let mostrar = true;

        // filtro nombre
        if (!nombreJugador.includes(texto)) {
            mostrar = false;
        }

        // filtro posición
        if (posicion !== "") {

            let posicionesPermitidas = posicion.split(" ");

            if (!posicionesPermitidas.includes(posicionJugador)) {
                mostrar = false;
            }
        }

        // filtro país (FIX)
        if (pais !== "") {

            if (!bandera.includes(pais.toLowerCase())) {
                mostrar = false;
            }
        }

        // filtro media
        if (media !== "") {

            let mediaMinima = parseInt(media);

            if (mediaJugador < mediaMinima) {
                mostrar = false;
            }
        }

        // mostrar / ocultar
        jugador.style.display = mostrar ? "flex" : "none";

    });
}

// eventos
buscador.addEventListener("input", filtrarJugadores);

selects.forEach(function(select) {
    select.addEventListener("change", filtrarJugadores);
});