// miniCarousel
// State of California
// Version 2010.09.28

var miniCarousel = {
	widthOfEachImg:40, // width of each image, including padding
	totalNumberOfImgs:7,
	numberOfVisibleImgs:5, // number of images to show at a time
	speed:20, // speed, number of pixels to move each cycle

	currentOffset: 0,
	scrollTimerID: null,
	direction: -1, // -1 = right arrow/move left, 1 = left arrow/move right
	counterA: 0,

	fControl:function (paramDirection) {
		if (!miniCarousel.scrollTimerID) {
			if (((paramDirection == 1) && (miniCarousel.currentOffset < 0)) || ((paramDirection == -1) && (miniCarousel.currentOffset > (-1)*miniCarousel.widthOfEachImg*(miniCarousel.totalNumberOfImgs-miniCarousel.numberOfVisibleImgs)))) {
				miniCarousel.direction = paramDirection;
				miniCarousel.counterA = 0;
				miniCarousel.fPerformScroll();
			}
		}
	},
	
	fPerformScroll:function () { // loops during scroll
		miniCarousel.currentOffset += miniCarousel.direction * miniCarousel.speed;
		miniCarousel.counterA += miniCarousel.speed;
		document.getElementById("carousel_slider").style.left = miniCarousel.currentOffset + "px";
		if (miniCarousel.counterA < miniCarousel.widthOfEachImg * miniCarousel.numberOfVisibleImgs) {
			miniCarousel.scrollTimerID = setTimeout(miniCarousel.fPerformScroll,50); // short pause, recurse to continue scroll.
		} else {
			// Finished scroll
			miniCarousel.scrollTimerID = null;
			if (miniCarousel.currentOffset < 0) {
				document.getElementById("carousel_left_arrow").style.backgroundPosition = '0px 0px'; // left arrow enabled
			} else {
				document.getElementById("carousel_left_arrow").style.backgroundPosition = '-60px 0px'; // left arrow disabled
			}
			if (miniCarousel.currentOffset > (-1)*miniCarousel.widthOfEachImg*(miniCarousel.totalNumberOfImgs-miniCarousel.numberOfVisibleImgs)) {
				document.getElementById("carousel_right_arrow").style.backgroundPosition = '-30px 0px'; // right arrow enabled
			} else {
				document.getElementById("carousel_right_arrow").style.backgroundPosition = '-90px 0px'; // right arrow disabled
			}
		}
	}
}
