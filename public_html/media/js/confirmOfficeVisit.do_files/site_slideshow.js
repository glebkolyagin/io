// Slideshow
// State of California
// 5/19/2010


var arrayAnchors;

var SlideShow = {
	delayMS: 8000, // Delay before displaying next image, in milliseconds
	bPlaying: 1, // 1 = playing, 0 = paused

	arrayAnchors: null, // Array of anchors
	currentIndex: 0, // Index of current image
	nextIndex: 1, // Index of next image
	mainTimerID: null,
	fadeTimerID: null,
	counterZ: 2, // counter, used for z-index of front image

	fMainLoop:function () { /* main loop, repeats every x seconds */

		for( var counterI = 0; counterI < arrayAnchors.length; counterI++) {
			document.getElementById("slide_show_control_" + (counterI+1)).className = "";
		}
		document.getElementById("slide_show_control_" + (SlideShow.nextIndex+1)).className = "slide_show_control_highlight";

		arrayAnchors[SlideShow.nextIndex].xOpacity = 0; // Set opacity of next image to 0
		SlideShow.fSetOpacity(arrayAnchors[SlideShow.nextIndex]);

		SlideShow.counterZ++;
		arrayAnchors[SlideShow.nextIndex].style.zIndex = SlideShow.counterZ; // Place next <a> on top

		SlideShow.fCrossFade(); // do fade

		if (SlideShow.bPlaying)
			SlideShow.mainTimerID = setTimeout(SlideShow.fMainLoop,SlideShow.delayMS); // delay, recurse
	},

	fCrossFade:function () { /* loops during fade */
		SlideShow.fadeTimerID = null;
		arrayAnchors[SlideShow.nextIndex].xOpacity += .20; // fade in
		arrayAnchors[SlideShow.currentIndex].xOpacity -= .20; // fade out
		
		SlideShow.fSetOpacity(arrayAnchors[SlideShow.nextIndex]);
		SlideShow.fSetOpacity(arrayAnchors[SlideShow.currentIndex]);
		
		if (arrayAnchors[SlideShow.nextIndex].xOpacity >= .99) {
			// done with fade

			SlideShow.currentIndex = SlideShow.nextIndex;
	
			SlideShow.nextIndex = (SlideShow.currentIndex < arrayAnchors.length - 1) ? SlideShow.currentIndex + 1 : 0; // index of next img

			for( var counterJ = 0; counterJ < arrayAnchors.length; counterJ++) {
				if (SlideShow.currentIndex != counterJ) {
					arrayAnchors[counterJ].xOpacity = 0; /* Make sure all other images are transparent. Fix problem where user clicks arrows rapidly. */
					SlideShow.fSetOpacity(arrayAnchors[counterJ]);
				}
			}
		} else {
			SlideShow.fadeTimerID = setTimeout(SlideShow.fCrossFade,50); // short pause, recurse to continue fade.
		}

	},

	fSetOpacity:function (obj) {
		if (obj.xOpacity > .99) {
			obj.xOpacity = .99;
		}
		obj.style.opacity = obj.xOpacity; // the CSS3 method, for newer Mozilla, Safari, Opera
		obj.style.MozOpacity = obj.xOpacity; // older Mozilla
		obj.style.filter = "alpha(opacity=" + (obj.xOpacity * 100) + ")"; // for IE
	},

	fControl:function (controlParam) { /* called when a button is clicked */
		if (!SlideShow.fadeTimerID) {
			if (controlParam == "prev"){
				clearTimeout (SlideShow.mainTimerID);
				SlideShow.nextIndex = (SlideShow.currentIndex > 0) ? SlideShow.currentIndex - 1 : arrayAnchors.length - 1; // index of prev img
				SlideShow.fMainLoop();
			} else if (controlParam == "next"){
				clearTimeout (SlideShow.mainTimerID);
				SlideShow.fMainLoop();
			} else {
				if (SlideShow.currentIndex != controlParam - 1) {
					SlideShow.nextIndex = controlParam - 1;
					clearTimeout (SlideShow.mainTimerID);
					SlideShow.fMainLoop();
				}
			}
		}
	},

	initialize:function () {

		if (document.getElementById && document.getElementById("slide_show_container")) { // Make sure browser supports getElementById and div "slide_show_container" exists

		if (initTest <= 0) { 
			initTest = 1;
			var newAnchor;

			//document.getElementById("slide_show_container").className += " javascript_enabled";
	
			// create array of all anchor nodes
			arrayAnchors = document.getElementById("slide_show_images").getElementsByTagName("a");

			// append a linked number for each image
			for( var counterI = 0; counterI < arrayAnchors.length; counterI++) {
				newAnchor = document.createElement('a');
				newAnchor.appendChild(document.createTextNode(counterI + 1)); // insert the image number as text
				newAnchor.href = "#";
				newAnchor.onclick = new Function("SlideShow.fControl(" + (counterI + 1) + ");this.blur();return false;"); // added blur to remove outlines in IE
				newAnchor.id = "slide_show_control_" + (counterI + 1);
				document.getElementById('slide_show_numbers').appendChild(newAnchor);
				
				arrayAnchors[counterI].xOpacity = (counterI == 0) ? 1 : 0;
				SlideShow.fSetOpacity(arrayAnchors[counterI]);
			}

			document.getElementById("slide_show_control_" + (SlideShow.currentIndex+1)).className = "slide_show_control_highlight";
			
			// display first img
			arrayAnchors[SlideShow.currentIndex].style.zIndex = SlideShow.counterZ; // Place first <a> on top

			SlideShow.mainTimerID = setTimeout(SlideShow.fMainLoop,SlideShow.delayMS);
			}
		}
	}
}

var initTest = 0;
addLoadEvent(SlideShow.initialize);
