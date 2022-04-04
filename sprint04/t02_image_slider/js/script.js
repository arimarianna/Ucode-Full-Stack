let slideIndex = 1;
let timer = 0;

showSlides(slideIndex);

function plusSlides() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    clearInterval(timer)
    timer = setInterval(plusSlides, 3000);
}
