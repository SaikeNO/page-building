$('nav .burger').on('click', function () {
    if (window.innerWidth > 650) {
        $('.menu-burger').toggleClass("active");
        $('.wrap nav').toggleClass('active');
    }
    else {
        $('.menu-burger').toggleClass("active");
        $('.wrap nav').removeClass('active');
    }
})

function scrollToMain(){
    $('body,html').animate({
            scrollTop: $('.wrap-description').offset().top
        },800)
}

$('.wrap-slogan button').on('click', scrollToMain)
$('header a').on('click', scrollToMain)