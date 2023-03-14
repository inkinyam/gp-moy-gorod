let header = document.querySelector('header');
if (header) {
  let burgerButton = header.querySelector('.header__burger');
  burgerButton.addEventListener('click', () => {
    header.classList.toggle('open')
  })

} else {
  console.log('ERR: header не найден, опять накосячила');
};