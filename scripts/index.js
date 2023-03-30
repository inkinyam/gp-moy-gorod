import { Carousel } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.esm.js"; 
import { Autoplay } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/carousel.autoplay.esm.js";
import LabeledInput from './LabeledInput.js'
import Tabs from "./LinkedTabs.js";
import initAccordion from './accordion.js';


// хедер, обработка клика на бургер
let header = document.querySelector('header');
if (header) {
  let burgerButton = header.querySelector('.header__burger');
  burgerButton.addEventListener('click', () => {
    header.classList.toggle('open')
  })

};

// инициализация карусели на главной
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