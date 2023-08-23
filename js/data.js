let data = document.getElementById("data");
let datosGuardados = JSON.parse(localStorage.getItem("datos"));

//datosGuardados.push(localStorage.getItem("datos"));
console.log(datosGuardados);

document.addEventListener("DOMContentLoaded", eventito => 
{
    datosGuardados.forEach((array) =>
    {
        const cosasAAgregar = `<li>${array}</li>`
        data.innerHTML+=cosasAAgregar;
    });
});