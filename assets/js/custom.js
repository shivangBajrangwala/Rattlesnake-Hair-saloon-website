/*==========

Theme Name: RATTLESNAKE HAIR SALOON -  BARBER SHOP HTML5 TEMPLATE
Theme Version: 1.0.0

==========*/

/*==========

----- JS INDEX -----
1. WOW INIT
2.FANCYBOX
3.NAVIGATION MENU
4.GALLERY SLIDER
5.BLOG SLIDER
6.TESTIMONIAL SLIDER
7.TEAM SLIDER
8.BANNER SLIDER
9.BLOG IMG SLIDER
10.RELATED POST SLIDER
11.BRAND SLIDER
12.GALLERY PAGE SLIDER
13. LOCOMOTIVE SCROLL
14. HEADER SHOW & HIDE
15. NAVIGATION & SOCIAL LINKS
16. MOBILE MENU 
17. FAQs Accordion
19. SITE LOADER

==========*/

$(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    // WOW INIT
    new WOW().init();

    // FANCYBOX
    $('a[data-fancybox="gallery-img"]').fancybox({
        openSpeed: 10000,
        closeSpeed: 1000,
        nextSpeed: 1000,
        prevSpeed: 1000,
        animationEffect: 'material'
    });

    // NAVIGATION MENU
    $(".menu-toggle").on('click', function() {
        $(".main-navigation").toggleClass("toggled");
    });
    $(".menu-toggle").on('click', function() {
        $("html").toggleClass("flow-hidden");
    });
    $(".nav-toggle").on('click', function() {
        $(".main-navigation").toggleClass("main-menu-toggle");
    });
    $(".mob-icon").on('click', function() {
        $(this).parents(".team-img-wp").toggleClass("active-mob-icon");
    });

    // GALLERY SLIDER
    var first_row = new Swiper(".first_row", {
        speed: 30000,
        loop: true,
        autoplay: {
            delay: 0
        },
        direction: 'horizontal',
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            426: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 8,
            }
        },
    });
    var second_row = new Swiper(".second_row", {
        speed: 30000,
        loop: true,
        autoplay: {
            delay: 0
        },
        direction: 'horizontal',
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },

            426: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 8,
            }
        },
    });

    // BLOG SLIDER
    var blog_slider = new Swiper(".blog_slider", {
        spaceBetween: 30,
        loop: true,
        // speed: 2500,
        // autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // 2100: {
            //     slidesPerView: 4,
            //     spaceBetween: 30,
            // },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },

    });

    // TESTIMONIAL SLIDER
    var testimonial_slider = new Swiper(".testimonial_slider", {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            401: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },

    });

    // TEAM SLIDER
    var about_team_slider = new Swiper(".about_team_slider", {
        spaceBetween: 35,
        loop: true,
        speed: 1000,
        // autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            401: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },

    });

    // BANNER SLIDER
    var banner_slider = new Swiper(".banner_slider", {
        loop: true,
        speed: 2500,
        autoplay: {
            delay: 7500
        },
        direction: 'horizontal',
        effect: 'slide',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        breakpoints: {
            2100: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            401: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },

    });

    // BLOG IMG SLIDER
    var blog_img_slider = new Swiper(".blog_img_slider", {
        loop: true,
        speed: 1500,
        autoplay: true,
        direction: 'horizontal',
        effect: 'slide',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            2100: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            401: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },

    });

    // RELATED POST SLIDER
    var related_post_slider = new Swiper(".related_post_slider", {
        loop: true,
        speed: 1500,
        autoplay: false,
        direction: 'horizontal',
        effect: 'slide',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            2100: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },

    });

    // BRAND SLIDER
    var brand_slider = new Swiper(".brand_slider", {
        spaceBetween: 50,
        loop: true,
        speed: 1000,
        autoplay: true,
        direction: 'horizontal',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1500: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    // GALLERY PAGE SLIDER
    var gallery_sec_col = new Swiper(".gallery_sec_col", {
        speed: 30000,
        loop: true,
        autoplay: {
            delay: 0
        },
        freeMode: true,
        direction: "vertical",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
    });
    var gallery_sec_col = new Swiper(".gallery_sec_col", {
        speed: 30000,
        loop: true,
        autoplay: {
            delay: 0
        },
        freeMode: true,
        direction: "vertical",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
    });

    new ResizeObserver(() => scroll.update()).observe(document.querySelector("#js-scroll"))

    // LOCOMOTIVE SCROLL
    var wheel = "nothig";
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#js-scroll"),
        smooth: true,
        lerp: 0.05,
        getDirection: true,
        repeat: false,
    });

    // HEADER SHOW & HIDE
    scroll.on("call", function(fun, dir) {
        console.log("call", fun, dir);
    });


    // NAVIGATION, SOCIAL LINKS & COUNTING
    var navbarHeight = jQuery('.site-header').outerHeight();
    var BannerPosition = jQuery('.banner-socials').outerWidth();
    var a = 0;
    window.onload = function() {
        jQuery('.site-header').css('top', function() {
            return navbarHeight * 0;
        });
        jQuery('.banner-socials').css('left', function() {
            return BannerPosition * -1;
        });
    };

    scroll.on("scroll", function(obj) {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counting').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }

                    });

            });
            a = 1;
        }

        if (obj.direction == wheel) return;
        wheel = obj.direction;
        if (wheel == 'up') {
            jQuery('.site-header').css('top', function() {
                return navbarHeight * 0;
            });
            jQuery('.banner-socials').css('left', function() {
                return BannerPosition * -1;
            });
        } else {
            jQuery('.site-header').css('top', function() {
                return navbarHeight * -1;
            });
            jQuery('.banner-socials').css('left', function() {
                return BannerPosition * 0;
            });
        }

    });


    // MOBILE MENU 
    jQuery(".navigation-bar .main-menu-container a").on('click', function() {
        jQuery(".main-navigation").removeClass("main-menu-toggle");
    });
    jQuery(document).on('mouseenter', '.service-list li', function() {
        var data_title = jQuery(this).attr('data-title');
        $(this).addClass('active-li').siblings().removeClass('active-li');
        $(this).parents('.service-main-details').find('.service-img-wp .service-img').removeClass("active-img");
        $(this).parents('.service-main-details').find('.service-img-wp .service-img[data-id="' + data_title + '"]').addClass("active-img");
    });

    if ($(window).width() < 992) {
        // Submenu For Mobile JS Start
        $('body').on('click', '.main-menu-container .inner-pages', function() {
            if (($(this).parent().hasClass('active-sub-menu'))) {
                $(this).parent().removeClass('active-sub-menu');
                $(this).parent().find('ul').slideUp();
            } else {
                $(this).parent().addClass('active-sub-menu');
                $(this).parent().find('ul').slideDown();
            }
        });

        // FAQ Accordian JS Start
        jQuery('.faq-box-wp .faq-content').hide();
        jQuery('.faq-title').click(function(j) {
            var dropDown = jQuery(this).closest('.faq-box').find('.faq-content');
            jQuery(this).closest('.faq-box-wp').find('.faq-content').not(dropDown).slideUp();
            if (jQuery(this).hasClass('active-faq')) {
                jQuery(this).removeClass('active-faq');
            } else {
                jQuery(this).closest('.faq-box-wp').find('.faq-title.active-faq').removeClass('active-faq');
                jQuery(this).addClass('active-faq');
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });

    }

});

// SITE LOADER
jQuery(window).on("load", function() {
    $(".page-loader").fadeOut();
    $("body").removeClass("body-fixed");
});