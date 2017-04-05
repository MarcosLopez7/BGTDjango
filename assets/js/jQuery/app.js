/**
 * Created by marcoslopez7 on 14/01/17.
 */


$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();
    var $nav = $('#fixiado');
    
    var max = 130;
    var px = 54;

    if ($scrollPosition > max){
        $nav.show();
        //$imageBT.css("height", ($imageBT.height() + px)+ "px");
    } else {
        $nav.hide();
        //$imageBT.css("height", ($imageBT.height() + px) + "px");
    }
});