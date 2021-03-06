let btn = document.querySelectorAll('.btn'),
    close = document.querySelector('.modal__close'),
    modal = document.querySelector('.modal'),
    shadowBox = document.querySelector('.shadow_aside');

btn.forEach(function(item){

    item.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        shadowBox.style.display = 'flex';
        setTimeout(function(){
            modal.style.display = 'none';
            shadowBox.style.display = 'none';
        }, 5000);
    });

});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    shadowBox.style.display = 'none';
});
