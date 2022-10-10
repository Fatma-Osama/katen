function articlesFUNC() {
var item = new Swiper(".articles__slider", {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,

    pagination: {
        el: ".articles .swiper-pagination",
        clickable: true,
    },
    /*cardsEffect: {
        perSlideRotate: 10,
        perSlideOffset: 2,
        slideShadows: false
    },*/
    breakpoints: {
    400:{
        slidesPerView: 1
    },
    600: {
        slidesPerView: 2,
    },
    750: {
        slidesPerView: 3,
    },
    950: {
        slidesPerView: 4,
    },
        1400: {
            slidesPerView: 5
        }
    },
});
}

articlesFUNC();

function fashionFUNC() {
    var item = new Swiper(".fashion-celebration", {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        spaceBetween: 30,



       // effect: "cards",
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        navigation: {
            nextEl: ".fashion-celebration .swiper-button-next",
        prevEl: ".fashion-celebration .swiper-button-prev",
        },
        pagination: {
            el: ".fashion-celebration .swiper-pagination",
            clickable: true,
        },
        /*cardsEffect: {
            perSlideRotate: 10,
            perSlideOffset: 2,
            slideShadows: false
        },*/
        breakpoints: {
            950: {
                slidesPerView: 2,
            },
            loop: false,

            1200: {
                slidesPerView: 1
            }
        },
    });
}

fashionFUNC();

console.log("fatma")