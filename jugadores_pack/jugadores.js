let jugadores = document.querySelectorAll(".jugador_card"); //selecciona todas las tarjetas
let buscador = document.querySelector(".input_filtrosJugadores");
let selects = document.querySelectorAll(".select_filtroJugadores"); //selecciona todo la posicion pais y media

function filtrarJugadores() {

    let texto = buscador.value.toLowerCase(); //para el buscardor compare sin problemas con mayusculas y minusculas

    let posicion = selects[0].value; //valor posicion
    let pais = selects[1].value; //valor pais
    let media = selects[2].value; //valor media

    //recorre todas als targetas
    jugadores.forEach(function(jugador) {

        let nombreJugador = jugador.querySelector(".jugador_nombre").textContent.toLowerCase(); //nombre jugador
        let posicionJugador = jugador.querySelector(".posicion_jugador p").textContent; //posicion jugador
        let mediaJugador = parseInt(//media jugaodr
            jugador.querySelector(".grl_jugador p").textContent
        );

        
        let bandera = jugador.querySelector(".banderaJugador img").alt.toLowerCase(); //bandera jugador

        let mostrar = true; //variable para mostrar o no

        if (!nombreJugador.includes(texto)) { //si lo q escribo no coincide con lo que hay en las cartas no se enseña
            mostrar = false;
        }

        if (posicion !== "") {
            let posicionesPermitidas = posicion.split(" "); //convierte las posiciones en array
            if (!posicionesPermitidas.includes(posicionJugador)) { //si la posicion no està se oculta
                mostrar = false;
            }
        }

        if (pais !== "") {
            if (!bandera.includes(pais.toLowerCase())) { //compara el texto del alt con el de select
                mostrar = false;
            }
        }

        if (media !== "") {
            let mediaMinima = parseInt(media);
            if (mediaJugador < mediaMinima) { //si la media es menor se oculta
                mostrar = false;
            }
        }

        jugador.style.display = mostrar ? "flex" : "none"; //mostrar o no

    });
}


buscador.addEventListener("input", filtrarJugadores); //para cuando se escribe en el buscador

selects.forEach(function(select) { //para cuando se cambia el select
    select.addEventListener("change", filtrarJugadores);
});