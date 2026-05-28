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

            let bandera = jugador.querySelector(".banderaJugador img").src.toLowerCase();

            let mostrar = true;

            if(nombreJugador.includes(texto) == false) {
                mostrar = false;
            }


            if(posicion != "") {

                let posicionesPermitidas = posicion.split(" ");

                if(posicionesPermitidas.includes(posicionJugador) == false) {
                    mostrar = false;
                }

            }


            if(pais != "") {

                if(bandera.includes(pais.toLowerCase()) == false) {
                    mostrar = false;
                }

            }


            if(media != "") {

                let mediaMinima = parseInt(media);

                if(mediaJugador < mediaMinima) {
                    mostrar = false;
                }

            }


            if(mostrar == true) {
                jugador.style.display = "flex";
            }

            else {
                jugador.style.display = "none";
            }

        });

    }



    buscador.addEventListener("input", filtrarJugadores);

    selects.forEach(function(select) {

        select.addEventListener("change", filtrarJugadores);

    });