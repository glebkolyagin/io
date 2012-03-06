/*****************************************************************/
//global variables



var mapWindow; 
var showcalifornia = 0;
var imgsrc = "";


/*****************************************************************/
function show_map() {
		//form object passed in the function
		var formObject = arguments[0];
		
		//var vWindow = window.open("", "map", 
		//		"width=800,height=700,status=no,resizable=yes,scrollbars=yes,toolbar=no,left=0,top=0");
		
		
		var vWindow = window.open("","map",  				"status=no,height=550,width=800,scrollbars,resizable=yes,toolbar=no,left=0,top=0");
		
		
			
		vWindow.opener = self;
		mapWindow = vWindow;
		showcalifornia = 1;
		

	displayMap(formObject);
	
}


/******************************************************************/

function displayMap(formObject, imageFile) {
	var WinMap = mapWindow;

	globalMap = new map_constructor(formObject,imageFile, WinMap);
	setTimeout('globalMap.writeMap()',50);
    //globalMap.writeMap();
}

/*********************************************************************************/

function map_constructor(formObject,imageFile, WinMap) {
	
	
	this.globalVarMap = WinMap;
	
	
	this.WHO = "window.opener.";
	this.imgsrc = imageFile;

	this.gReturnItem = formObject;
	this.gVarLinkColr="black";
	this.gVarTitle = "Pick a DMV Office";
	
	
}

/**********************************************************************************/

