$(document).ready(function(){

let btn = $('.navbar__btn'),
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


    $("#form_offer").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
    
        var form = $(this);
        var url = form.attr('action');
    
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(), // serializes the form's elements.
               success: function(data)
               {
                   alert("Dane zostałe wysłane :)"); // show response from the php script.
               },
               error: function (data) {
                alert("Niestety mamy błąd :(");
            }
             });
    
    
    });

});