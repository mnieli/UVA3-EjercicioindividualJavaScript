window.onload = function() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let ciudad = prompt("Ingrese su ciudad:");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD-MM-YYYY):");
    
    alert(`Bienvenido ${nombre} ${apellido} de ${ciudad}!`);
    
    // Separar la fecha ingresada en día, mes y año
    let partesFecha = fechaNacimiento.split("-");
    let dia = parseInt(partesFecha[0]);
    let mes = parseInt(partesFecha[1]) - 1; // Los meses en JavaScript van de 0 a 11
    let año = parseInt(partesFecha[2]);
    
    // Crear un objeto Date con los componentes de la fecha
    let fechaNacimientoDate = new Date(año, mes, dia);
    let hoy = new Date();
    
    // Calcular la diferencia en milisegundos
    let diferenciaEnMilisegundos = hoy - fechaNacimientoDate;
    
    // Convertir la diferencia a días
    let diasVividos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    alert(`Has vivido ${diasVividos} días desde que naciste.`);
};

