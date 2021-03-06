$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".optimize").attr("src","https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A00eee1ff916de0a5ba4d755b92ae68598e4e5d4455b26dbde9c7a80a72e3f490&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false&amp;id=ya_map&amp;apikey=0343c3a4-78d4-46cc-a0ae-66bd278f3d46");
            $(".optimize").attr("type","text/javascript");
            $(".optimize").attr("charset","utf-8");
            $(".optimize").attr("async");
        }
    });

    

let btn = $('.navbar__btn'),
    modal = $('.modal'),
    shadowAside = $('.shadow_aside'),
    up = $('.up'),
    close = $('.modal__close');

    btn.on('click', function(e){
        e.preventDefault();
        shadowAside.show();
        modal.show();
    });

    close.on('click', function(e){
        e.preventDefault();
        shadowAside.hide();
        modal.hide();
    });

    up.on('click', function(){
        $('html, body').animate({scrollTop:0});
    });

// -------##### Form #####---------//

    let offerNameOn = $('.offer_name'),
        offerPhoneOn = $('.offer_phone');
    
        $("#form_offer").submit(function(e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.
        
            var form = $(this);
            var url = form.attr('action');

            let offerName = offerNameOn.val(),
                offerPhone = offerPhoneOn.val();

            if(offerName != '' && offerPhone != ''){
                $.ajax({
                    type: "POST",
                    url: url,
                    data: form.serialize(), // serializes the form's elements.
                    success: function(data)
                    {
                        alert("Спасибо! Заявка принята."); // show response from the php script.
                    },
                    error: function (data) {
                     alert("К сожалению выступила ошибка :(");
                 }
                  });
            } else {
                alert('Заполните все поля!');
            }
        
            
        
        });

        let brifNameOn = $('.brif_name'),
            brifPhoneOn = $('.brif_phone'),
            brifEmailOn = $('.brif_email');


        $("#form_brif").submit(function(e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.
        
            var form = $(this);
            var url = form.attr('action');

            let brifName = brifNameOn.val(),
                brifPhone = brifPhoneOn.val(),
                brifEmail = brifEmailOn.val();

            if(brifName != '' && brifPhone != '' && brifEmail != ''){
                $.ajax({
                    type: "POST",
                    url: url,
                    data: form.serialize(), // serializes the form's elements.
                    success: function(data)
                    {
                        alert("Спасибо! Заявка принята."); // show response from the php script.
                    },
                    error: function (data) {
                     alert("К сожалению выступила ошибка :(");
                 }
                  });
            } else {
                alert('Заполните все поля!');
            }
        
            
        
        });

});