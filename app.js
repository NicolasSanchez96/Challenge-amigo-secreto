// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = nameInput.value.trim();  
    
    // Validación: Asegurarse de que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");  // Mostrar alerta si el campo está vacío
        return;  // Detener la ejecución si el campo está vacío
    }

    amigos.push(nombre);  // Agregar el nombre al array de amigos

    // Crear un nuevo elemento de lista y agregar el nombre
    const listItem = document.createElement("li");
    listItem.textContent = nombre;  // Asignar el nombre al contenido de la lista
    nameList.appendChild(listItem);  // Añadir el <li> a la lista visible en la página

    // Limpiar el campo de entrada para un nuevo nombre
    nameInput.value = "";  // Restablecer el campo de texto a una cadena vacía
}

// Obtener el botón y el campo de texto
const addButton = document.getElementById("addButton");
const nameInput = document.getElementById("nameInput");

// Agregar el evento para que al hacer clic en el botón "Adicionar" se ejecute la función
addButton.addEventListener("click", agregarAmigo);
