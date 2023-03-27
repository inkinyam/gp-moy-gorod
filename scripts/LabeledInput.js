// класс для инпута с лейблом
class LabeledInput {
  constructor (input) {
    this._el = input;
    this._label = document.querySelector(`[for="${this._el.id}"]`);
  }

  _setActiveLabel () {
    this._label.classList.add('form__label_active');
  }

  _setUnactiveLabel () { 
    if (!this._el.value) {
      this._label.classList.remove('form__label_active');
    }
  }

  setEventListeners(e) {
    this._el.addEventListener("click", () => {
       this._setActiveLabel()
    });

    this._el.addEventListener("blur", () => {
       this._setUnactiveLabel()
    });
  }
}

export default LabeledInput;


