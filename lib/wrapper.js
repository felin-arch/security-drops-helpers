'use strict';

const SPECIAL_LETTERS = ['Q', 'g', 'j', 'p', 'q', 'y', ',']

class Wrapper {

  wrap(title) {
    if (!title) {
      return '';
    }

    var out = '';
    var buffer = '';
    var i = 0;
    var mode = this._isSpecial(title[i]) ? 'special' : 'normal';
    while (i <= title.length) {
      let letter = title[i];

      if (i === title.length) {
        out += this._wrap(buffer, mode);
        i++;
        continue;
      }

      if (mode === 'normal' && !this._isSpecial(letter)) {
        buffer += letter;
        i++;
        continue;
      }

      if (mode === 'special' && this._isSpecial(letter)) {
        buffer += letter;
        i++;
        continue;
      }

      if (mode === 'normal' && this._isSpecial(letter)) {
        out += this._wrapNormal(buffer);
        buffer = '';
        mode = 'special';
        continue;
      }

      if (mode === 'special' && !this._isSpecial(letter)) {
        out += this._wrapSepcial(buffer);
        buffer = '';
        mode = 'normal';
        continue;
      }

    }

    return out;
  }

  _isSpecial(letter) {
    return SPECIAL_LETTERS.indexOf(letter) !== -1;
  }

  _wrap(buffer, mode) {
    if (mode === 'special') {
      return this._wrapSepcial(buffer);
    }

    return this._wrapNormal(buffer);
  }

  _wrapNormal(buffer) {
    return '<span>' + buffer + '</span>';
  }

  _wrapSepcial(buffer) {
    return '<span class="X">' + buffer + '</span>';
  }

}

module.exports = Wrapper;
