let currentIndex = 0;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const cardWidth = cards[0].offsetWidth;
    const newTransform = -currentIndex * (cardWidth + 49);
    track.style.transform = `translateX(${newTransform}px)`;
}

function prevCard() {
    const cards = document.querySelectorAll('.carousel-card');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1;
    }
    updateCarousel();
}

function nextCard() {
    const cards = document.querySelectorAll('.carousel-card');
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}