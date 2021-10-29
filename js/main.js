$(document).ready(function() {
    /*
        $(".menutriger").click(function() {
            $(".megamenu").toggleClass("active");
            $("body").toggleClass("fix");
        });

        */
    $('.pgwSlider').pgwSlider();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

});