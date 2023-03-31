import '../styles/index.scss';

import LabeledInput from './LabeledInput.js'
import Tabs from "./LinkedTabs.js";
import initAccordion from './accordion.js';
import { Carousel } from '@fancyapps/ui';
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";

// хедер, обработка клика на бургер
let header = document.querySelector('header');
if (header) {
  let burgerButton = header.querySelector('.header__burger');
  burgerButton.addEventListener('click', () => {
    header.classList.toggle('open')
  })

};

// инициализация карусели на главной
let leadCrsl = document.querySelector("#leadcrsl");
if (leadCrsl) {
  new Carousel(document.querySelector("#leadcrsl"), {
    Autoplay: {
      timeout: 5000, 
      showProgress: false
    }, 
    Dots: false,
    Navigation: false,
  }, {Autoplay}); 
}


// инициализация "всплывающих" лейблов в формах
let labeledInputs = Array.from(document.querySelectorAll('.labeledinput'));
if (labeledInputs.length != 0) {
  labeledInputs.forEach(item => {
    let el = new LabeledInput(item);
    el.setEventListeners();
  })
}

let accordionsArray = Array.from(document.querySelectorAll('.accordion'));
if (accordionsArray.length != 0) {
  accordionsArray.forEach(item => {
    initAccordion(item);
  })
}

// инициализация табов
let tabs = Array.from(document.querySelectorAll('.tabs'));
if (tabs.length != 0) {
  tabs.forEach(item => {
    let el = new Tabs(`.${item.classList[0]}`);
  })
}

// обработчик на клик лайка в карточках
let likeButtons = Array.from(document.querySelectorAll('.like'));
if (likeButtons.length != 0) {
  likeButtons.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('liked');
    })
  })
} 

//кнопка вверх на страницах
if (window.innerHeight > 950) {
  // если страница длинная, создаем кнопку UP
  let body = document.querySelector('.page');
  let upBtn = document.createElement('div');
  upBtn.classList.add('up');
  body.append(upBtn);

  upBtn.addEventListener('click', function(e) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })

  window.onscroll = () =>
  window.scrollY > 620
    ? (upBtn.classList.add('up_showed'))
    : (upBtn.classList.remove('up_showed'));
}

// анимация курсора при наведении
let hoverableElement = document.querySelectorAll('.withCursor');
if (hoverableElement.length != 0) {
  // если находим элементы, помеченные нужным классом, создаем курсор
  let body = document.querySelector('.page');
  let cursor = document.createElement('div');
  cursor.classList.add('cursor');
  body.append(cursor);

  // движение курсора
  const handleMouseMove = (e) => {
    TweenMax.to(cursor, .4, {
      x: e.clientX ,
      y: e.clientY,
    })
  }
 // ховер на элемент с классом withCursor
  const handleMouseHover = () => {
    TweenMax.to(cursor, .3, {
      scale: 50,
      opacity: 0.7
    })
  }

  // возвращение к стандартному размеру
  const handleMouseOut = () => {
    TweenMax.to(cursor, .3, {
      scale: 0.1
    })
  }


  document.body.addEventListener('mousemove', handleMouseMove);
  
  hoverableElement.forEach(item => {
    item.addEventListener('mouseenter', handleMouseHover);
    item.addEventListener('mouseleave', handleMouseOut);
  })
}

function AnimationObserver(){
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const { target } = entry;
      
      if (entry.intersectionRatio >= 0.4) {
        target.classList.add("line");
      } else {
       // target.classList.remove("line");
      }
    });
  };

  let options = {
    threshold: [.0,.1,.2,.3,.4,.5,.6,.7,.8,.9,] };
  let observer = new IntersectionObserver(callback, options);
  let elements = document.querySelectorAll('.withLine');
  
  if (elements.length != 0) {
    elements.forEach(elm => {observer.observe(elm);})
  }
}

AnimationObserver();

// страница редактирования профиля, можно разблокировать и изменить, или просто посмотреть
let profileForm = document.querySelector('.profile__form');
if (profileForm) {
  let field = profileForm.querySelector('.auth__field');
  let button = profileForm.querySelector('.auth__button');

  button.addEventListener('click', e => {
    e.preventDefault();
    if (field.disabled === true) {
      field.removeAttribute('disabled');
      button.textContent = 'Сохранить';
      button.setAttribute('type', 'submit');

      // вставить отправку формы на сервер сюда
    } else {
      field.setAttribute('disabled', 'true');
      button.textContent = 'Изменить';
      button.setAttribute('type', 'button');
    }
  })
}

// проверка на соответствие пароля и повтора пароля
let newPassForm = document.querySelector('.newpass__form');
if (newPassForm) {
 let oldPass = newPassForm.querySelector('#oldpass');
 let newPass = newPassForm.querySelector('#newpass1');
 let confirmPass = newPassForm.querySelector('#newpass2');

 newPass.addEventListener('input', (e) => {
  let newPassBox = newPass.closest('.auth__input-group');
  let newPassErr = newPassBox.querySelector('.auth__err');

  if (oldPass.value === e.target.value) {
    newPassBox.classList.add('is-invalid');
    newPassErr.textContent = 'Указанный пароль совпадает с использующимся ранее, выберите другой';
  } else {
    newPassBox.classList.remove('is-invalid');
    newPassErr.textContent = '';
   }
 })

 confirmPass.addEventListener('input', (e) => {
  let newPassBox = confirmPass.closest('.auth__input-group');
  let newPassErr = newPassBox.querySelector('.auth__err');

  if (newPass.value != e.target.value) {
    newPassBox.classList.add('is-invalid');
    newPassErr.textContent = 'Введенные пароли не совпадают, повторите попытку';
   } else {
    newPassBox.classList.remove('is-invalid');
    newPassErr.textContent = '';
   }
 })

}

let moderationCards = Array.from(document.querySelectorAll('.moderation__tables-item'));
if (moderationCards.length != 0) {
  moderationCards.map(item => {
    let aproveButton = item.querySelector('.aprove');
    let declineButton = item.querySelector('.decline');

    aproveButton.addEventListener('click', ()=> {
      item.classList.remove('declined');
      item.classList.toggle('approved');
    })

    declineButton.addEventListener('click', ()=> {
      item.classList.remove('approved');
      item.classList.toggle('declined');
    })
  })
}

let selects = Array.from(document.querySelectorAll('.idea-edit__select'));

if (selects.length != 0 ) {
  selects.map(item => {

    const selectSingle_title = item.querySelector('.idea-edit__select-title');
    const selectSingle_labels = item.querySelectorAll('.idea-edit__select-label');
    
    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
      if ('active' === item.getAttribute('data-state')) {
        item.setAttribute('data-state', '');
      } else {
        item.setAttribute('data-state', 'active');
      }
    });
    
    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        item.setAttribute('data-state', '');
      });
    }
  })
}

let texAreas = Array.from(document.querySelectorAll('.idea-edit__txtarea')); // ищем все textarea

if (texAreas.length != 0) {
  texAreas.forEach(item => {
    item.addEventListener('keyup', e => {
      item.style.height = "auto";
      let scHeight = e.target.scrollHeight;
      item.style.height = `${scHeight}px`;
    })
  })
}