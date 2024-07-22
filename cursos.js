let slideIndex = 0;
          const slides = document.querySelectorAll('.carousel-item');
        
          function showSlides() {
            slides.forEach(slide => {
              slide.style.display = 'none';
            });
            slides[slideIndex].style.display = 'block';
          }
        
          function nextSlide() {
            if (slideIndex === slides.length - 1) {
              slideIndex = 0;
            } else {
              slideIndex++;
            }
            showSlides();
          }
        
          function prevSlide() {
            if (slideIndex === 0) {
              slideIndex = slides.length - 1;
            } else {
              slideIndex--;
            }
            showSlides();
          }
        
          showSlides();