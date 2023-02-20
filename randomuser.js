//variables

const boton = document.querySelector("#boton");
const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const ciudad = document.querySelector("#ciudad");
const phone = document.querySelector("#phone");

//funciones

const generarUsuario = async () => {
  try {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    console.log(datos);
    nombre.textContent = datos.name.first + " " + datos.name.last;
    ciudad.textContent = datos.location.city;
    foto.src = datos.picture.medium;
    phone.textContent = datos.phone;
    email.textContent = datos.email;

  } catch (error) {
    console.log(error);
  }
};

boton.addEventListener("click", generarUsuario);
document.addEventListener('DOMContentLoaded', generarUsuario);

