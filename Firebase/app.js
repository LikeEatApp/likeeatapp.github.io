// Configuración de Firebase de su aplicación web
var firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "like-eat-9901b.firebaseapp.com",
    projectId: "like-eat-9901b",
    storageBucket: "like-eat-9901b.appspot.com",
    messagingSenderId: "6467136060",
    appId: "1:6467136060:web:485398aa74ed7ff6fa7139",
    measurementId: "G-KQ9T9RY7PS"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function guardarComida(nombreComida, descripcionComida) {
    return db.collection("food").add({
        Nombre: nombreComida,
        Descripcion: descripcionComida
    });
}

const inputComida = document.getElementById("input-comida");
const boton = document.getElementById("button-comida");

boton.addEventListener("click", function() {
    let nombreComida = inputComida.value;
    
    // Puedes dejar la descripción en blanco o agregar otro campo para capturarla
    let descripcionComida = ""; // Aquí puedes agregar la descripción si la tienes

    guardarComida(nombreComida, descripcionComida).then(function(docRef) {
        console.log('Se pudo agregar el elemento a la base de datos - ' + docRef.id);
        console.log('Datos subidos exitosamente');
    }).catch(function(error) {
        console.error('Error al subir los datos:', error);
    });
});
