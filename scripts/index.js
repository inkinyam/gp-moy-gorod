let header = document.querySelector('header');
if (header) {
  let burgerButton = header.querySelector('.header__burger');
  burgerButton.addEventListener('click', () => {
    header.classList.toggle('open')
  })

} else {
  console.log('ERR: header не найден, опять накосячила');
};


import { Carousel } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.esm.js"; 
import { Autoplay } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/carousel.autoplay.esm.js";

Carousel.Plugins.Autoplay = Autoplay; 
let leadCrsl = document.querySelector("#leadcrsl");
if (leadCrsl) {
  new Carousel(document.querySelector("#leadcrsl"), {
    Autoplay: {
    timeout: 5000, 
  },
    Navigation: {
      prevTpl:
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1433_66598)"><circle cx="14" cy="14" r="13.5" fill="#F6F6F7" stroke="#F6F6F7"/><path d="M12.9487 9.10006L7.99894 14.0498L12.9487 18.9996" stroke="#201E33"/><path d="M8.74709 14.0508L19.7461 14.0508" stroke="#201E33"/></g><defs><clipPath id="clip0_1433_66598"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>',
      nextTpl:
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1433_66607)"><circle cx="14" cy="14" r="13.5" fill="#F6F6F7" stroke="#F6F6F7"/><path d="M14.7974 9.10006L19.7472 14.0498L14.7974 18.9996" stroke="#201E33"/><path d="M18.999 14.0508L8 14.0508" stroke="#201E33"/></g><defs><clipPath id="clip0_1433_66607"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>',
       },
  }); 
}



function initAccordion (selector) {
  let accordion = document.querySelector(selector);

  if (!accordion) {
    return;
  } else {
    let accordionTriggers = Array.from(accordion.querySelectorAll('.accordion__trigger'));
    accordionTriggers.forEach(item => {
      item.addEventListener('click', (e) => {
        let parentElement = e.target.closest('.accordion');
        if (parentElement.classList.contains('accordion_opened')) {
          parentElement.classList.remove('accordion_opened')
        } else {     
          parentElement.classList.add('accordion_opened')  
        }
      })
    })
  }
}
window.initAccordion = initAccordion;