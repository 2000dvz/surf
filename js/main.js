// JavaScript Document
$(document).ready(function(){
	
	$('.header_slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-rigth.svg" alt=""></img>',
		asNavFor: '.slider-dotshead',
		
	});
	
	$('.slider-dotshead').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.header_slider',
			responsive: [// взяли с сайта slick
		{
			breakpoint: 961,
			settings: "unslick"
		},
	]
});
	
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-rigth.svg" alt=""></img>',
		//asNavFor: '.slider-map',
		responsive: [// взяли с сайта slick
		{
			breakpoint: 1210,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			}
		},
			{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true,// чтоб кусок картинки выглядывал взяли с сайта slick
			}
		},
			{
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
				centerMode: false,// чтоб кусок картинки выглядывал взяли с сайта slick
			}
		},
	]
});
	
	
	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows:false,//стрелки нет
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [// взяли с сайта slick
		{
			breakpoint: 1103,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				centerMode: true,// чтоб кусок картинки выглядывал взяли с сайта slick
			}
		},
			{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				centerMode: true,// чтоб кусок картинки выглядывал взяли с сайта slick
			}
		},
		
	]
});
	
	
	
	
	$('.holder_slider, .shop_slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-rigth.svg" alt=""></img>',
	});
	
	
	
	
	
	// взято с сайта 'input number custom style' https://codepen.io
	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
		  var newVal = oldValue;
		} else {
		  var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
		  var newVal = oldValue;
		} else {
		  var newVal = oldValue - 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
		});

	});
	
	
	
	
	$('.quantity-button').on('click' , function(){
		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests'); //переменную обозначили
		$('.summ').html('$' + summ);
	
	});
	
	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests'); //переменную обозначили
	$('.summ').html('$' + summ);
	
	
	
	
	$('.surfboard-box_circle').on('click', function(){
		$(this).toggleClass('active')//плюс на минус переходит
	});
	
	
	
	
	$('.menu-btn').on('click', function(){
		$('.menu').toggleClass('active');
	});
	
	
	
	new WOW().init();
	
	
});
