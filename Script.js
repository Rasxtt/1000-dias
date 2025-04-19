document.getElementById("continuar").addEventListener("click", desapareceP1);

function desapareceP1 () {
    let P1 = document.getElementById("P1");
    P1.style.display = "none";
    let P3 = document.getElementById("P3");
    P3.style.display = "none";
    let P2 = document.getElementById("P2");
    P2.style.display = "block";



}
function desapareceP2 () {
    let P2 = document.getElementById("P2");
    P2.style.display = "none";
    let P3 = document.getElementById("P3");
    P3.style.display = "block";
    
}

// Boton 1
document.getElementById("B1").addEventListener("click", apareceD1);

function apareceD1 () {
    let D1 = document.getElementById("D1");
    D1.style.display = "block";
    desapareceP2()
    let D2 = document.getElementById("D2");
    D2.style.display = "none";
    let D3 = document.getElementById("D3");
    D3.style.display = "none";
}

// Boton 2
document.getElementById("B2").addEventListener("click", apareceD2);

function apareceD2 () {
    let D2 = document.getElementById("D2");
    D2.style.display = "block";
    desapareceP2()
    let D1 = document.getElementById("D1");
    D1.style.display = "none";
    let D3 = document.getElementById("D3");
    D3.style.display = "none";
}

// Boton 3
document.getElementById("B3").addEventListener("click", apareceD3);

function apareceD3 () {
    let D3 = document.getElementById("D3");
    D3.style.display = "block";
    desapareceP2()
    let D1 = document.getElementById("D1");
    D1.style.display = "none";
    let D2 = document.getElementById("D2");
    D2.style.display = "none";
    
}

document.getElementById("regresar").addEventListener("click", desapareceP1);



// Variables
const personaje = document.getElementById("personaje");
const mapa = document.getElementById("mapa");
const mensaje = document.getElementById("mensaje");

// Posición inicial del personaje
let x = 250, y = 200;

// Configurar la posición inicial del personaje
personaje.style.left = `${x}px`;
personaje.style.top = `${y}px`;

// Ubicación del objetivo
const objetivoX = 450;
const objetivoY = 300;
const distanciaLimite = 50; // Distancia para mostrar el mensaje

// Función para mover al personaje
function moverPersonaje() {
    personaje.style.left = `${x}px`;
    personaje.style.top = `${y}px`;
  
    const personajeW = personaje.offsetWidth;
    const personajeH = personaje.offsetHeight;
    const mapaW = mapa.offsetWidth;
    const mapaH = mapa.offsetHeight;

    const esquina1 = { x: 0, y: 0, mensaje: "Felices 1000 días" };
    const esquina2 = { x: mapaW - 150, y: 0, mensaje: "Feliz Pascua" };
    const esquina3 = { x: 0, y: mapaH - 150, mensaje: "Te amo" };
    const esquina4 = { x: mapaW - 150, y: mapaH - 150, mensaje: "Un simple huevito" };
  
    const esquinas = [esquina1, esquina2, esquina3, esquina4];
    const distanciaLimite = 60;
    let mensajeMostrado = false;
  
    for (const esquina of esquinas) {
      const distancia = Math.sqrt(Math.pow(x - esquina.x, 2) + Math.pow(y - esquina.y, 2));
      if (distancia < distanciaLimite) {
        mensaje.textContent = esquina.mensaje;
        mensaje.style.display = "block";
        mensajeMostrado = true;
        break;
      }
    }
  
    if (!mensajeMostrado) {
      mensaje.style.display = "none";
    }
  }
  

// Limitar el movimiento para que no salga del mapa
function limitarMovimiento() {
  // Limites del mapa
  const mapaWidth = mapa.offsetWidth;
  const mapaHeight = mapa.offsetHeight;

  // Limitar la posición X
  if (x < 0) x = 0;
  if (x > mapaWidth - 150) x = mapaWidth - 150; // Resta el tamaño del personaje

  // Limitar la posición Y
  if (y < 0) y = 0;
  if (y > mapaHeight - 150) y = mapaHeight - 150; // Resta el tamaño del personaje
}

// Evento de teclado para mover el personaje
document.addEventListener("keydown", function(e) {
  if (e.key === "w") y -= 10; // Arriba
  if (e.key === "s") y += 10; // Abajo
  if (e.key === "a") x -= 10; // Izquierda
  if (e.key === "d") x += 10; // Derecha

  limitarMovimiento(); // Verificar límites antes de mover
  moverPersonaje(); // Actualizar la posición del personaje
});

function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = texto;
    mensaje.style.display = "block";
  
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000); // El mensaje se oculta luego de 3 segundos
  }

  let pasos = 0;  // Controla cuántos pasos ha avanzado
  const totalPasos = 5;  // El número total de pasos en la línea
  const avancePorPaso = 100 / totalPasos;  // Avance por paso en porcentaje
  const paso = document.getElementById("paso");  // El div que representa el avance
  const imagen = document.getElementById("imagen");
  const titulo = document.getElementById("titulo");
  
  const pasosInfo = [
    { imagen: "inicio.jpg", titulo: "El comienzo" },
    { imagen: "banda.jpg", titulo: "Banda" },
    { imagen: "prom.jpg", titulo: "Prom" },
    { imagen: "viaje.jpg", titulo: "Viajecito" },
    { imagen: "long.jpeg", titulo: "Long distance" }
  ];
  
  document.getElementById("avanzar").addEventListener("click", avanzar);
  
  function avanzar() {
    if (pasos < totalPasos) {
      pasos++;  // Incrementa el paso
  
      // Mueve el paso de la línea de acuerdo al avance
      const nuevoAvance = pasos * avancePorPaso;
      paso.style.left = `${nuevoAvance}%`;
  
      // Cambia la imagen y el título de acuerdo al paso
      imagen.src = pasosInfo[pasos - 1].imagen;
      titulo.textContent = pasosInfo[pasos - 1].titulo;
  
      // Opcional: Si se completan todos los pasos, desactiva el botón
      if (pasos === totalPasos) {
        document.getElementById("avanzar").disabled = true;
        document.getElementById("avanzar").style.backgroundColor = "#bbb";  // Cambiar el color del botón
      }
    }
  }
// Respuestas correctas para cada pregunta
const respuestasCorrectas = {
    1: 'a', // Correcta para la pregunta 1
    2: 'c', // Correcta para la pregunta 2
    3: 'b', // Correcta para la pregunta 3
    4: 'd'  // Correcta para la pregunta 4
  };
  
  // Función que verifica la respuesta seleccionada
  function verificarRespuesta(pregunta, opcion) {
    const resultadoElemento = document.getElementById(`resultado${pregunta}`);
    
    if (pregunta === 4) {  // Si es la pregunta 4
      if (opcion === 'b') {
        resultadoElemento.textContent = 'Incorrecto. Intenta de nuevo.';
        resultadoElemento.style.color = 'red';
      } else {
        resultadoElemento.textContent = '¡Correcto!';
        resultadoElemento.style.color = 'green';
      }
    } else {
      if (respuestasCorrectas[pregunta] === opcion) {
        resultadoElemento.textContent = '¡Correcto!';
        resultadoElemento.style.color = 'green';
      } else {
        resultadoElemento.textContent = 'Incorrecto. Intenta de nuevo.';
        resultadoElemento.style.color = 'red';
      }
    }
  }
  