let fechaActual = new Date();

function actualizarMesAnio() {
    const mes = fechaActual.toLocaleString('es-ES', { month: 'long' });
    const anio = fechaActual.getFullYear();
    document.getElementById('mes-anio').innerText = `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${anio}`;
}

function crearCalendario(mes, anio) {
    const diasMes = new Date(anio, mes + 1, 0).getDate();
    const primerDia = new Date(anio, mes, 1).getDay();
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    let tabla = '<table><thead><tr>';
    diasSemana.forEach(dia => {
        tabla += `<th>${dia}</th>`;
    });
    tabla += '</tr></thead><tbody><tr>';
    
    for (let i = 0; i < primerDia; i++) {
        tabla += '<td></td>';
    }

    for (let dia = 1; dia <= diasMes; dia++) {
        if ((dia + primerDia - 1) % 7 === 0) {
            tabla += '</tr><tr>';
        }
        tabla += `<td>${dia}</td>`;
    }

    tabla += '</tr></tbody></table>';
    document.getElementById('calendario').innerHTML = tabla;
}

function cambiarMes(direccion) {
    fechaActual.setMonth(fechaActual.getMonth() + direccion);
    actualizarMesAnio();
    crearCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
}

document.getElementById('anterior').addEventListener('click', () => cambiarMes(-1));
document.getElementById('siguiente').addEventListener('click', () => cambiarMes(1));

// Inicializar calendario
actualizarMesAnio();
crearCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
