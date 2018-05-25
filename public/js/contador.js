var inicioBtn=  document.getElementById("inicioBtn");
var proyectos=  document.getElementById("proyectos");
var contacto=  document.getElementById("contacto");
var contador= document.getElementById("contador");

var contadorInicio=0;
var contadorProyectos=0;
var contadorContacto=0;

inicioBtn.addEventListener('click', function () {

    contadorInicio++;
    contador.innerHTML=contadorInicio;

    

});

proyectos.addEventListener('click', function () {
 
    contadorProyectos++;

});

contacto.addEventListener('click', function () {
 
    
    contadorContacto++;
});

