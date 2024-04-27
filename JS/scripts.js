function modalBienvenida(){
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState="paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
	window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
}

function cerrarModalBienvenida(){
	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState="running";
	document.getElementById("subtituloEncabezado").style.animationPlayState="running";
	document.documentElement.style.overflowY="auto";
}

// /----------------Slide Show---------------/ 

var backGroundContador =0;

var listaImagenesBG = [
			"url('media/hero.jpg')",
			"url('media/hero1.jpg')",
			"url('media/hero2.jpg')"
		]

function slideShow(){

	backGroundContador++;

	if(backGroundContador==3){
		backGroundContador=0;
	}

	document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," + listaImagenesBG[backGroundContador]
}


// /-------------Slide Show Animado--------------/ 

var contNextSlide =0;

function slideShowAnimado(){
	 console.log("holaa");
	var listaImagenesSlide = document.getElementsByClassName("fondosHero");
	contNextSlide++;
	contMain = contNextSlide-1;

	if(contNextSlide==listaImagenesSlide.length){
		contNextSlide=0;
	}

	if(contMain<0){
		contMain=listaImagenesSlide-1;
	}

	for(var i=0; i<listaImagenesSlide.length;i++){
		listaImagenesSlide[i].classList.remove("nextSlide");
		listaImagenesSlide[i].classList.remove("mainSlide");
		listaImagenesSlide[i].classList.remove("hiddenSlide");

		if(i==contNextSlide){
			listaImagenesSlide[i].classList.add("nextSlide");
		}
		else if (i==contMain){
			listaImagenesSlide[i].classList.add("mainSlide");
		}
		else{
			listaImagenesSlide[i].classList.add("hiddenSlide");
		}

	}

}


// /--------------Modal Reserva---------------/ 

function modalReserva(){
	document.getElementById("modalReserva").style.display="block";
	document.documentElement.style.overflow="hidden";

	nombre = document.getElementById("nombre").value;
	fecha = document.getElementById("fecha").value;
	telefono = document.getElementById("telefono").value;
	email = document.getElementById("email").value;
	
	(function chequear(){

		if(!document.getElementById("nombre").checkValidity()){
			document.getElementById("mensajeFormulario").innerHTML = "Nombre erróneo.";
		}

			else if(!document.getElementById("fecha").checkValidity()){
				document.getElementById("mensajeFormulario").innerHTML = "Fecha errónea.";	
			}

				else if(!document.getElementById("telefono").checkValidity()){
					document.getElementById("mensajeFormulario").innerHTML = "Teléfono erróneo.";
			
					}else if(!document.getElementById("email").checkValidity()){
							document.getElementById("mensajeFormulario").innerHTML = "Email erróneo.";
						
						}else{
							document.getElementById("mensajeFormulario").innerHTML = "Tienes una reserva con Lalo para el día " + fecha + ". Te llegará un email de confirmación a " + email + " y SMS al número " + telefono + ". Muchas gracias " + nombre + ". Te esperamos!!"
						}

	})()

	
}

function cerrarModalReserva(){
	document.getElementById("modalReserva").style.display="none";
	document.documentElement.style.overflowY="auto";

	document.getElementById("nombre").value = "";
	document.getElementById("fecha").value = "";
	document.getElementById("telefono").value = "";
	document.getElementById("email").value = "";
}

var scroll1 = document.documentElement.scrollTop;

window.onscroll = function(){esconderMostrarMenu()};

function esconderMostrarMenu(){
	var scroll2 = document.documentElement.scrollTop;

	if(scroll1>scroll2){
		//el menu aparece porque subimos
		document.getElementById("navMenu").style.top = "0";

		if(scroll2>200){
			document.getElementById("navMenu").style.height = "75px";
			document.getElementById("navMenu").style.fontSize = "1.5rem";
			document.getElementById("menu").style.lineHeight = "75px";
			document.getElementById("subMenu").style.top = "60px";
		}else{
			document.getElementById("navMenu").style.height = "150px";
			document.getElementById("navMenu").style.fontSize = "2rem";
			document.getElementById("menu").style.lineHeight = "150px";
			document.getElementById("subMenu").style.top = "100px";
		}

	}else{
		//esto hace que el menu desaparezca, al ser la posición 1 menor que la 2, se entiende que está bajando
		if(scroll2<275){
			document.getElementById("navMenu").style.height = "75px";
			document.getElementById("navMenu").style.fontSize = "1.5rem";
			document.getElementById("menu").style.lineHeight = "75px";
			document.getElementById("subMenu").style.top = "60px";
		}else{
			document.getElementById("navMenu").style.top = "-150px";
			document.getElementById("subMenu").style.top = "-300px";
		}
	}

	scroll1=scroll2;
}


var rutasImagenes = [];
var numImagen =0;

function lightBox(){
	var listaImagenes = document.getElementsByClassName("contenedorImgGaleria");


	for(var i=0; i<listaImagenes.length; i++){
 		rutasImagenes.push(listaImagenes[i].src);
 	}


 	for(var i=0; i<listaImagenes.length; i++){
 		listaImagenes[i].addEventListener('click', abrirLightBox);
 	}


 	function abrirLightBox(){
 		var rutaImgPulsada = event.currentTarget.src;

 		numImagen = rutasImagenes.indexOf(rutaImgPulsada);
 	
 		document.getElementById("boxLightBox").innerHTML = "<img src=" + rutasImagenes[numImagen] + " class='imagenLightBox'>";
 		document.getElementById("lightBox").style.display="block";
		document.documentElement.style.overflow="hidden";

		cerrarLightBox();
 	}


 	function cerrarLightBox(){

 		window.addEventListener("click", function(event){

 			if(!event.target.matches(".imagenLightBox") && !event.target.matches(".contenedorImgGaleria") && !event.target.matches(".botonesLB") && !event.target.matches(".fa-solid")){
 				document.getElementById("lightBox").style.display="none";
				document.documentElement.style.overflowY="auto";

 			}

 		});
 	}

}

function siguienteImagen(){

	numImagen++;

	if(numImagen==rutasImagenes.length){
		numImagen=0;
	}
	document.getElementById("boxLightBox").innerHTML = "<img src=" + rutasImagenes[numImagen] + " class='imagenLightBox'>";
}

function anteriorImagen(){

	numImagen--;

	if(numImagen<0){
		numImagen=rutasImagenes.length-1;	
	}
	
	document.getElementById("boxLightBox").innerHTML = "<img src=" + rutasImagenes[numImagen] + " class='imagenLightBox'>";
	
}

// Empieza la seccón de pestañas

function activarPestana(pestanaActiva, nombrePestana){

	var contenidoPestana = document.getElementsByClassName("contenedorPestanas");
	for(var i=0; i<contenidoPestana.length; i++){
		contenidoPestana[i].style.display = "none";
	}

	var pestanas = document.getElementsByClassName("etiquetaPestanas");
	for (var i=0; i<pestanas.length; i++){
		pestanas[i].classList.remove("pestanaActiva");
	}

	var servicios = document.getElementsByClassName("servicio");
	for (var i=0; i<servicios.length; i++){
		servicios[i].classList.remove("servicioAnimado");
	}
	
	document.getElementById(pestanaActiva).style.display = "block";

	document.getElementById(nombrePestana).classList.add("pestanaActiva");

	var serviciosC = document.getElementById(pestanaActiva).children;
	for(var i=0; i<serviciosC.length; i++){
		serviciosC[i].classList.add("servicioAnimado");
	}
}