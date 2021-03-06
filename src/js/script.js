$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left_chevron.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right_chevron.svg"></button>',
    });
    $('.gallery__carousel').slick({
        speed: 1200,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/gallery/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/gallery/right.svg"></button>',
    });
    //прячем скролл
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

		$('.navigetion__burger').on('click', function () {
			$('.dropdown__menu').removeClass('dropdown__menu--close');
		});

		$('.dropdown__menu-close').on('click', function () {
			$('.dropdown__menu').addClass('dropdown__menu--close');
		});
	
		$('.button').on('click', function () {
			$('.overlay').removeClass('overlay--close');
		});

		$('.modal__close').on('click', function () {
			$('.overlay').addClass('overlay--close');
		});

});