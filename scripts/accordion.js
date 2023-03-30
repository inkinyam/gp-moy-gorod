//инициализация аккордеонов
function initAccordion (accordion) {
 let accordionTrigger = accordion.querySelector('.accordion__trigger');
 accordionTrigger.addEventListener('click', (e) => {
    if (accordion.classList.contains('accordion_opened')) {
      accordion.classList.remove('accordion_opened')
    } else {     
      accordion.classList.add('accordion_opened')  
    }
  })
}

export default initAccordion;