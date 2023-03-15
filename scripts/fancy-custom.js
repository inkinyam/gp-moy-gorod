/*____________________подключение фансибокс-галереи____________________*/

//подключение  Фансибокс 
import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.esm.js"; 

const mediaQuerySmallSize = window.matchMedia('(min-width: 600px)'); // проверяем мобилка или десктоп

Fancybox.defaults.ScrollLock = false;
Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: [
      "thumbs",
      "close",
    ],
   items: {
      thumbs: {
        type: "button",
        label: "TOGGLE_THUMBS",
        class: "fancybox__button--thumbs",
        html: '<svg viewBox="2 2 24 24"  xmlns="http://www.w3.org/2000/svg"><rect x="18" y="7.5" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="18" y="12.75" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="18" y="18" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="12.75" y="7.5" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="12.75" y="12.75" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="12.75" y="18" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="7.5" y="7.5" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="7.5" y="12.75" width="2.5" height="2.5" fill="inherit" stroke="inherit"/><rect x="7.5" y="18" width="2.5" height="2.5" fill="inherit" stroke="inherit"/></svg>',      click: function (event) {
          event.stopPropagation();
          const thumbs = this.fancybox.plugins.Thumbs;
          if (thumbs) {
            thumbs.toggle();
          }
        },
      },
      close: {
        type: "button",
        label: "CLOSE",
        class: "fancybox__button--close",
        html: '<svg width="24" height="24" viewBox="4 4 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0011 14.7154L20.1332 20.8528L20.84 20.1454L14.7079 14.008L20.8559 7.85475L20.1491 7.14734L14.0011 13.3006L7.84817 7.14246L7.14136 7.84987L13.2943 14.008L7.15723 20.1503L7.86404 20.8577L14.0011 14.7154Z" fill="inherit"/></svg>',
        tabindex: 1,
        click: function (event) {
          event.stopPropagation();
          event.preventDefault();
    
          this.fancybox.close();
        },
      },
    }
  },
  Carousel: {
    Navigation: {
      prevTpl:
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2798_101513)"><circle cx="14" cy="14" r="13.3" stroke="inherit" stroke-width="1.4"/><path d="M12.9487 9.10006L7.99894 14.0498L12.9487 18.9996" stroke="inherit" stroke-width="1.4"/><path d="M8.74709 14.0508L19.7461 14.0508" stroke="inherit" stroke-width="1.4"/></g><defs><clipPath id="clip0_2798_101513"><rect width="28" height="28" fill="inherit"/></clipPath></defs></svg>',
      nextTpl:
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2798_101521)"><circle cx="14" cy="14" r="13.3" stroke="inherit" stroke-width="1.4"/><path d="M14.7974 9.10006L19.7472 14.0498L14.7974 18.9996" stroke="inherit" stroke-width="1.4"/> <path d="M18.999 14.0508L8 14.0508" stroke="inherit" stroke-width="1.4"/></g><defs><clipPath id="clip0_2798_101521"><rect width="28" height="28" fill="inherit"/></clipPath></defs></svg>',
    },
  },
  Image: {
    zoom: true,
    click: false,
    wheel: "slide",
  }
});

Fancybox.Plugins.Thumbs.defaults.autoStart = false;

if (!mediaQuerySmallSize.matches) {
  Fancybox.Plugins.Thumbs.defaults.autoStart = true;
}