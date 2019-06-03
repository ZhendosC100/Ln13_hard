$(document).ready(function(){

let btn = $('.btn'),
    modal = $('.modal'),
    up = $('.up'),
    close = $('.modal__close');

    btn.on('click', function(e){
        e.preventDefault();
        modal.show();
    });

    close.on('click', function(e){
        e.preventDefault();
        modal.hide();
    });

    up.on('click', function(){
        $('html, body').animate({scrollTop:0});
    });

});