// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings





// Mobile Menu
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu close function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  };
  // mobile menu close function

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}
// Mobile Menu



// Login Btn
// Open Login Page
const openLogin = document.querySelectorAll('[login-btn]');

for (let i = 0; i < openLogin.length; i++) {

  openLogin[i].addEventListener('click', function () {
    document.querySelector('.login-form').classList.toggle('active');
  });

  

};

// close Login Page
const closeLogin = document.querySelector('#close-login-form');

closeLogin.addEventListener('click', function () {
  document.querySelector('.login-form').classList.remove('active');
});
// Login Btn



// User Location
// Open Location Page
const locationBtn = document.querySelectorAll('[user-location]');

for (let i = 0; i < locationBtn.length; i++) {

  locationBtn[i].addEventListener('click', function () {
    document.querySelector('.user-location').classList.toggle('active');
  });
};

// Close Location Page
const closeLocationBtn = document.querySelector('#close-user-location');

closeLocationBtn.addEventListener('click', function () {
  document.querySelector('.user-location').classList.remove('active');
});
// User Location



// Chatting settings
// Open Chat Page
const openChatBtn = document.querySelector('[chatting]');
const chatIcon = document.querySelector('[chat-icon]');

openChatBtn.addEventListener('click', function () {
  document.querySelector('.chat-page').classList.toggle('active');
  chatIcon.classList.toggle('fa-xmark');
});


// Close Chat Page
const closeChatBtn = document.querySelector('#close-chat-page');

closeChatBtn.addEventListener('click', () => {
  document.querySelector('.chat-page').classList.remove('active')
  chatIcon.classList.remove('fa-xmark');
});
// Chatting settings



// Accordion
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });
}
// Accordion





// Inner Accordion
const innerAccordionBtn = document.querySelectorAll('[inner-data-accordion-btn]')
const innerAccordion = document.querySelectorAll('[inner-data-accordion]');

for (let i = 0; i < innerAccordionBtn.length; i++) {

  innerAccordionBtn[i].addEventListener('click', function () {

    innerAccordionBtn[i].nextElementSibling.classList.toggle('active');
    innerAccordionBtn[i].classList.toggle('active');
    

  });
};
// Inner Accordion



// Inner Submenu Accordion
const subInnerAccordionBtn = document.querySelectorAll('[sub-inner-data-accordion-btn]');
const subInnerAccordion = document.querySelectorAll('[sub-inner-data-accordion]');

for (let i = 0; i < subInnerAccordionBtn.length; i++) {

  subInnerAccordionBtn[i].addEventListener('click', function () {

    subInnerAccordionBtn[i].nextElementSibling.classList.toggle('active');
    subInnerAccordionBtn[i].classList.toggle('active');

  });
};
// Inner Submenu Accordion



// Story Swiper
var swiper = new Swiper(".story-container", {
  slidesPerView: 9,
  spaceBetween: 50,
  breakpoints: {
    1290: {
      slidesPerView: 9,
    },
    1090: {
      slidesPerView: 7,
    },

    1050: {
      slidesPerView: 6,
    },
  },
});
// Story Swiper




// Banner Swiper
var swiper = new Swiper(".banner-container", {
  slidesPerView: 1,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
  },
});
// Banner Swiper



// Amazing Swiper
var swiper = new Swiper(".amazing-slider", {
  slidesPerView: 6,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1500: {
      slidesPerView: 6,
      spaceBetween: 2,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
  },
});
// Amazing Swiper



// Products Category Offer swiper
var swiper = new Swiper(".product-category-offer-container", {
  slidesPerView: 7,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1130: {
      slidesPerView: 7,
      spaceBetween: 2,
    },
    1030: {
      slidesPerView: 6,
      spaceBetween: 2,
    },
    850: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
    690: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    330: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
  },
});
// Products Category Offer swiper



// Brands Swiper 
var swiper = new Swiper(".popular-brands-box", {
  slidesPerView: 9,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1230: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
    1130: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 10,
      spaceBetween: 20,
    },
    740: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    340: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    290: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// Brands Swiper 



// Top Sellers Swiper
var swiper = new Swiper(".best-sellers-box-container", {
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1050: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});
// Top Sellers Swiper