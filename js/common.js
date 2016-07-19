$(document).ready(function($){
    var menu = $('.menu__list');
    var menuOpen = $('.menu__toggle');
    var menuClose = $('.close_mnu__btn');
    var menuBtn = $('.menu-btn');
    
    var openFunc = function() {
        menuOpen.on( "click", function(e){
            e.preventDefault();
            menu.css({'display': 'block'});
        });
        menuClose.on( "click", function(e){
            e.preventDefault();
            menu.css({'display': 'none'});
        });
        menuBtn.on( "click", function(){
            menu.css({'display': 'none'});
        });
    };
    
    var closeFunc = function() {
        menuOpen.off("click");
        menuClose.off("click");
        menuBtn.off("click");
    };
    
    if($(window).width() < 1183) {
        openFunc();
    }
    
    $(window).resize(function() {
       if($(window).width() < 1183) {
            openFunc();
           menu.css({'display': 'none'});
        } else {
            closeFunc();
            menu.css({'display': 'flex'});
            menuBtn.unbind( "click", function(){
                menu.css({'display': 'none'});
            });
        } 
    });
});
