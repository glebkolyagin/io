var whichimage = 1;
var step = 1;
var r = 0;
var isButtonPaused;
var playpausevalue;
var thisTimeout;
var timerVal = 6200;
var howManyRevolutions = 100;
// =========================================================================================
var numOfItems = 6;

//var image1=new Image();
//image1.src="/imageserver/dmv/images/site/home/vets.jpg";
//image1.alt="DMV Salutes Active Military and Veterans";

var image1=new Image();
image1.src="/imageserver/dmv/images/site/home/slider1.jpg";
image1.alt="DMV Android & iPhone Applications";

var image2=new Image();
image2.src="/imageserver/dmv/images/site/home/slider2.jpg";
image2.alt="DMV's New Virtual Hold Feature";

var image3=new Image();
image3.src="/imageserver/dmv/images/site/home/slider3.jpg";
image3.alt="Save Time at one of our Self Service Terminals";

var image4=new Image();
image4.src="/imageserver/dmv/images/site/home/slider4.jpg";
image4.alt="Visit Us on Face Book";

var image5=new Image();
image5.src="/imageserver/dmv/images/site/home/driv_less.jpg";
image5.alt="View Driving lessons on DMV's You Tube Channel";

var image6=new Image();
image6.src="/imageserver/dmv/images/site/home/senior_ombud_en.jpg";
image6.alt="Information about DMV's Senior Driver Ombudsman Program";

function slideit() {

	if (!document.images)
		return;

	document.getElementById("slide").src = eval("image"+step+".src");
	document.getElementById("slide").alt = eval("image"+step+".alt");
		whichimage = step;

	if (step < numOfItems) {
		step++;
	}
	else {
		step=1;
		r++;
	}
	    

	if (r < howManyRevolutions) {
		thisTimeout = setTimeout("slideit()",timerVal);
	}
	else {
		document.images.slide.src = image01.src;
		document.images.slide.alt = image01.alt;
		whichimage = 0;
		clearTimeout(thisTimeout);
	}
}
	
function slidelink(){

	//if (whichimage==1) {
	//	window.location="http://www.dmv.ca.gov/coi/veterans/veterans.htm";
	//}
	 if (whichimage==1) {
		window.location="http://apps.dmv.ca.gov/mobiledevices/iphone/dmvnow/default.htm";
	}
	else if (whichimage==2) {
		window.location="http://www.youtube.com/watch?v=VVtFpszVY68";
	}	
	else if (whichimage==3) {
		window.location="http://www.dmv.ca.gov/fo/fo_sst.htm";
	}	
	else if (whichimage==4) {
		window.location="http://www.facebook.com/CADMV";
	}	
	else if (whichimage==5) {
		window.location="http://www.youtube.com/user/CaliforniaDMV?feature=mhee";
	}
	else if (whichimage==6) {
		window.location="http://www.youtube.com/watch?v=ZqMnjn6vO20&feature=youtu.be";
	}		
	else if (whichimage==0) {
		window.location="http://apps.dmv.ca.gov/fo/fo_sst.htm";
	}
}



// =================================== spanish slider ==================
var numOfESItems = 6;

//var image1es=new Image();
//image1es.src="/imageserver/dmv/images/site/home/vets_span.jpg";
//image1es.alt="El DMV saluda a los militares activos y veteranos";

var image1es=new Image();
image1es.src="/imageserver/dmv/images/site/home/slider1es.jpg";
image1es.alt="Hacemos Su Vida Mas Facil - Aplicaciones Android & iPhone";

var image2es=new Image();
image2es.src="/imageserver/dmv/images/site/home/slider2es.jpg";
image2es.alt="Se Regresara Su Llamada - Use el NUEVO sistema de Espera Virtual";

var image3es=new Image();
image3es.src="/imageserver/dmv/images/site/home/slider3es.jpg";
image3es.alt="Ahorre Tiempo - Terminales de Auto Servicio";

var image4es=new Image();
image4es.src="/imageserver/dmv/images/site/home/slider4es.jpg";
image4es.alt="Conectese Con Nosotros - DMV Facebook";

var image5es=new Image();
image5es.src="/imageserver/dmv/images/site/home/slider3es.jpg";
image5es.alt="Ahorre Tiempo - Terminales de Auto Servicio";

var image6es=new Image();
image6es.src="/imageserver/dmv/images/site/home/senior_ombud_es.jpg";
image6es.alt="Programa de Mediador para Conductores de Edad Avanzada";

function slideites() {

	if (!document.images)
		return;

	document.getElementById("slide").src = eval("image"+step+"es.src");
	document.getElementById("slide").alt = eval("image"+step+"es.alt");
	whichimage = step;

	if (step < numOfESItems) {
		step++;
	}
	else {
		step=1;
		r++;
	}
	    

	if (r < howManyRevolutions) {
		thisTimeout = setTimeout("slideites()",timerVal);
	}
	else {
		document.images.slide.src = image01es.src;
		document.images.slide.alt = image01es.alt;
		whichimage = 0;
		clearTimeout(thisTimeout);
	}
}
	
function slidelinkes(){

	//specify corresponding links below


	//if (whichimage==1) {
	//	window.location="http://www.dmv.ca.gov/coi/veterans/veterans.htm";
	//}
	 if (whichimage==1) {
		window.location="http://apps.dmv.ca.gov/mobiledevices/iphone/dmvnow/default.htm";
	}	
	else if (whichimage==2) {
		window.location="http://dmv.ca.gov/pubs/newsrel/newsrel11/2011_20.htm?lang=es";
	}	
	else if (whichimage==3) {
		window.location="http://esapps.dmv.ca.gov/fo/fo_sst.htm";
	}	
	else if (whichimage==4) {
		window.location="http://www.facebook.com/CADMV";
	}	
	else if (whichimage==5) {
		window.location="http://esapps.dmv.ca.gov/fo/fo_sst.htm";
	}
	else if (whichimage==6) {
		window.location="http://www.youtube.com/watch?v=ZqMnjn6vO20&feature=youtu.be";
	}	
	else if (whichimage==0) {
		window.location="http://esapps.dmv.ca.gov/fo/fo_sst.htm";
	}	


}

