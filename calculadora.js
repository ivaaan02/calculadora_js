function sumaNumeros() {
    var numero_1 = document.getElementById('num1').value;
    var numero_2 = document.getElementById('num2').value;

    if (!/^([0-9])*$/.test(numero_1) || !/^([0-9])*$/.test(numero_2)) {
        alert("El valor introducido no es un número");
    } else if (numero_1 == "" || numero_2 == "") {
        alert("Tienes que introducir un numero!");
    } else {
        var resultado_suma = parseFloat(numero_1) + parseFloat(numero_2);

        document.getElementById("result").value = resultado_suma;
    }
}

function limpiarCamposTexto() {
    // Limpiar cuadro de texto
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}