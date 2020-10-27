$(document).ready(function(){
    $(window).resize(function() {   //скрипт скрола по странице
        width = $(window).width();
        if (width >= 1110) {
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
        }
    });

});

