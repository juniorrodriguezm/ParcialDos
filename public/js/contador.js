var inicioBtn=  document.getElementById("inicioBtn");
var proyectos=  document.getElementById("proyectos");
var contacto=  document.getElementById("contacto");
var titulo= document.getElementById("titulo");

var contadorInicio=0;
var contadorProyectos=0;
var contadorContacto=0;

inicioBtn.addEventListener('click', function () {

    contadorInicio++;
    

});

proyectos.addEventListener('click', function () {
 
    contadorProyectos++;

});

contacto.addEventListener('click', function () {
 
    
    contadorContacto++;
});

