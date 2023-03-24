//инициализация аккордеонов
function initAccordion (selector) {
  let accordion = document.querySelector(selector);

  if (!accordion) {
        console.log('ERROR: Указан некорректный идентификатор блока для функции initAccordion');
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

