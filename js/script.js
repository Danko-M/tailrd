$(function() {
  //jQuery code here 
});

// carousel (survey page)
var carousel01 = $('.owl-carousel');
var carousel01Opt = {
  loop: false,
  nav: true,
  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
  					'<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
}

carousel01.owlCarousel(carousel01Opt);

// Toggle carousel items (survey page)

var carouselTogglesContainer = $('.owl-carousel'),
		carouselTogglesContainerItems = carouselTogglesContainer.find('span'),
		carouselTogglesContainerItemsCheckIcon = carouselTogglesContainerItems.find('.fa-check'),
		carouselTogglesContainerItemsExpand = carouselTogglesContainer.find('.fa-expand');

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

carouselTogglesContainerItemsExpand.on('click', function(e) {
	e.stopPropagation();
});

// Toggle items (survey page)

var togglesContainer = $('.container-narrow-p-x-30'),
		togglesContainerItems = togglesContainer.find('span'),
		togglesContainerItemsCheckIcon = togglesContainerItems.find('.fa-check'),
		togglesContainerItemsExpand = togglesContainer.find('.fa-expand');

togglesContainer.find(togglesContainerItems).on('click', function() {	
	var $this = $(this);
	
	$this.toggleClass('opacity-33');
	$this.find(togglesContainerItemsCheckIcon).toggleClass('hidden');
});

togglesContainerItemsExpand.on('click', function(e) {
	e.stopPropagation();
});