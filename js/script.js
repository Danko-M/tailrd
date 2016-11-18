$(function() {
  //jQuery code here 
});

// radio buttons (survey page - What's your gender?)
var man = $('#radio1'),
    woman = $('#radio2'),
    manShapesSlides = $('.man-checked'),
    womanShapesSlides = $('.woman-checked'),
    manPersonality = $('.man-personality'),
    womanPersonality = $('.woman-personality');

man.on('click', function() {
  womanShapesSlides.add(womanPersonality).addClass('hidden');
  manShapesSlides.add(manPersonality).removeClass('hidden');
});

woman.on('click', function() {
  manShapesSlides.add(manPersonality).addClass('hidden');
  womanShapesSlides.add(womanPersonality).removeClass('hidden');
});



// radio buttons (survey page - How tall are you?)

var radioFeetInch = $('#radio3'),
    radioCm       = $('#radio4');

radioFeetInch.on('click', function() {
  $('.input-cm').slideUp(200);
  $('.input-feet-inch').slideDown(200);
});

radioCm.on('click', function() {
  $('.input-cm').slideDown(200);
  $('.input-feet-inch').slideUp(200);
});

// IE8 & IE9 input placehoder
$('input[type="text"]').placeholder();

// carousel (survey page)
var carousel01 = $('.owl-carousel');
var carousel01Opt = {
  loop: false,
  nav: true,
  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
  					'<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  responsiveClass: true,
  touchDrag: false,
  responsive: {
    1200: {
      items: 4
    },
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
}

//   changed.owl.carousel

carousel01.owlCarousel(carousel01Opt);

// Toggle carousel items (survey page)

var carouselTogglesContainer = $('.owl-carousel'),
		carouselTogglesContainerItems = carouselTogglesContainer.find('span'),
		carouselTogglesContainerItemsCheckIcon = carouselTogglesContainerItems.find('.fa-check');

function toggRemoveClasses(){
	carouselTogglesContainerItems.removeClass('opacity-33');
	carouselTogglesContainerItemsCheckIcon.addClass('hidden');
}		


carouselTogglesContainer.find(carouselTogglesContainerItems).on('click', function() {	
	var $this = $(this);
	
	if($this.hasClass('opacity-33')){
		toggRemoveClasses();
		
	} else {
		toggRemoveClasses();
		$this.addClass('opacity-33');
		$this.find('.fa-check').removeClass('hidden');
	}	

});

// Toggle items (survey page)

var togglesContainer = $('.container-narrow-p-x-30'),
		togglesContainerItems = togglesContainer.find('span'),
		togglesContainerItemsCheckIcon = togglesContainerItems.find('.fa-check');

togglesContainer.find(togglesContainerItems).on('click', function() {	
	var $this = $(this);
	
	$this.toggleClass('opacity-33');
	$this.find(togglesContainerItemsCheckIcon).toggleClass('hidden');
});

// scroll nimation (home page)

var continuousElements = document.getElementsByClassName('continuous-true'),
    backgroundEl = document.getElementById('scroll-animation-bg'),
    slides = document.getElementById('slides'),
    animationSection = document.getElementById('scroll-animation'),
    howItWorksSection = document.getElementById('how-it-works'),
    yOffset = 66.6666;

for (var i = 0; i < continuousElements.length; i++) {
  
  new Waypoint({
    element: continuousElements[i],
    handler: function(direction) {
      if (direction === 'down') {
        yOffset -=33.3333;
        slides.style.transform = "translateY(" + yOffset + "%)";
      }
    },
    offset: '50%'
  });

  new Waypoint({    
    element: continuousElements[i],
    handler: function(direction) {
      if (direction === 'up') {
        yOffset +=33.3333;
        slides.style.transform = "translateY(" + yOffset + "%)";
      }
    },
    offset: '50%'
  })

  new Waypoint({
    element: continuousElements[i],
    index: i,
    handler: function(direction) { 
      if (direction === 'down') {
        $('.indicators').find("li").removeClass('active');
        $('.indicators').find("li:eq("+ this.options.index +")").addClass('active');  
      }    
    },
    offset: '50%'
  });

  new Waypoint({
    element: continuousElements[i],
    index: i,
    handler: function(direction) { 
      if (direction === 'up') {
        $('.indicators').find("li").removeClass('active');
        $('.indicators').find("li:eq("+ this.options.index +")").addClass('active');  
      }    
    },
    offset: '-10%'
  });
  
}





new Waypoint({
    element: animationSection,
    handler: function(direction) {
      if (direction === 'down') {
        backgroundEl.style.backgroundAttachment = "fixed";
        $('.slides-container').addClass('fixed');
        $('.slides-container').removeClass('is-bottom');
      }
    },
    offset: '7%'
  });

new Waypoint({
    element: animationSection,
    handler: function(direction) {
      if (direction === 'up') {
        backgroundEl.style.backgroundAttachment = "scroll";
        $('.slides-container').removeClass('fixed');
      }
    },
    offset: '7%'
  });

new Waypoint({
    element: howItWorksSection,
    handler: function(direction) {
      if (direction === 'down') {
        backgroundEl.style.backgroundAttachment = "scroll";
        $('.slides-container').removeClass('fixed');
        $('.slides-container').addClass('is-bottom');
      }
    },
    offset: '80%'
  });

new Waypoint({
    element: howItWorksSection,
    handler: function(direction) {
      if (direction === 'up') {
        backgroundEl.style.backgroundAttachment = "fixed";
        $('.slides-container').addClass('fixed');
        $('.slides-container').removeClass('is-bottom');
      }
    },
    offset: '80%'
  });

