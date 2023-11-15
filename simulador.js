function calcularPresupuesto() {
    let ingresos = 0;
    let gastos = 0;

    // Ingresos
    while (true) {
        let ingreso = +prompt("Ingresa tu presupuesto");
        if (isNaN(ingreso)) {
            alert("Ingresa un valor numérico válido.");
        } 
        break;
    }

    // Gastos
    while (true) {
        let gasto = +prompt("Ingresa tus gastos ");
        if (isNaN(gasto)) {
            alert("Ingresa un valor numérico válido.");
        }

        gastos += gasto;

        // Pregunta si quieren agregar otro gasto
        let agregarOtroGasto = confirm("¿Quieres agregar otro gasto?");
        if (!agregarOtroGasto) 
        break;
    }

    // Calcular el presupuesto
    const presupuesto = ingresos - gastos;

    // Mostrar el resultado
    alert(`El resultado es $${presupuesto}`);
}

// Llamar a la función para probar
calcularPresupuesto();