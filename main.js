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
    if (valorTransmision == "automatico") {
        valorTransmision = "auto";
    }
    let autosCotizados = [];
    for (let index = 0; index < autos.length; index++) {
        if (valorMarca == autos[index].make && valorModelo == autos[index].year && valorTransmision == autos[index].transmision && (autos[index].price <= valorPresupuesto * 5)) {
            autosCotizados.push(autos[index]);

        }

    }

    console.log(autosCotizados);
})