map_constructor.prototype.writeMap = function() {
	
	this.globalVarMap.document.open();

	// Setup the page...
	this.globalVarMap.document.writeln("<html>");
	this.globalVarMap.document.writeln("<head><title>Map</title>");
	this.globalVarMap.document.writeln("</head>");

	this.globalVarMap.document.writeln("<body>"); 
			
	if(showcalifornia==1){
		
		showcalifornia=0;
		this.globalVarMap.document.writeln("<img src=\"images/CA.jpg\" width=742 height=435 border=2 usemap=#CATARG>" +
	      		"<map name=CATARG>");

		//Eureka
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=58,43,205,157" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','eureka.jpg');>");	      		

		//alturas
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=206,49,281,122" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','alturas.jpg');>");
					
		//fort Bragg
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=44,161,132,282" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','lakeport.jpg');>");

		//chico
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=135,155,201,218" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','chico.jpg');>");
		//susanville
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=205,124,279,202" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','susanville.jpg');>");
					
		//Sacramento
		this.globalVarMap.document.writeln(
	      		"<area shape=poly coords=131,223,201,222,200,205,242,207,242,256,224,264,221,281,134,278,132,222 " +  
	      		" HREF= javascript:" + this.WHO + "displayMap(" + 
	      		"'" + this.gReturnItem + "','sacramento.jpg');>"); 
				
				
		//tahoe	
      	this.globalVarMap.document.writeln(
		      		"<area shape=poly coords=251,211,249,255,229,264,226,284,303,283,279,250,278,206,249,209,250,210" +  
		      		" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','tahoe.jpg');>");
					
					
		//santa rosa / napa
		this.globalVarMap.document.writeln(
					"<area shape=poly coords=65,286,163,286,164,315,193,315,192,338,156,335,144,351,118,352,66,288" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','novato.jpg');>");
					
					
		//vacaville
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=164,284,261,315" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','vacaville.jpg');>");
					
		//san francisco
		this.globalVarMap.document.writeln(	      		
					"<area shape=\"rect\" coords=\"70,352,157,370\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 121;window.close(); return false;\">"); 		

		//peninsula	
		this.globalVarMap.document.writeln(
					"<area shape=rect coords=70,372,137,390" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','sfpen.jpg');>");


					
		//oakland
		this.globalVarMap.document.writeln(
					"<area shape=poly coords=157,351,170,338,210,339,243,352,245,372,180,371,156,352" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','oakland.jpg');>");					

		//sonora & stockton
		this.globalVarMap.document.writeln(
					"<area shape=poly coords=216,317,215,336,251,348,256,380,385,361,327,296,281,293,281,314,215,317" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
					"'" + this.gReturnItem + "','sonora.jpg');>");
					
		//san jose
		this.globalVarMap.document.writeln(
		      		"<area shape=rect coords=139,376,255,398" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			      	"'" + this.gReturnItem + "','watsonville.jpg');>");
			      		
		//bishop
		this.globalVarMap.document.writeln(      		
			    "<area shape=\"rect\" coords=\"316,373,414,396\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 11;window.close(); return false;\">"); 		

		//santa cruz
		this.globalVarMap.document.writeln(
	      			"<area shape=rect coords=304,37,410,79" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','watsonville.jpg');>");
				
		//coalinga
		this.globalVarMap.document.writeln(
	      			"<area shape=rect coords=333,97,463,154" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','kingcity.jpg');>");

		//fresno
		this.globalVarMap.document.writeln(
	      			"<area shape=rect coords=436,31,534,95" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','fresno.jpg');>");

		//sanluisobispo
		this.globalVarMap.document.writeln(
	      			"<area shape=poly coords=372,175,492,175,508,217,385,224,360,177,374,176" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','sanluisobispo.jpg');>");

		//poterville /bakersfield     		
		this.globalVarMap.document.writeln(
      				"<area shape=poly coords=501,121,507,182,517,212,609,212,593,116,511,121,512,121" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','bakersfield.jpg');>");	      		

		//needles
		this.globalVarMap.document.writeln(
			"<area shape=\"rect\" coords=\"630,212,694,242\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 80;window.close(); return false; \">"); 		

		//ventura
		this.globalVarMap.document.writeln(
	      			"<area shape=rect coords=400,226,535,284" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','ventura.jpg');>");

		//barstow
		this.globalVarMap.document.writeln(
		      		"<area shape=rect coords=543,214,625,252" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			      	"'" + this.gReturnItem + "','victorville.gif');>");
			
		//twentynine palms
		this.globalVarMap.document.writeln(
			"<area shape=\"rect\" coords=\"562,254,686,275\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 151;window.close(); return false;\">"); 		
			
		//la
		this.globalVarMap.document.writeln(
		      		"<area shape=rect coords=451,283,577,330" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			    	"'" + this.gReturnItem + "','la.gif');>");
			
		
		//riverside
		this.globalVarMap.document.writeln(
	      			"<area shape=rect coords=582,285,663,328" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			    	"'" + this.gReturnItem + "','palmprings.jpg');>");

		//oceanside
		this.globalVarMap.document.writeln(
		      		"<area shape=rect coords=498,331,621,359" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			      	"'" + this.gReturnItem + "','sanclemente.jpg');>");
						
		//sandiego
		this.globalVarMap.document.writeln(
		      		"<area shape=rect coords=524,363,612,398" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
			      	"'" + this.gReturnItem + "','sandiego.gif');>");

		//El centro
		this.globalVarMap.document.writeln(
      				"<area shape=rect coords=616,360,682,392" +  
					" HREF= javascript:" + this.WHO + "displayMap(" + 
		      		"'" + this.gReturnItem + "','brawley.jpg');>");		


						
	      	this.globalVarMap.document.writeln(
						"</map>");
	
	  }  
	  else{
	  	  
	  	if(this.imgsrc == "sacramento.jpg"){
	  		//open map of sacramento area	      		
	      		this.globalVarMap.document.writeln(
	      			"<map name=\"SacramentoMap1\"><area shape=\"rect\" coords=\"75,165,169,211\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 167;window.close(); return false;\">"+ //woodland
			            "<area shape=\"rect\" coords=\"273,445,364,494\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 66;window.close(); return false;\">"+ //lodi
				    "<area shape=\"rect\" coords=\"52,236,128,271\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 28;window.close(); return false;\">"+ //davis
			            "<area shape=\"rect\" coords=\"269,291,436,338\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 114;window.close(); return false;\">"+ //s sacramento
			            "<area shape=\"rect\" coords=\"154,221,269,258\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 113;window.close(); return false;\">"+ //sacramento
			            "<area shape=\"rect\" coords=\"298,201,412,248\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 15;window.close(); return false;\">"+ //carmichael
			            "<area shape=\"rect\" coords=\"436,212,522,246\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 38;window.close(); return false;\">"+ //folsom
			            "<area shape=\"rect\" coords=\"434,130,525,171\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 96;window.close(); return false;\">"+	//placerville
			            "<area shape=\"rect\" coords=\"293,96,388,129\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 112;window.close(); return false;\">"+ //roseville
			            "<area shape=\"rect\" coords=\"407,90,507,118\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 111;window.close(); return false;\">"+ //rocklin
			            "<area shape=\"rect\" coords=\"332,38,452,71\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 4;window.close(); return false;\">"+ //auburn
          			"</map>" +
          			"<img src=\"images/sacramento.jpg\" width=\"574\" height=\"541\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#SacramentoMap1\" ismap>");
	      				
	      				
	      	}
	      	
	      	if(this.imgsrc == "sfpen.jpg"){
	      		this.globalVarMap.document.writeln(
	      		
			  "<map name=\"SFPeninsulaMap5\">" +
			              "<area shape=\"rect\" coords=\"342,331,443,370\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 129;window.close(); return false;\">"+ //Santaclara
			              "<area shape=\"rect\" coords=\"122,203,261,248\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 106;window.close(); return false;\">"+ //Redwoodcity
			              "<area shape=\"rect\" coords=\"70,139,216,182\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 124;window.close(); return false;\">"+ //Sanmateo
			              "<area shape=\"rect\" coords=\"282,143,389,195\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 41;window.close(); return false;\">"+ //Fremont
			              "<area shape=\"rect\" coords=\"332,44,434,86\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 52;window.close(); return false;\">"+ //Hayward
			              "<area shape=\"rect\" coords=\"44,33,154,64\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 27;window.close(); return false;\">"+ //Dalycity
          			      "</map>" +
          			      "<img src=\"images/sfpen.jpg\" width=\"475\" height=\"473\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#SFPeninsulaMap5\" ismap>"); 
			   
	      	}
	      	if(this.imgsrc == "brawley.jpg"){ 		
			    this.globalVarMap.document.writeln(  		
			     "<map name=\"BrawleyMap26\">" +
			               "<area shape=\"rect\" coords=\"56,348,180,408\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 31;window.close(); return false;\">"+ //Elcentro
			               "<area shape=\"rect\" coords=\"153,277,276,337\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 13;window.close(); return false;\">"+ //Brawley
			               "<area shape=\"rect\" coords=\"285,79,440,160\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 12;window.close(); return false;\">"+ //Blythe
        				"</map>" +
        				"<img src=\"images/brawley.jpg\" width=\"580\" height=\"497\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#BrawleyMap26\" ismap>"); 
			      		
	      	}
	      	if(this.imgsrc == "palmprings.jpg"){
			this.globalVarMap.document.writeln(      		
			"<map name=\"PalmSpringsMap7\">" +
				  "<area shape=\"rect\" coords=\"104,388,259,417\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 118;window.close(); return false;\">"+ //Sanclemente
				  "<area shape=\"rect\" coords=\"109,327,227,365\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 61;window.close(); return false;\">"+ //Lagunahills
				  "<area shape=\"rect\" coords=\"230,321,341,357\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 53;window.close(); return false;\">"+ //Hemet
				  "<area shape=\"rect\" coords=\"86,246,160,279\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 82;window.close(); return false;\">"+ //Norco
				  "<area shape=\"rect\" coords=\"391,315,500,354\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 57;window.close(); return false;\">"+ //Indio
				  "<area shape=\"rect\" coords=\"351,272,425,315\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 89;window.close(); return false;\">"+ //Palmsprings
				  "<area shape=\"rect\" coords=\"302,235,389,267\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 7;window.close(); return false;\">"+ //Banning
				  "<area shape=\"rect\" coords=\"175,235,287,259\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 109;window.close(); return false;\">"+ //Riverside
				  "<area shape=\"rect\" coords=\"263,207,355,235\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 105;window.close(); return false;\">"+ //Redlands
				  "<area shape=\"rect\" coords=\"63,148,180,198\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 102;window.close(); return false;\">"+ //Ranchocucamonga
                                  "<area shape=\"rect\" coords=\"38,281,108,327\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 24;window.close(); return false;\">"+ //Costamesa
                                  "<area shape=\"rect\" coords=\"294,171,401,201\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 39;window.close(); return false;\">"+ //Fontana
                                  "<area shape=\"rect\" coords=\"298,134,451,165\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 117;window.close(); return false;\">"+ //Sanbernardino
                                  "<area shape=\"rect\" coords=\"226,264,301,303\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 110;window.close(); return false;\">"+ //Riversideeast
				"</map>" +
				"<img src=\"images/palmprings.jpg\" width=\"525\" height=\"492\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#PalmSpringsMap7\" ismap>");

	      	
	      	}
	      	if(this.imgsrc == "sandiego.gif"){
	      		this.globalVarMap.document.writeln(      		
			"<map name=\"SanDiegoMap4\">" +
			  "<area shape=\"rect\" coords=\"52,287,212,315\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 126;window.close(); return false;\">"+ //Sanysidro
			  "<area shape=\"rect\" coords=\"52,261,207,287\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 17;window.close(); return false;\">"+ //Chulavista
			  "<area shape=\"rect\" coords=\"43,225,170,259\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 119;window.close(); return false;\">"+ //Sandiego
			  "<area shape=\"rect\" coords=\"45,183,145,218\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 120;window.close(); return false;\">"+ //Sandiegoclairemont
			  "<area shape=\"rect\" coords=\"202,207,317,235\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 30;window.close(); return false;\">"+ //Elcajon
			  "<area shape=\"rect\" coords=\"180,150,276,165\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 100;window.close(); return false;\">"+ //Poway
			  "<area shape=\"rect\" coords=\"148,88,298,119\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 34;window.close(); return false;\">"+ //Escondido
			  "<area shape=\"rect\" coords=\"62,53,177,78\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 86;window.close(); return false;\">"+ //Oceanside
			"</map>" +
			"<img src=\"images/sandiego.gif\" width=\"533\" height=\"363\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#SanDiegoMap4\" ismap> ");
	      		
			      		
	      	}
	      	if(this.imgsrc == "sanclemente.jpg"){
	      		this.globalVarMap.document.writeln(
	      		"<map name=\"SanClementeMap3\">" +
		          "<area shape=\"rect\" coords=\"365,404,448,440\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 30;window.close(); return false;\">"+ //Elcajon
		          "<area shape=\"rect\" coords=\"357,350,434,387\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 100;window.close(); return false;\">"+ //Poway
		          "<area shape=\"rect\" coords=\"360,297,461,332\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 34;window.close(); return false;\">"+ //Escondido
		          "<area shape=\"rect\" coords=\"195,294,312,333\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 86;window.close(); return false;\">"+ //Oceanside
		          "<area shape=\"rect\" coords=\"106,226,241,273\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 118;window.close(); return false;\">"+ //Sanclemente
		          "<area shape=\"rect\" coords=\"343,191,439,231\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 143;window.close(); return false;\">"+ //Temecula
		          "<area shape=\"rect\" coords=\"217,183,332,220\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 61;window.close(); return false;\">"+ //Lagunahills
		          "<area shape=\"rect\" coords=\"387,107,471,148\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 53;window.close(); return false;\">"+ //Hemet
                          "<area shape=\"rect\" coords=\"41,96,146,135\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 163;window.close(); return false;\">"+ //Westminster
                          "<area shape=\"rect\" coords=\"127,44,215,80\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 127;window.close(); return false;\">"+ //Santaana
                          "<area shape=\"rect\" coords=\"225,39,318,68\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 109;window.close(); return false;\">"+ //Riverside
                          "<area shape=\"rect\" coords=\"246,72,344,107\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 110;window.close(); return false;\">"+ //Riversideeast
                          "<area shape=\"rect\" coords=\"56,153,164,192\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 24;window.close(); return false;\">"+ //Costamesa
		        "</map>" +
		        "<img src=\"images/sanclemente.jpg\" width=\"508\" height=\"475\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#SanClementeMap3\" ismap>");
        
	      		
			      		
	      	}
	      	if(this.imgsrc == "la.gif"){
			   this.globalVarMap.document.writeln(   		
			"<map name=\"LAMap1\">" +
			  "<area shape=\"rect\" coords=\"20,10,86,26\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 81;window.close(); return false;\">"+ //Newhall
			  "<area shape=\"rect\" coords=\"23,30,81,49\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 2;window.close(); return false;\">"+ //Arleta
			  "<area shape=\"rect\" coords=\"115,14,187,30\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 64;window.close(); return false;\">"+ //Lancaster
			  "<area shape=\"rect\" coords=\"114,39,190,56\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 90;window.close(); return false;\">"+ //Palmdale
			  "<area shape=\"rect\" coords=\"12,74,84,96\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem +
			  ".selectedIndex= 166;window.close(); return false;\">"+ //Winnetka
			  "<area shape=\"rect\" coords=\"6,112,70,130\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 155;window.close(); return false;\">"+ //Vannuys
			  "<area shape=\"rect\" coords=\"102,149,166,171\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 47;window.close(); return false;\">"+ //Glendale
			  "<area shape=\"rect\" coords=\"164,130,230,153\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 92;window.close(); return false;\">"+ //Pasadena
			  "<area shape=\"rect\" coords=\"421,165,541,199\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 102;window.close(); return false;\">"+ //Ranchocucamonga
			  "<area shape=\"rect\" coords=\"30,166,99,192\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 55;window.close(); return false;\">"+ //Hollywood
              "<area shape=\"rect\" coords=\"8,195,80,218\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 56;window.close(); return false;\">"+ //Hollywoodwest			  
			  "<area shape=\"poly\" coords=\"9,228,83,233,85,245,25,244,25,256,9,257\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 131;window.close(); return false;\">"+ //=\"Santamonica
			  "<area shape=\"rect\" coords=\"86,216,166,232\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 69;window.close(); return false;\">"+ //Losangeles
              "<area shape=\"rect\" coords=\"169,189,240,211\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 65;window.close(); return false;\">"+ //Lincolnpark 
              "<area shape=\"rect\" coords=\"247,195,302,214\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 33;window.close(); return false;\">"+ //El Monte
			  "<area shape=\"rect\" coords=\"62,250,140,275\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 26;window.close(); return false;\">"+ //Culver City
			  "<area shape=\"rect\" coords=\"230,245,305,270\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 77;window.close(); return false;\">"+ //Montebello
			  "<area shape=\"rect\" coords=\"307,220,380,242\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 162;window.close(); return false;\">"+ //Westcovina
			  "<area shape=\"rect\" coords=\"406,219,462,246\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 98;window.close(); return false;\">"+ //Pomona

			  "<area shape=\"rect\" coords=\"42,287,110,313\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 58;window.close(); return false;\">"+ //Inglewood
			  "<area shape=\"rect\" coords=\"122,285,200,308\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 9;window.close(); return false;\">"+ //Bellgardens
			  "<area shape=\"rect\" coords=\"295,280,360,305\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 164;window.close(); return false;\">"+ //Whittier
			  "<area shape=\"rect\" coords=\"46,324,110,347\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 51;window.close(); return false;\">"+ //Hawthorn
			  "<area shape=\"rect\" coords=\"164,335,224,350\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 21;window.close(); return false;\">"+ //Compton
			  "<area shape=\"rect\" coords=\"228,345,297,365\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 10;window.close(); return false;\">"+ //Bellflower
			  "<area shape=\"rect\" coords=\"305,358,366,383\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 44;window.close(); return false;\">"+ //Fullerton
			  "<area shape=\"rect\" coords=\"66,381,124,411\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 145;window.close(); return false;\">"+ //Torrance
			  "<area shape=\"rect\" coords=\"84,455,145,479\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 125;window.close(); return false;\">"+ //Sanpedro
			  "<area shape=\"rect\" coords=\"138,433,220,452\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 68;window.close(); return false;\">"+ //Longbeach
			  "<area shape=\"rect\" coords=\"280,442,366,465\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 163;window.close(); return false;\">"+ //Westminster
			  "<area shape=\"rect\" coords=\"375,453,459,474\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 127;window.close(); return false;\">"+ //Santaana




			"</map>"+
			"<img src=\"images/la.gif\" width=\"550\" height=\"500\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#LAMap1\" ismap>");
        
			      		
			      		
	      	}
	      	if(this.imgsrc == "ventura.jpg"){
			this.globalVarMap.document.writeln(     		
			"<map name=\"VenturaMap10\">" +
			  "<area shape=\"rect\" coords=\"339,315,431,346\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 131;window.close(); return false;\">"+ //Santamonica
			  "<area shape=\"rect\" coords=\"198,278,286,303\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 88;window.close(); return false;\">"+ //Oxnard
			  "<area shape=\"rect\" coords=\"202,246,334,264\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 144;window.close(); return false;\">"+ //Thousandoaks
			  "<area shape=\"rect\" coords=\"158,224,240,246\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 156;window.close(); return false;\">"+ //Ventura
			  "<area shape=\"rect\" coords=\"287,212,368,230\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 137;window.close(); return false;\">"+ //Simivalley
			  "<area shape=\"rect\" coords=\"232,189,323,208\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 132;window.close(); return false;\">"+ //Santapaula
			  "<area shape=\"rect\" coords=\"48,178,116,215\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 48;window.close(); return false;\">"+ //Goleta
			  "<area shape=\"rect\" coords=\"134,174,229,195\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 128;window.close(); return false;\">"+ //Santabarbara
			"</map>" +
			"<img src=\"images/ventura.jpg\" width=\"479\" height=\"475\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#VenturaMap10\" ismap>");
		      		
	      	}
	      	if(this.imgsrc == "victorville.gif"){
			this.globalVarMap.document.writeln(       		
			"<map name=\"VictorvilleMap11\">" +
				  "<area shape=\"rect\" coords=\"10,10,120,75\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 62;window.close(); return false;\">"+ //Lakeisabella
				  "<area shape=\"rect\" coords=\"200,45,300,85\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 108;window.close(); return false;\">"+ //Ridgecrest
				  "<area shape=\"rect\" coords=\"300,200,400,270\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 8;window.close(); return false;\">"+ //Barstow
				  "<area shape=\"rect\" coords=\"300,350,400,400\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 157;window.close(); return false;\">"+ //Victorville
				  "<area shape=\"rect\" coords=\"100,300,200,330\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 64;window.close(); return false;\">"+ //Lancaster
				  "<area shape=\"rect\" coords=\"10,350,100,380\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 90;window.close(); return false;\">"+ //Palmdale
				"</map>" +"<img src=\"images/victorville.gif\" width=\"428\" height=\"411\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#VictorvilleMap11\" ismap>"); 
	      		
			      		
	      	}
	      	if(this.imgsrc == "bakersfield.jpg"){
	      		this.globalVarMap.document.writeln(	      		
			"<map name=\"BakersfieldMap17\">" +
			  "<area shape=\"rect\" coords=\"151,314,227,351\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 3;window.close(); return false;\">"+ //Arvin
			  "<area shape=\"rect\" coords=\"37,266,141,303\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 5;window.close(); return false;\">"+ //Bakersfield
                          "<area shape=\"rect\" coords=\"42,309,129,365\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 6;window.close(); return false;\">"+ //Bakersfieldsouthwest
			  "<area shape=\"rect\" coords=\"80,228,163,263\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 136;window.close(); return false;\">"+ //Shafter
			  "<area shape=\"rect\" coords=\"275,220,371,259\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 108;window.close(); return false;\">"+ //Ridgecrest
			  "<area shape=\"rect\" coords=\"157,172,278,220\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 62;window.close(); return false;\">"+ //lakeisabella
			  "<area shape=\"rect\" coords=\"68,161,156,200\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 29;window.close(); return false;\">"+ //Delano
			  "<area shape=\"rect\" coords=\"100,83,218,130\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 99;window.close(); return false;\">"+ //Porterville
			  "<area shape=\"rect\" coords=\"43,61,134,82\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 148;window.close(); return false;\">"+ //Tulare
			  "<area shape=\"rect\" coords=\"45,33,134,60\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 158;window.close(); return false;\">"+ //Visalia
			"</map>" +
			"<img src=\"images/bakersfield.jpg\" width=\"400\" height=\"401\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#BakersfieldMap17\" ismap>" +"<map name=\"BakersfieldMap17\">");

			      		
	      	}
	      	if(this.imgsrc == "sanluisobispo.jpg"){
	      		this.globalVarMap.document.writeln(
	      		"<map name=\"San Luis ObispoMap2\">" +
			          "<area shape=\"rect\" coords=\"179,401,283,439\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 67;window.close(); return false;\">"+ //Lompoc
			          "<area shape=\"rect\" coords=\"186,312,314,356\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 130;window.close(); return false;\">"+ //Santamaria
			          "<area shape=\"rect\" coords=\"144,212,297,262\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 123;window.close(); return false;\">"+ //Sanluisobispo
			          "<area shape=\"rect\" coords=\"380,267,446,312\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 142;window.close(); return false;\">"+ //Taft
			          "<area shape=\"rect\" coords=\"34,99,157,145\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 93;window.close(); return false;\">"+ //Pasorobles
			        "</map>" +
			        "<img src=\"images/sanluisobispo.jpg\" width=\"495\" height=\"486\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#San Luis ObispoMap2\" ismap>" );
		      		
	      	}
	      	if(this.imgsrc == "kingcity.jpg"){
	      		this.globalVarMap.document.writeln(
	      		  "<map name=\"King CityMap5\">" +
		          "<area shape=\"rect\" coords=\"190,353,310,414\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 93;window.close(); return false;\">"+ //Pasorobles
		          "<area shape=\"rect\" coords=\"542,388,642,440\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 136;window.close(); return false;\">"+ //Shafter
		          "<area shape=\"rect\" coords=\"537,205,626,245\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 148;window.close(); return false;\">"+ //Tulare
		          "<area shape=\"rect\" coords=\"467,151,580,192\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 50;window.close(); return false;\">"+ //=\"../listing_h.htm#Hanford
		          "<area shape=\"rect\" coords=\"475,31,598,72\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 42;window.close(); return false;\">"+ //Fresno
		          "<area shape=\"rect\" coords=\"305,225,412,275\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 19;window.close(); return false;\">"+ //Coalinga
		          "<area shape=\"rect\" coords=\"191,188,312,230\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 60;window.close(); return false;\">"+ //Kingcity
		          "<area shape=\"rect\" coords=\"53,53,167,91\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 115;window.close(); return false;\">"+ //Salinas
		        "</map>" +
		        "<img src=\"images/kingcity.jpg\" width=\"678\" height=\"480\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#King CityMap5\" ismap>" +"<br>");
	      		
			      		
	      	}
		if(this.imgsrc == "fresno.jpg"){
			this.globalVarMap.document.writeln(      		
			  "<map name=\"FresnoMap4\">" +
			  "<area shape=\"rect\" coords=\"36,388,129,433\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 19;window.close(); return false;\">"+ //Coalinga
			  "<area shape=\"rect\" coords=\"294,390,384,426\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 148;window.close(); return false;\">"+ //Tulare
			  "<area shape=\"rect\" coords=\"344,332,449,376\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 158;window.close(); return false;\">"+ //Visalia
			  "<area shape=\"rect\" coords=\"178,336,274,390\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 50;window.close(); return false;\">"+ //=\"../listing_h.htm#Hanford
			  "<area shape=\"rect\" coords=\"338,256,448,303\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 107;window.close(); return false;\">"+ //Reedley
			  "<area shape=\"rect\" coords=\"263,197,357,251\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 18;window.close(); return false;\">"+ //Clovis
			  "<area shape=\"rect\" coords=\"155,245,261,292\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 42;window.close(); return false;\">"+ //Fresno
                          "<area shape=\"rect\" coords=\"146,196,250,240\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 43;window.close(); return false;\">"+ //Fresnonorth
			  "<area shape=\"rect\" coords=\"168,134,282,182\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 72;window.close(); return false;\">"+ //Madera
			  "<area shape=\"rect\" coords=\"44,35,178,82\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 75;window.close(); return false;\">"+ //Merced
			"</map>" +
			"<img src=\"images/fresno.jpg\" width=\"494\" height=\"475\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#FresnoMap4\" ismap>");

			      		
			      		
	      	}
	      	if(this.imgsrc == "watsonville.jpg"){
	      	    	this.globalVarMap.document.writeln(   
			"<map name=\"WatsonvilleMap6\">" +
			    "<area shape=\"rect\" coords=\"288,189,388,227\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 54;window.close(); return false;\">"+ //=\"../listing_h.htm#Hollister
			    "<area shape=\"rect\" coords=\"216,245,315,285\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 115;window.close(); return false;\">"+ //Salinas
			    "<area shape=\"rect\" coords=\"88,255,193,300\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 135;window.close(); return false;\">"+ //Seaside
			    "<area shape=\"rect\" coords=\"92,188,211,232\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 160;window.close(); return false;\">"+ //Watsonville
			    "<area shape=\"rect\" coords=\"141,137,235,181\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 14;window.close(); return false;\">"+ //Capitola
			    "<area shape=\"rect\" coords=\"250,139,335,183\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 46;window.close(); return false;\">"+ //Gilroy
			    "<area shape=\"rect\" coords=\"215,101,340,134\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 134;window.close(); return false;\">"+ //Santateresa
			    "<area shape=\"rect\" coords=\"52,80,158,118\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 71;window.close(); return false;\">"+ //Losgatos
			    "<area shape=\"rect\" coords=\"88,30,188,54\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 122;window.close(); return false;\">"+ //Sanjose
			  "<area shape=\"rect\" coords=\"402,152,484,206\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 70;window.close(); return false;\">"+ //losbanos
			  "</map>" +
			  "<img src=\"images/watsonville.jpg\" width=\"482\" height=\"395\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#WatsonvilleMap6\" ismap>"); 
			      		
					      		
	      	}
	      	if(this.imgsrc == "oakland.jpg"){
			this.globalVarMap.document.writeln(   		      		
			"<map name=\"OaklandMap1\">" +
			  "<area shape=\"rect\" coords=\"322,400,437,432\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 41;window.close(); return false;\">"+ //Fremont
			  "<area shape=\"rect\" coords=\"394,314,499,365\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 97;window.close(); return false;\">"+ //Pleasanton
			  "<area shape=\"rect\" coords=\"256,337,353,376\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 52;window.close(); return false;\">"+ //=\"../listing_h.htm#Hayward
			  "<area shape=\"rect\" coords=\"276,130,413,177\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 159;window.close(); return false;\">"+ //Walnutcreek
			  "<area shape=\"rect\" coords=\"42,201,151,246\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 84;window.close(); return false;\">"+ //Oakland
                          "<area shape=\"rect\" coords=\"64,254,172,304\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 85;window.close(); return false;\">"+ //Oaklandcoliseum
			  "<area shape=\"rect\" coords=\"89,110,195,155\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 32;window.close(); return false;\">"+ //Elcerrito
			  "<area shape=\"rect\" coords=\"298,66,407,106\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 22;window.close(); return false;\">"+ //Concord
			  "<area shape=\"rect\" coords=\"254,38,359,59\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 95;window.close(); return false;\">"+ //Pittsburg
			"</map>" +"<img src=\"images/oakland.jpg\" width=\"540\" height=\"529\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#OaklandMap1\" ismap>");
			      		
	      	}
	      	if(this.imgsrc == "sonora.jpg"){
			this.globalVarMap.document.writeln(		      		
			 "<map name=\"SonoraMap6\">" +
			  "<area shape=\"rect\" coords=\"170,396,283,435\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 75;window.close(); return false;\">"+ //Merced
			  "<area shape=\"rect\" coords=\"161,336,263,372\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 150;window.close(); return false;\">"+ //Turlock
			  "<area shape=\"rect\" coords=\"286,339,401,379\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 74;window.close(); return false;\">"+ //Mariposa
			  "<area shape=\"rect\" coords=\"39,280,88,328\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 146;window.close(); return false;\">"+ //Tracy
			  "<area shape=\"rect\" coords=\"125,289,236,327\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 76;window.close(); return false;\">"+ //Modesto
			  "<area shape=\"rect\" coords=\"70,235,179,273\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 73;window.close(); return false;\">"+ //Manteca
			  "<area shape=\"rect\" coords=\"35,187,165,231\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 140;window.close(); return false;\">"+ //Stockton
			  "<area shape=\"rect\" coords=\"73,130,152,178\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 66;window.close(); return false;\">"+ //Lodi
			  "<area shape=\"rect\" coords=\"279,191,377,228\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 138;window.close(); return false;\">"+ //Sonora
			  "<area shape=\"rect\" coords=\"211,142,338,182\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 116;window.close(); return false;\">"+ //Sanandreas
			  "<area shape=\"rect\" coords=\"184,79,289,124\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 59;window.close(); return false;\">"+ //Jackson
			"</map>" +
			"<img src=\"images/sonora.jpg\" width=\"474\" height=\"475\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#SonoraMap6\" ismap>"); 				      		
					      		
	      	}
	      	if(this.imgsrc == "novato.jpg"){
	      		this.globalVarMap.document.writeln(
	      		 "<map name=\"NovatoMap3\">" +
			          "<area shape=\"rect\" coords=\"55,382,198,432\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 23;window.close(); return false;\">"+ //Cortemadera
			          "<area shape=\"rect\" coords=\"313,391,426,437\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 32;window.close(); return false;\">"+ //Elcerrito
			          "<area shape=\"rect\" coords=\"54,222,154,260\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 83;window.close(); return false;\">"+ //Novato
			          "<area shape=\"rect\" coords=\"84,98,202,140\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 94;window.close(); return false;\">"+ //Petaluma
			          "<area shape=\"rect\" coords=\"363,208,463,260\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 154;window.close(); return false;\">"+ //Vallejo
			          "<area shape=\"rect\" coords=\"322,48,407,86\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 79;window.close(); return false;\">"+ //Napa
			          "<area shape=\"rect\" coords=\"29,40,161,73\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 133;window.close(); return false;\">"+ //Santarosa
			        "</map>" +
			        "<img src=\"images/novato.jpg\" width=\"495\" height=\"486\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#NovatoMap3\" ismap>"); 
        			      		
					      		
	      	}
	      	if(this.imgsrc == "vacaville.jpg"){
	      		this.globalVarMap.document.writeln(
	      		 "<map name=\"VacavilleMap9\">" +
			          "<area shape=\"rect\" coords=\"138,407,235,440\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 36;window.close(); return false;\">"+ //Fairfield
			          "<area shape=\"rect\" coords=\"41,372,115,409\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 79;window.close(); return false;\">"+ //Napa
			          "<area shape=\"rect\" coords=\"188,317,295,351\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 153;window.close(); return false;\">"+ //Vacaville
			          "<area shape=\"rect\" coords=\"456,197,629,240\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 114;window.close(); return false;\">"+ //Sacramentosouth
			          "<area shape=\"rect\" coords=\"419,137,521,179\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 28;window.close(); return false;\">"+ //Davis
			          "<area shape=\"rect\" coords=\"405,37,548,93\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 167;window.close(); return false;\">"+ //Woodland
			        "</map>" +
			        "<img src=\"images/vacaville.jpg\" width=\"677\" height=\"482\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#VacavilleMap9\" ismap>");			      		
					      		
	      	}
	      	if(this.imgsrc == "lakeport.jpg"){
					      		
			this.globalVarMap.document.writeln(
			"<map name=\"LakeportMap2\">" +
				  "<area shape=\"rect\" coords=\"240,435,361,466\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 94;window.close(); return false;\">"+ //Petaluma
				  "<area shape=\"rect\" coords=\"464,429,547,463\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 36;window.close(); return false;\">"+ //Fairfield
				  "<area shape=\"rect\" coords=\"324,408,402,436\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 79;window.close(); return false;\">"+ //Napa
				  "<area shape=\"rect\" coords=\"407,380,498,412\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 153;window.close(); return false;\">"+ //Vacaville
				  "<area shape=\"rect\" coords=\"205,372,320,410\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 133;window.close(); return false;\">"+ //Santarosa
				  "<area shape=\"rect\" coords=\"442,122,531,158\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 20;window.close(); return false;\">"+ //Colusa
				  "<area shape=\"rect\" coords=\"168,204,283,251\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 63;window.close(); return false;\">"+ //Lakeport
				  "<area shape=\"rect\" coords=\"129,156,210,196\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 152;window.close(); return false;\">"+ //Ukiah
				  "<area shape=\"rect\" coords=\"52,63,165,102\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 40;window.close(); return false;\">"+ //Fortbrag
				"</map>" +
				"<img src=\"images/lakeport.jpg\" width=\"578\" height=\"510\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#LakeportMap2\" ismap>");			      		
					      		
	      	}
	      	if(this.imgsrc == "chico.jpg"){
			this.globalVarMap.document.writeln(		      		
			 "<map name=\"ChicoMap31\">" +
			  "<area shape=\"rect\" coords=\"233,275,347,319\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 87;window.close(); return false;\">"+ //Oroville
			  "<area shape=\"rect\" coords=\"238,405,356,445\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 169;window.close(); return false;\">"+ //Yubacity
			  "<area shape=\"rect\" coords=\"131,373,225,419\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 20;window.close(); return false;\">"+ //Colusa
			  "<area shape=\"rect\" coords=\"264,363,396,399\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 49;window.close(); return false;\">"+ //Grassvalley
			  "<area shape=\"rect\" coords=\"88,289,181,328\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 165;window.close(); return false;\">"+ //Willows
			  "<area shape=\"rect\" coords=\"136,263,212,287\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 16;window.close(); return false;\">"+ //Chico
			  "<area shape=\"rect\" coords=\"179,213,276,247\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 91;window.close(); return false;\">"+ //Paradise
			  "<area shape=\"rect\" coords=\"74,77,206,132\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 103;window.close(); return false;\">"+ //Redbluff
			"</map>" +
			"<img src=\"images/chico.jpg\" width=\"483\" height=\"487\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#ChicoMap31\" ismap>");
					      		
	      	}
	      	if(this.imgsrc == "susanville.jpg"){
			this.globalVarMap.document.writeln(					      		
			"<map name=\"SusanvilleMap7\">" +
			    "<area shape=\"rect\" coords=\"94,351,204,412\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 101;window.close(); return false;\">"+ //Quincy
			    "<area shape=\"rect\" coords=\"202,198,353,264\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 141;window.close(); return false;\">"+ //Susanville
			    "<area shape=\"rect\" coords=\"68,41,227,96\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 37;window.close(); return false;\">"+ //Fallrivermills
			  "</map>" +
			  "<img src=\"images/susanville.jpg\" width=\"446\" height=\"476\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#SusanvilleMap7\" ismap>"); 
			  
	      	}
	      	if(this.imgsrc == "alturas.jpg"){
			this.globalVarMap.document.writeln(				      		
			 "<map name=\"AlturasMap4\">" +
			  "<area shape=\"rect\" coords=\"94,245,286,322\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 37;window.close(); return false;\">"+ //fallrivermills
			  "<area shape=\"rect\" coords=\"262,135,359,189\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 1;window.close(); return false;\">"+ //alturas
			  "<area shape=\"rect\" coords=\"108,33,245,73\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 149;window.close(); return false;\">"+ //tulelake
			"</map>" +
			"<img src=\"images/alturas.jpg\" width=\"390\" height=\"375\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#AlturasMap4\" ismap>"); 
							      		
							      		
	      	}
	      	if(this.imgsrc == "eureka.jpg"){
	      		this.globalVarMap.document.writeln(
	      		"<map name=\"EurekaMap3\">" +
			          "<area shape=\"rect\" coords=\"71,40,193,76\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 25;window.close(); return false;\">"+ //Crescentcity
			          "<area shape=\"rect\" coords=\"305,275,422,300\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 4;window.close(); return false;\">"+ //Auburn
			          "<area shape=\"rect\" coords=\"284,303,376,335\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 169;window.close(); return false;\">"+ //Yubacity
			          "<area shape=\"rect\" coords=\"95,310,204,350\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 152;window.close(); return false;\">"+ //Ukiah
			          "<area shape=\"rect\" coords=\"100,283,217,309\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 40;window.close(); return false;\">"+ //Fortbrag
			          "<area shape=\"rect\" coords=\"142,260,243,284\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 165;window.close(); return false;\">"+ //Willows
			          "<area shape=\"rect\" coords=\"291,243,357,272\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 16;window.close(); return false;\">"+ //Chico
			          "<area shape=\"rect\" coords=\"85,204,202,233\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 45;window.close(); return false;\">"+ //Garberville
			          "<area shape=\"rect\" coords=\"70,175,197,203\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 161;window.close(); return false;\">"+ //Weaverville
			          "<area shape=\"rect\" coords=\"231,207,326,237\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 103;window.close(); return false;\">"+ //Redbluff
			          "<area shape=\"rect\" coords=\"225,163,313,201\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 104;window.close(); return false;\">"+ //Redding
			          "<area shape=\"rect\" coords=\"76,131,156,158\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 35;window.close(); return false;\">"+ //Eureka
			          "<area shape=\"rect\" coords=\"210,93,352,134\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 78;window.close(); return false;\">"+ //Mountshasta
			          "<area shape=\"rect\" coords=\"204,42,270,81\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 168;window.close(); return false;\">"+ //Yreka
			        "</map>" +
			        "<img src=\"images/eureka.jpg\" width=\"454\" height=\"408\" align=\"BOTTOM\" border=\"2\" naturalsizeflag=\"3\" usemap=\"#EurekaMap3\" ismap>"); 
					      		
							      		
	      	}
	      	if(this.imgsrc == "tahoe.jpg"){
	      		this.globalVarMap.document.writeln(
	      		"<map name=\"TahoeMap8\">" +
			          "<area shape=\"rect\" coords=\"65,366,151,398\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 38;window.close(); return false;\">"+ //Folsom
			          "<area shape=\"rect\" coords=\"151,335,250,361\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 96;window.close(); return false;\">"+ //Placerville
			          "<area shape=\"rect\" coords=\"53,304,129,340\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 111;window.close(); return false;\">"+ //Rocklin
			          "<area shape=\"rect\" coords=\"219,274,365,314\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 139;window.close(); return false;\">"+ //Southlaketahoe
			          "<area shape=\"rect\" coords=\"83,261,171,295\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 4;window.close(); return false;\">"+ //Auburn
			          "<area shape=\"rect\" coords=\"37,136,155,188\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 49;window.close(); return false;\">"+ //Grassvalley
			          "<area shape=\"rect\" coords=\"232,127,323,168\" HREF=\"\" onClick= \"" + this.WHO + "document." + this.gReturnItem + ".selectedIndex= 147;window.close(); return false;\">"+ //Truckee
			        "</map>" +
			        "<img src=\"images/tahoe.jpg\" width=\"387\" height=\"472\" align=\"BOTTOM\" border=\"0\" naturalsizeflag=\"3\" usemap=\"#TahoeMap8\" ismap>" );
	      		
	      	}
	      	
	      	
	   }//end if showcalifornia
	      
	
	this.globalVarMap.document.writeln("</body></html>");
	
	this.globalVarMap.document.close();
	
	}
	
/**********************************************************************************************/
