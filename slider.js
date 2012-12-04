(function(){
	var interval = 4000,
	    whiteImage = 'images/ball-white.jpg',
	    blueImage = 'images/ball-blue.jpg',
	    currentActiveIndex = 0;

	var carouselChildren, buttonChildren, timer;

	function hideCurrentActiveElements() {
		var curCarousel = $(carouselChildren[currentActiveIndex]),
		    curButton = $(buttonChildren[currentActiveIndex]);

	    curCarousel.hide();
	    curButton.children()[0].src = blueImage;
	}

	function showCurrentAciveElements() {
		var nextCarousel = $(carouselChildren[currentActiveIndex]),
	    nextButton = $(buttonChildren[currentActiveIndex]);

		nextCarousel.show();
		nextButton.children()[0].src = whiteImage;
	}

	function changeImage() {

		hideCurrentActiveElements();
		
		currentActiveIndex++;						
		if(4 == currentActiveIndex)
		{
			currentActiveIndex = 0;
		}

		showCurrentAciveElements();

		timer = setTimeout(changeImage, interval);
	}

	function buttonClicked(e){
		clearInterval(timer);

		var index = buttonChildren.index(e.currentTarget);

		hideCurrentActiveElements();
		currentActiveIndex = index;						
		showCurrentAciveElements();

		timer = setTimeout(changeImage, interval);
	}

	$(function() {
		carouselChildren = $('#carousel').children();
		buttonChildren = $('.cs-buttons').children();
		timer = setTimeout(changeImage, interval);

		$('.cs-buttons a').click(buttonClicked);
	});         
})();