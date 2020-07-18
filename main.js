var inputPresupuesto = document.getElementById("presuRange");
inputPresupuesto.addEventListener("mousemove", function actualizarPresupuesto() {
    var valorPresupuesto = document.getElementById("presuRange").value;
    document.getElementById("output").value = valorPresupuesto;

})


var botonCotizar = document.getElementById("button");

botonCotizar.addEventListener("click", function() {
    var valorMarca = document.getElementById("makeOption").value;
    var valorModelo = document.getElementById("modelOption").value;
    var valorPresupuesto = document.getElementById("presuRange").value;
    var valorTransmision = document.getElementById("transmisionOption").value.toLowerCase();


    var padreUser = document.getElementById("padreform");
    var formUser = document.getElementById("formularioUsuario");


    if (valorTransmision == "automatico") {
        valorTransmision = "auto";
    }
    let autosCotizados = [];
    for (let index = 0; index < autos.length; index++) {
        if (valorMarca == autos[index].make && valorModelo == autos[index].year && valorTransmision == autos[index].transmision && (autos[index].price <= valorPresupuesto * 5)) {
            autosCotizados.push(autos[index]);
            var div = document.createElement("div");
            div.id = "carrosOutput";
            div.className = 'card col-3 shadow-lg p-3 mb-5 bg-white rounded';
            var autosCardbody = document.createElement('div');
            autosCardbody.className = 'card-body';
            var autosMarca = document.createElement('h2')
            autosMarca.innerHTML = autos[index].make;
            contenedordeCarros.appendChild(div)
            div.appendChild(autosCardbody)
            autosCardbody.appendChild(autosMarca)


        }

    }
    padreUser.removeChild(formUser);

    console.log(autosCotizados);
})