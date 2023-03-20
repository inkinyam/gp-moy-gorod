let likeButtons = Array.from(document.querySelectorAll('.like'));
  if (likeButtons.length != 0) {
    likeButtons.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('liked');
      })
    })
  } 
  else {
    console.log('ERR: карточки с лайками не нашлись')
  }

