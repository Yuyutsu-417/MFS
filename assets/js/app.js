$('.slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev-button",
    nextArrow: ".next-button",
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 769,
        settings: {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 1000
        }
    }]
});

let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let open = 0;
let aTags = document.querySelectorAll("#menu li a");

aTags.forEach((c) => {
    c.addEventListener("click", () => {
        if (open != 0) {
            menu.style.right = '-100%';
            document.body.classList.remove("overflow-y-hidden");
            label.classList.remove("label-switch");
            open--;
        }
    })
})

label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }

    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
});

let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none"
    }
})