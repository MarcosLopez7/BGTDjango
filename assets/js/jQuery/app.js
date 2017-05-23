/**
 * Created by marcoslopez7 on 14/01/17.
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
    var $nav = $('#fixiado');
    
    var max = 130;
    var px = 54;

    var $scroll = $scrollPosition + $(window).height() - 200;
    var $portafolioPosition = $('#porta').position().top;

    if ($scrollPosition > max){
        $nav.show();
        //$imageBT.css("height", ($imageBT.height() + px)+ "px");
    } else {
        $nav.hide();
        //$imageBT.css("height", ($imageBT.height() + px) + "px");
    }

    if( $scroll > $portafolioPosition) {
        $( ".icons" ).first().show( "fast", function showNext() {
            $( this ).next( ".icons" ).show( "fast", showNext );
        });
    }
});

