const coveringLink = document.querySelectorAll('.bicycle-types__link');
const bikesList = document.querySelectorAll('.bicycle-types__cards-list');
const bikesDots = document.querySelectorAll('.bicycle-types__pagination');
const selectBtn = document.querySelector(".bicycle-types__arrow");
const selectMenu = document.querySelector(".bicycle-types__menu");


for (let i = 0; i < coveringLink.length; i++) {

  coveringLink[i].addEventListener("click", function(e){
    e.preventDefault();
    const activeTabAttr = e.target.getAttribute("data-tab");
  
    for (let j = 0; j < coveringLink.length; j++) {
      const contentAttr = bikesList[j].getAttribute("data-tab-content");
      const navAttr = bikesDots[j].getAttribute('data-nav');

      if ((activeTabAttr === contentAttr) && (activeTabAttr === navAttr)) {
          coveringLink[j].classList.add("bicycle-types__link_active");
          bikesList[j].classList.add("bicycle-types__cards-list_active");
          bikesList[j].classList.remove("hidden");
          bikesList[j].classList.add("visible");
          bikesDots[j].classList.remove("hidden");
          bikesDots[j].classList.add("visible");
      } else {
          coveringLink[j].classList.remove("bicycle-types__link_active");
          bikesList[j].classList.remove("bicycle-types__cards-list_active");
          bikesList[j].classList.add("hidden");
          bikesList[j].classList.remove("visible");
          bikesDots[j].classList.add("hidden");
          bikesDots[j].classList.remove("visible");  
      }
    };
  });
};


function openSelectMenu() {
  selectBtn.addEventListener('click', () => {
    if (selectMenu.classList.contains('overflow_hidden')) {
      selectMenu.classList.remove('overflow_hidden');
      selectMenu.classList.add('overflow_visible');
    } else {
      selectMenu.classList.remove('overflow_visible');
      selectMenu.classList.add('overflow_hidden');
    }
  });
}
openSelectMenu();

function closeSelectMenu() {
  selectMenu.classList.remove('overflow_visible');
  selectMenu.classList.add('overflow_hidden');
}

coveringLink.forEach((link) => link.addEventListener('click', () => {
selectBtn.textContent = link.textContent;
closeSelectMenu()}));

const bikesSlider = new Swiper(".bicycle-types__tabs", {
  slidesPerView: 1,
  //spaceBetween: 10,
  //loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet_active",
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
      //spaceBetween: 30,
    },
  },
});


const coveringsSlider = new Swiper(".coverings__slider", {
  direction: "horizontal",
  loop: true,
  speed: 800,
  spaceBetween: 300,

  navigation: {
    prevEl: ".button_assignment_prev",
    nextEl: ".button_assignment_next",
  }  
});