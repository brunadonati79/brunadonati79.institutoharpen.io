document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    const updateCarousel = (index) => {
        const slideWidth = slides[index].getBoundingClientRect().width;
        carouselTrack.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });
})

