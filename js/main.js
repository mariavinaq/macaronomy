// ORDER / ECWID
    const shopButton = document.getElementById("shop-button");
    const shopP = document.getElementById("shop-p");
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");

    shopButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    shopP.addEventListener("click", function() {
        popup.style.display = "block";
    });

    popupClose.addEventListener("click", function() {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function(e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

// SLIDER
    var slides = document.querySelectorAll('.slide'); 
    var currentSlide = 0; 
    var slideInterval = setInterval(nextSlide, 4000); 

    function nextSlide() {
        slides[currentSlide].className = 'slide'; 
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide active'; 
    }

    function prevSlide() { 
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].className = 'slide active';
    }

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');

    prev.addEventListener('click', function() {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000); 
    });

    next.addEventListener('click', function() { 
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    });