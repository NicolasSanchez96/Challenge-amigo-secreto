// Array para almacenar los nombres 
let amigos = [];


// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");  
    const nombreAmigo = inputAmigo.value.trim();  // Eliminar espacios en blanco

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;  // Detener la ejecución si el campo está vacío
    }
    // Actualizar el array 
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Mostrar la lista actualizada 
    mostrarAmigos();
}



// Función para mostrar los amigos en el HTML
function mostrarAmigos() {
    // Obtener el elemento donde vamos a mostrar la lista 
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = "";

    // Iterar sobre el array 'amigos' y crear un <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        const listItem = document.createElement("li");  // Crear un nuevo <li>
        listItem.textContent = amigos[i];  // Asignar el nombre del amigo como texto
        listaAmigos.appendChild(listItem);  // Agregar el <li> al <ul> en el HTML
    }
}



// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos 2 nombres en la lista
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;  // Detener la ejecución si no hay suficientes nombres
    }

    // Generar un índice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado utilizando aleatoriamente
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
