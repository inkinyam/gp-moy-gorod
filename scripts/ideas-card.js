let cardlist = document.querySelector('.ideas__list');
  if (cardlist) {
    let likes = Array.from(cardlist.querySelectorAll('.ideas__like'));
    likes.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('liked');
      })
    })
  } 
  else {
    console.log('ERR: карточки с лайками не нашлись')
  }

