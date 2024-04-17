$(document).ready(function(){

    const  btnMenu = document.getElementById("js-btn-menu")
    if(btnMenu){
        const headerMenuMobile = document.getElementById("header-menu")
        btnMenu.addEventListener('click', e=>{
            e.preventDefault()
            if(btnMenu.classList.contains('active')){
                btnMenu.classList.remove('active')
            }else{
                btnMenu.classList.add('active')
            }
            if(headerMenuMobile.classList.contains('active')){
                headerMenuMobile.classList.remove('active')
            }else{
                headerMenuMobile.classList.add('active')
            }
        })
    }

    //distinction
    $('.js-distinction').slick({
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 691,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 495,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
        ],
    })

    $('.js-partner').slick({
        dots:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 595,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
        ],
    })

    $('.js-event').slick({
        dots:false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
        ], 
    })
})