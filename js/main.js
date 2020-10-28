$(document).ready(function(){
    function Scroll_block(){
        let scroll_top = $(document).scrollTop();
        $(".menu a").each(function(){
            let hash = $(this).attr("href");
            let target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $('.link-menu').removeClass('active-link');
                $(this).closest('.item-menu').find('.link-menu').addClass('active-link');
            } else {
                $(this).closest('.item-menu').find('.link-menu').removeClass('active-link');
            }
        });
    }


    $(document).on("scroll", Scroll_block);

    $("a[href^='#']").click(function(e){
        e.preventDefault();

        $(document).off("scroll");
        $('.link-menu').removeClass('active-link');
        $(this).closest('.item-menu').find('.link-menu').addClass('active-link');
        let hash = $(this).attr("href");
        let target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top,
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", Scroll_block);
        });

    });

    $('.menu-btn').on('click', function () {
        $(this).closest('.menu-top').find('.mobile-menu').addClass('active-menu');
        $(this).closest('.menu-top').find('.container-menu-btn').addClass('toggle-btn');
    });

    $('.close-menu').on('click', function () {
        $(this).closest('.menu-top').find('.mobile-menu').removeClass('active-menu');
        $(this).closest('.menu-top').find('.container-menu-btn').removeClass('toggle-btn');

    });
    
    
     $(".review-btn").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

});

