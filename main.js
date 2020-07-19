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



    if (valorMarca == 'Selecciona tu Marca de Preferencia' || valorTransmision == 'selecciona tu tipo de caja de velocidades' || valorModelo == 'Selecciona el año de modelo') {
        alert('Por favor selecciona una opcion valida');
    } else {

        let autosCotizados = [];
        padreUser.removeChild(formUser)
        for (let i = 0; i < autos.length; i++) {
            console.log(autos[0].make);
            if (valorMarca == autos[i].make && valorModelo == autos[i].year && valorTransmision == autos[i].transmision && (autos[i].price <= (valorPresupuesto * 5))) {
                autosCotizados.push(autos[i]);
                var logoimg;
                if (valorMarca == 'Ford') {
                    logoImg = './src/ford.png';
                } else if (valorMarca == 'Chevrolet') {
                    logoImg = './src/chevrolet.png';
                } else {
                    logoImg = './src/nissan.png';
                }

                var contenedorDiv = document.createElement('div');
                contenedorDiv.id = 'carrosOutput';
                contenedorDiv.className = 'card col-3 shadow-lg p-3 mb-5 bg-white rounded';
                var imgLogo = document.createElement('img');
                imgLogo.className = 'card-img-top';
                imgLogo.style.width = '10rem';
                imgLogo.setAttribute('src', logoImg);
                var autosBody = document.createElement('div');
                autosBody.className = 'card-body';
                autosBody.id = 'bodycar';
                var marcaCard = document.createElement('h1');
                marcaCard.innerHTML = autos[i].make;
                marcaCard.className = 'card-text';
                var yearCard = document.createElement('h2');
                yearCard.innerHTML = autos[i].year;
                yearCard.className = 'card-text';
                var modeloCard = document.createElement('h2');
                modeloCard.innerHTML = autos[i].model;
                modeloCard.className = 'card-text';
                var priceCard = document.createElement('h2');
                priceCard.innerHTML = autos[i].price;
                priceCard.className = 'card-text';
                var transmisionCard = document.createElement('h2');
                transmisionCard.innerHTML = autos[i].transmision;
                transmisionCard.className = 'card-text';
                var colorCard = document.createElement('h2');
                colorCard.innerHTML = autos[i].colors;
                colorCard.className = 'card-text';

                contenedordeCarros.appendChild(contenedorDiv);
                contenedorDiv.appendChild(imgLogo);
                contenedorDiv.appendChild(autosBody);
                autosBody.appendChild(marcaCard);
                autosBody.appendChild(yearCard);
                autosBody.appendChild(modeloCard);
                autosBody.appendChild(transmisionCard);
                autosBody.appendChild(colorCard);
                autosBody.appendChild(priceCard);

            }
        }
        console.log(autosCotizados);
    }


})