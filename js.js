const boton = document.getElementById("boton");
const foto = document.getElementById("foto");
const nombre = document.getElementById("nombre");
const nacionalidad = document.getElementById("nacionalidad");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const genero = document.getElementById("genero");
const nacimiento = document.getElementById("nacimiento");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");

const obtenerUsuario = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const { results } = await res.json();
    const data = results[0];
    foto.src = data.picture.large;
    nombre.textContent = `${data.name.first} ${data.name.last}`;
    nacionalidad.textContent = `${data.location.country}, ${data.location.state} `;
    correo.textContent = data.email;
    telefono.textContent = data.cell;
    genero.textContent = data.gender;
    edad.textContent = data.dob.age;
    direccion.textContent = `${data.location.street.name} ${data.location.street.number}`;

    const inputDate = new Date(data.dob.date);
    const date = inputDate.getDate();
    const month = inputDate.getMonth();
    const year = inputDate.getFullYear();
    nacimiento.textContent = `${date}/${month}/${year}`;
  } catch (error) {
    console.error(error);
  }
};

boton.addEventListener("click", obtenerUsuario);
document.addEventListener("DOMContentLoaded", obtenerUsuario);
