let nombres = [];
let limiteDeNombres = 10;

// Función para agregar amigos a la lista
function agregarAmigo() {

    //limites de nombres
if (nombres.length >= limiteDeNombres) {
    alert('Has alcanzado el límite de nombres');
    return;
}
//obtener el nombre del input
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim();
    //validar que el nombre no este vacio
    if (nombre !== '') {
        nombres.push(nombre);
        nombreInput.value = '';
        actualizarLista();
    }
}

// Función para actualizar la lista de nombres en el HTML
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    //recorrer el array de nombres y agregarlos a la lista de amigos
    nombres.forEach((nombre) => {
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = nombre;
        lista.appendChild(nuevoNombre);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        alert('No hay nombres en la lista');
        return;
    }
    //sortear un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El Amigo secreto es : ${nombreSorteado}</li>`;

    //se reiniciara el Sorteo en  9 segudos.

    setTimeout(reiniciarSorteo, 9000);
}
//funcion para reiniciar el sorteo.
function reiniciarSorteo() {
    nombres = [];
    actualizarLista();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    alert('Se ha reiniciado el sorteo');
}
