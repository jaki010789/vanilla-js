// Inserte el código aquí

function showTime() {
  let myDate = new Date();
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();
  let seconds = myDate.getSeconds();
  let horaActual = hours + ":" + minutes + ":" + seconds;

  document.getElementById("horaActual").textContent = horaActual;
}
setInterval(showTime, 1000);

obtenerListausuarios();
function obtenerListausuarios() {
  fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log("Lista de usuarios:", datos);
    })
    .catch((error) => {
      console.log("Error al obtener la lista de usuarios:", error);
    });

  function usuarios() {
    return new Promise(obtenerListausuarios);
  }
}

async function datosusuario() {
  const datosuser = await obtenerListausuarios();
  console.log(datosuser);
}
datosusuario();
