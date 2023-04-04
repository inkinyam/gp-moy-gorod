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

import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

let mapContainer = document.querySelector('#ekbmap');
if (mapContainer) {
  /* var mapLeaflet = L.map(mapContainer, {
   "mapConfig":
    {
      "center":[51.828168,107.593119],
      "zoom":12,
      "bounds":null
    },
     "mapOptions":
    {
      "tap":false,
      "zoomControl":false,
      "fullscreenControl":false,
      "scrollWheelZoom":false,
      "clickFitBounds":false,
      "clickPanToLayer":false,
      "maxBounds":[[51.6922,107.3289],[52.0252,107.9993]],
      "minZoom":12,
      "maxZoom":18
    },
    "controls":
    [
      {
        "alias":"sidebar",
        "name":"sidebar",
        "options":
        {
          "position":"topright"
        }
      },
      {
        "alias":"infoSidebar",
        "name":"sidebar",
        "options":
        {
          "position":"left"
        }
      },
      {
        "alias":"legend",
        "name":"legend",
        "options":
        {
          "position":"topright",
          "title":"Условные знаки"
        }
      },
      {
        "alias":null,
        "name":"layersPanel",
        "options":
        {
          "position":"topright",
          "title":"Слои",
          "checkAllName":"Все"
        }
      },
      {
        "alias":null,
        "name":"basemaps",
        "options":
        {
          "position":"topright",
          "title":"Подосновы",
          "center":[51.828168,107.593119],
          "zoom":12
        }
      },
      {
        "alias":null,
        "name":"divider",
        "options":
        {
          "position":"topright"
        }
      },
      {
        "alias":null,
        "name":"customZoom",
        "options":
        {
          "position":"topright",
          "zoomInTitle":"Увеличить масштаб",
          "zoomOutTitle":"Уменьшить масштаб"
        }
      },
      {
        "alias":null,
        "name":"divider",
        "options":
        {
          "position":"topright"
        }
      },
      {
        "alias":null,
        "name":"fullscreen",
        "options":
        {
          "position":"topright",
          "pseudoFullscreen":true,
          "title":
          {
            "false":"Полный экран",
            "true":"Свернуть"
          }
        }
      },
      {
        "alias":null,
        "name":"defaultExtent",
        "options":
        {
          "position":"topright",
          "title":"Домой"
        }
      },
      {
        "alias":null,
        "name":"divider",
        "options":
        {
          "position":"topright"
        }
      },
      {
        "alias":null,
        "name":"permalink",
        "options":
        {
          "position":"topright",
          "title":"Поделиться",
          "copySubtitle":"Ссылка на карту",
          "copyButtonLabel":"Скопировать",
          "copySuccessMessage":"Ссылка скопирована",
          "copyErrorMessage":"Ошибка копирования ссылки на карту"
        }
      }
    ],
    "layers":
    [
      {
        "id":1,
        "name":"Граница",
        "legend":null,
        "layers":
        [
          {
            "id":1,
            "name":"Граница",
            "url":"https://ulan-ude-strategy.ru/static/uploads/map/layer/1/1/bound.geojson?v=1654865258",
            "clusterization":false,
            "options":
            {
              style: 
              {
                initial: {
                    color: '#c10000',
                    weight: 4
                }
              } 
            }
          }
        ],
        "isBaseGroup":true,
        "addToMap":true,
        "addToControl":false
      },
      {
        "name":"Идеи",
        "options":
          {
            "icon":function(feature) {
                var style = '';
                if (feature.properties.color) {
                    style = 'color: ' + feature.properties.color + ';';
                }
                                    
                return L.divIcon({
                    className: 'idea-marker',
                    html: '<i class="fa fa-map-marker" style="' + style + '"></i>'
                });
            },
             "popup":
              {
                "options":{
                  "className":"idea-popup"
                },
                "content": function(feature) {
                  var properties = feature.properties || {},
                  style = '';
                  
                  if(properties.color) {
                    style = 'color: ' + properties.color + ';';
                  }
                  
                  return '\
                    <div class="idea-popup__wrapper">\
                        <div class="idea-popup__title">\
                            <div class="idea-popup__title-label">' + properties.title + '</div>\
                        </div>\
                        <div class="idea-popup__category">\
                            <div class="idea-popup__marker idea-marker"><i class="fa fa-map-marker" style="' + style + '"></i></div>\
                            <a href="' + properties.category_url + '">' + properties.category_name + '</a>\
                        </div>\
                        <div class="idea-popup__author">' + properties.author + '</div>\
                        <div class="idea-popup__description">' + properties.annotation + '</div>\
                        <div class="idea-popup__link"><a href="' + properties.url + '" target="_blank">Читать полностью</a></div>\
                        <div class="idea-popup__likes">' + properties.likeBtn + '</div>\
                    </div>';
                }
              } 
            },
            "layers":
            [
              {
                "name":"Идеи",
                "url":"/ideas/json/",
                "clusterization":false
              }
            ],
            "addToMap":true,
            "addToControl":false
      }
    ],
    "baselayers":
    [
      {
        "id":1,
        "name":"Институт Генплана Москвы",
        "url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        "options":[]
      },http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png
      {
        "id":3,
        "name":"Satellite",
        "url":"Esri:Imagery",
        "options":
        {
          "apiKey":"AAPK7c537a938f2c4edab3373713a142497cWZmHKQsnwv2hH6cwHj4CXzfXrQrxrOXzPjShYXHbLi4HLF7Y_2iSG5Z0pE67d86G"
        }
      }
    ],
    "events":[] });
  */

    let map = L.map(mapContainer, {
        center: [51.828168,107.593119],
        zoom: 12,
        minZoom: 10,
        maxZoom: 20,
        attributionControl: false,
        zoomControl: true,
        keyboard: false,
        scrollWheelZoom: false,
        maxBounds:[[51.6922,107.3289],[52.0252,107.9993]],
      })
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([51.828168,107.593119], {
        opacity: 0.7,
        draggable: true

      }).addTo(map);

  }

