window.addEventListener('load', function () {
    const button = document.querySelector('.toggle-menu-button');
    const menu = document.querySelector('.header-site-menu');

    if (button && menu) {
        button.addEventListener('click', function () {
            menu.classList.toggle('is-show');
        });
    }
});

$(function(){
    $(window).scroll(function(){
        $("nav.floating").stop().animate(
            {"top":$(window).scrollTop()+100},
            500);
    });
});