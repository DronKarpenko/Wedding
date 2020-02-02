$(document).ready(function(){
	
	$('.header-nav').click(function(){
		$('.sandwich').toggleClass('active');
		var menu = $('.header-nav__list');
		if (menu.is(':visible')) {
			menu.slideUp();
		}else{
			menu.slideDown();
		}
	});

	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

// -----------------SLIDER--------------
	$('.place-slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		variableWidth: true,
  		autoplay: false,
  		autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        }
      ]     
	});

	$('.reviws-slider').slick({
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots: true,
  		autoplay: true,
  		autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
	});

  $('.price-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            autoplay: true
          }
        },
        {
        breakpoint: 768,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            arrows: false
          }
        }
      ]
  });

// ------------------FORM---------------
  $("form").on("submit", function(){
    var formID = '#' + $(this).attr("id");
    $(formID).validate({
      rules: {
        name: 'required',
        tel: 'required'
      },
      messages: {
        name: 'Введите корректные данные',
        tel: 'Введите корректные данные'
      }
    });
    if ($(formID).valid()) {
      $(this).parent().find('.accept').addClass('accept-show')
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline',
  });
  $('.close-popup').on("click", function(){
    $.magnificPopup.close();
  });

});