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

let obtenerUsuarios = (resolve, reject) => {
  const usuarios = fetch("http://localhost:3000/users");
  if (usuarios) {
    const user = {};
    return resolve(user);
  } else {
    return reject(new Error("Error en respuesta"));
  }
};

function crearObtenerUsuarios() {
  return new Promise(obtenerUsuarios);
}

async function traerUsuarios() {
  try {
    const users = await crearObtenerUsuarios();
    console.log("mostrar usuarios", users);
  } catch (e) {
    console.log(e);
  }
}
traerUsuarios();

const imprimirUsuarios = () => {
  const usuarios = obtenerUsuarios();
  usuarios
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en respuesta");
      }
    })
    .then((usuarios) => {
      console.log(usuarios);
    })
    .catch((error) => {
      console.log(error);
    });
};
