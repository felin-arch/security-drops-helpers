'use strict';

const SPECIAL_LETTERS = ['Q', 'g', 'j', 'p', 'q', 'y', ',']

class Wrapper {

  constructor(cssClass) {
    this._mode = 'normal';
    this._out = '';
    this._buffer = '';
    this._letterIndex = 0;
    this.cssClass = cssClass;
  }

  wrap(title) {
    if (!title) {
      return this._out;
    }

    return this._wrap(title);
  }

  _initialize(title) {
    this._out = '';
    this._buffer = '';
    this._letterIndex = 0;
    this._mode = this._isSpecial(title[this._letterIndex]) ? 'special' : 'normal';
  }

  _wrap(title) {
    this._initialize(title);

    while (this._notFinished(title)) {
      let letter = title[this._letterIndex];

      if (this._shouldChangeMode(letter)) {
        this._out += this._wrapBuffer();
        this._changeMode();
        continue;
      }

      this._buffer += letter;
      this._letterIndex++;
    }

    this._out += this._wrapBuffer();
    return this._out;
  }

  _notFinished(title) {
    return this._letterIndex < title.length;
  }

  _shouldChangeMode(letter) {
    return this._shouldChangeToNormal(letter) ||
      this._shouldChangeToSpecial(letter);
  }

  _changeMode() {
    this._buffer = '';
    this._toggleMode();
  }

  _isSpecial(letter) {
    return SPECIAL_LETTERS.indexOf(letter) !== -1;
  }

  _wrapBuffer() {
    if (this._mode === 'special') {
      return this._wrapBufferSepcial();
    }

    return this._wrapBufferNormal();
  }

  _wrapBufferNormal() {
    return '<span>' + this._buffer + '</span>';
  }

  _wrapBufferSepcial() {
    return '<span class="' + this.cssClass + '">' + this._buffer + '</span>';
  }

  _toggleMode() {
    this._mode = this._mode === 'normal' ? 'special' : 'normal';
  }


  _shouldChangeToNormal(letter) {
    return this._mode === 'special' && !this._isSpecial(letter);
  }

  _shouldChangeToSpecial(letter) {
    return this._mode === 'normal' && this._isSpecial(letter);
  }

}

module.exports = Wrapper;
