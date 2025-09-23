document.addEventListener("DOMContentLoaded", function() {
    const closePopupBtn = document.getElementById("closePopupBtn");
    const imagePopup = document.getElementById("imagePopup");

    // This line forces the popup to show as soon as the HTML content is loaded
    imagePopup.style.display = "flex";

    // Function to close the popup when the user clicks the 'x' button
    closePopupBtn.addEventListener("click", () => {
        imagePopup.style.display = "none";
    });

    // Function to close the popup if the user clicks outside of the content
    window.addEventListener("click", (event) => {
        if (event.target === imagePopup) {
            imagePopup.style.display = "none";
        }
    });
});
 document.addEventListener("DOMContentLoaded", function() {
        const currentPath = window.location.pathname.split('/').pop();
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            const itemPath = item.getAttribute('href').split('/').pop();
            if (itemPath === currentPath || (currentPath === '' && itemPath === 'index.html')) {
                item.classList.add('active');
            }
        });
    });
  $(document).ready(function(){
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive:{
      0:{ items:1 },
      600:{ items:2 },
      1000:{ items:3 }
    }
  });
});
const counters = document.querySelectorAll('.counter');
const speed = 150;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
 const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
