let filtroPais = document.querySelector("#filtroPais");
let filtroLiga = document.querySelector("#filtroLiga");
let filtroValoracion = document.querySelector("#filtroValoracion");
let equipos = document.querySelectorAll(".equipo_card"); //selecciona todas las targetas de los equipos


function filtrarEquipos() {

    let paisSeleccionado = filtroPais.value; //pasi seleccionado = valor del pais en html
    let ligaSeleccionada = filtroLiga.value; //liga seleccionada = valor de la liga en html
    let valoracionSeleccionada = filtroValoracion.value; //valoracion seleccionado = valor de la valoracion en html

    for (let i = 0; i < equipos.length; i++) { //recorre todos los equipos

        // busca el pais del equipo 
        let paisEquipo =
            equipos[i]
            .querySelector(".banderaEspana img")
            .alt;

        //busca la liga del equipo
        let ligaEquipo =
            equipos[i]
            .querySelector(".laliga_logo img")
            .alt;

        //busca la valoracion del equipo
        let valoracionEquipo =
            equipos[i]
            .querySelector(".grl_equipos p")
            .textContent;

        //eseñar o no la targeta del equipo
        let mostrar = true;

        // si el pais seleccionado no coincide con el del equipo no se enseña
        if (
            paisSeleccionado != "" &&
            paisEquipo != paisSeleccionado
        ) {
            mostrar = false; //no se enseña
        }

        //si la liga seleccionada no coincide con la del equipo no se enseña
        if (
            ligaSeleccionada != "" &&
            ligaEquipo != ligaSeleccionada
        ) {
            mostrar = false; //no se enseña
        }

        //si la valoracion es menor que la del equipo no se enseña
        if (
            valoracionSeleccionada != "" &&
            valoracionEquipo < valoracionSeleccionada
        ) {
            mostrar = false; //no se enseña
        }



        //si mostrar es true aparace el equiop
        if (mostrar == true) {
            equipos[i].style.display = "flex";
        }
        //si mostrar es false no aparece
        else {
            equipos[i].style.display = "none";
        }

    }

}

filtroPais.addEventListener("change", filtrarEquipos); //cuando cambia el filtro se ejecuta la funcion
filtroLiga.addEventListener("change", filtrarEquipos);
filtroValoracion.addEventListener("change", filtrarEquipos);