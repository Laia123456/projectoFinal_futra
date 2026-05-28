let filtroPais = document.querySelector("#filtroPais");

let equipos = document.querySelectorAll(".equipo_card");

filtroPais.addEventListener("change", function() {

    let paisSeleccionado = filtroPais.value;

    for (let i = 0; i < equipos.length; i++) {

        let bandera = equipos[i].querySelector(".banderaEspana img");

        let paisEquipo = bandera.alt;

        if (paisSeleccionado == "") {

            equipos[i].style.display = "flex";

        }

        else if (paisEquipo == paisSeleccionado) {

            equipos[i].style.display = "flex";

        }

        else {

            equipos[i].style.display = "none";

        }

    }

});