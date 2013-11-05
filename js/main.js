$(document).ready(function() {
	$(".modal").fancybox({
		maxWidth	: 900,
		maxHeight	: 800,
		fitToView	: false,
		width		: '80%',
		height		: '80%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

var $j = jQuery.noConflict();
$j('#slider1').bxSlider({
  captions: true,
  auto: true
});

$j('#slider2').bxSlider({
  slideWidth: 220,
  minSlides: 4,
  maxSlides: 4,
  moveSlides: 1,
  slideMargin: 30
});

$j('#slider3').bxSlider({
  slideWidth: 220,
  minSlides: 4,
  maxSlides: 4,
  moveSlides: 1,
  slideMargin: 30,
  pause: 3000
});

var $h = jQuery.noConflict();
$h(document).ready(function() {
    $h('a[href=#top]').click(function(){
        $h('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
