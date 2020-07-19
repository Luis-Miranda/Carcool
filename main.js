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

    var vTrans = document.getElementById("transmisionOption").value;

    var padreUser = document.getElementById("padreform");
    var formUser = document.getElementById("formularioUsuario");

    var nombreCliente = document.getElementById('nombre').value;
    var apellidoCliente = document.getElementById('apellido').value;

    if (valorTransmision == "automatico") {
        valorTransmision = "auto";
    }



    if (valorMarca == 'Selecciona tu Marca de Preferencia' || valorTransmision == 'selecciona tu tipo de caja de velocidades' || valorModelo == 'Selecciona el año de modelo') {
        alert('Por favor selecciona una opcion valida');
    } else {

        let autosCotizados = [];
        padreUser.removeChild(formUser)

        var naCliente = document.createElement('h1');
        naCliente.innerHTML = 'Bienvenido: ' + nombreCliente + ' ' + apellidoCliente;

        contenedordeCarros.appendChild(naCliente);


        for (let i = 0; i < autos.length; i++) {

            if (valorMarca == autos[i].make && valorModelo == autos[i].year && valorTransmision == autos[i].transmision && (autos[i].price <= (valorPresupuesto * 5))) {
                autosCotizados.push(autos[i]);
                var logoImg;
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
                var contenedorColores = document.createElement('div');
                contenedorColores.id = 'coloresArray';
                contenedorColores.className = 'card-body';
                var yearCard = document.createElement('h2');
                yearCard.innerHTML = autos[i].year;
                yearCard.className = 'card-text';
                var modeloCard = document.createElement('h2');
                modeloCard.innerHTML = autos[i].model;
                modeloCard.className = 'card-text';
                var priceCard = document.createElement('h2');
                priceCard.innerHTML = '$ ' + autos[i].price;
                priceCard.className = 'card-text';
                var transmisionCard = document.createElement('h2');
                transmisionCard.innerHTML = vTrans;
                transmisionCard.className = 'card-text';
                var bodyStyle = document.createElement('h2');
                bodyStyle.innerHTML = 'tipo de coche: ' + autos[i].body_styles;
                bodyStyle.className = 'card-text';
                contenedordeCarros.appendChild(contenedorDiv);
                contenedorDiv.appendChild(imgLogo);
                contenedorDiv.appendChild(autosBody);
                autosBody.appendChild(modeloCard);
                autosBody.appendChild(yearCard);
                autosBody.appendChild(transmisionCard);
                autosBody.appendChild(bodyStyle);
                autosBody.appendChild(priceCard);
                autosBody.appendChild(contenedorColores);


                var colorCoches = [];
                for (let index = 0; index < autos[i].colors.length; index++) {
                    var colorC = document.createElement('div');
                    colorC.id = 'divColor';
                    colorC.innerHTML = autos[i].colors[index];
                    colorC.style.backgroundColor = autos[i].colors[index];
                    contenedorColores.appendChild(colorC);

                }

            }
        }

        console.log(autosCotizados);
        if (autosCotizados.length == 0) {
            var noaicoches = document.createElement('h1');
            noaicoches.id = 'noaicoches';
            noaicoches.innerHTML = 'Lo sentimos por el momento no hay coches que mostar';

            contenedordeCarros.appendChild(noaicoches);

        }
    }


})