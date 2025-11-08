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
