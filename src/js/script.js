$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,	
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/left_chevron.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/right_chevron.svg"></button>',
	});
	$('.gallery__carousel').slick({
		speed: 1200,	
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/gallery/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/gallery/right.svg"></button>',
	});
});

