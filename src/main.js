let index = 1;

const moveTo = e => {
    showSlide(index = e);
}
const changeSlide = e => {
    showSlide(index += e);
}
const showSlide = e => {
    const images = document.querySelectorAll('img');
    const indicators = document.querySelectorAll('.slider-indicators span');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
    }
    for (let indicator of indicators ) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }

    images [index - 1].style.opacity = '1';
    indicators[index - 1].style.width = '26px';
    indicators[index - 1].style.background = '#fff';
}

showSlide();

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

// scroll to top
var scrollToTopBtn = document.getElementById("scroll-to-top");
var rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", function() {
  const navbarHeight = 700;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );
  if (distanceFromTop >= navbarHeight) {
    scrollToTopBtn.style.display = "block"
  } else {
    scrollToTopBtn.style.display = "none"
  }
});