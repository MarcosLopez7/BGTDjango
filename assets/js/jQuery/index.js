/**
 * Created by marcoslopez7 on 6/1/17.
 */
$(document).ready(function () {
    var $scroll = $(window).scrollTop() + $(window).height() - 200;
    var $portafolioPosition = $('#porta').position().top;

    if( $scroll > $portafolioPosition) {
        $( ".icons" ).first().show( "fast", function showNext() {
            $( this ).next( ".icons" ).show( "fast", showNext );
        });
    }
});

$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();

    var $scroll = $scrollPosition + $(window).height() - 200;
    var $portafolioPosition = $('#porta').position().top;

    if( $scroll > $portafolioPosition) {
        $( ".icons" ).first().show( "fast", function showNext() {
            $( this ).next( ".icons" ).show( "fast", showNext );
        });
    }
});

