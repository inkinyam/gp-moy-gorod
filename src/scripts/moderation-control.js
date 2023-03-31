let cardsArray = Array.from(document.querySelectorAll('.moderation__tables-item'));
if (cardsArray.length != 0) {
  cardsArray.map(item => {
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