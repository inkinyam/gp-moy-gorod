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