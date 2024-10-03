// Mostrar el formulario emergente al cargar la página
window.onload = function() {
    var modal = document.getElementById('user-info-form');
    modal.style.display = 'block';
    
    document.getElementById('continue-btn').addEventListener('click', function() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var seccion = document.getElementById('Grado').value;

        if (nombre && email && telefono) {
            alert("Datos ingresados:\nNombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono + "\nSección: " + seccion);
            modal.style.display = 'none';  // Oculta el modal si los datos son válidos
        } else {
            alert("Por favor, complete todos los campos antes de continuar.");
        }
    });
};

// Funciones de cálculo de precio y total
function actualizarPrecio(selectId, precioId) {
    document.getElementById(selectId).addEventListener('change', function() {
        var selectedOption = this.options[this.selectedIndex];
        var precio = selectedOption.value;
        document.getElementById(precioId).textContent = '$' + precio;
    });
}

function agregar(cantidadId, selectId, resultadoId) {
    var cantidad = parseFloat(document.getElementById(cantidadId).value) || 0;
    var precio = parseFloat(document.getElementById(selectId).options[document.getElementById(selectId).selectedIndex].value) || 0;
    var total = cantidad * precio;
    document.getElementById(resultadoId).textContent = 'Total: $' + total.toFixed(2);
}

function total() {
    var cantidadAzulitos = parseFloat(document.querySelector('input[id="cantidad-azulitos"]').value) || 0;
    var precioAzulitos = parseFloat(document.querySelector('select[id="option-azulitos"]').value) || 0;
    var cantidadGomitas = parseFloat(document.querySelector('input[id="cantidad-gomitas"]').value) || 0;
    var precioGomitas = parseFloat(document.querySelector('select[id="option-gomitas"]').value) || 0;
    var cantidadPinchos = parseFloat(document.querySelector('input[id="cantidad-pinchos"]').value) || 0;
    var precioPinchos = parseFloat(document.querySelector('select[id="option-pinchos"]').value) || 0;

    var totalAzulitos = cantidadAzulitos * precioAzulitos;
    var totalGomitas = cantidadGomitas * precioGomitas;
    var totalPinchos = cantidadPinchos * precioPinchos;
    var total = (totalAzulitos + totalGomitas + totalPinchos).toFixed(2);

    document.getElementById('Resultado').innerHTML = 
        "<img src='IMG/Gracias por su compra.jpeg' width='175px' height='175px'>" + 
        "<br><label id='r'> Detalle del producto:" + 
        "<br> Azulitos: " + cantidadAzulitos + 
        "<br> Gomitas: " + cantidadGomitas + 
        "<br> Pinchos: " + cantidadPinchos + 
        "<br> $" + total + "</label>";
}