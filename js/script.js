const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

let scrollStarted = false;

menuBtn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  mobileMenu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 30 && scrollStarted) {
    scrollStarted = false;
    reset();
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerHTML;
      const increment = target / 100;
      if (c < target) {
        counter.innerHTML = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerHTML = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
