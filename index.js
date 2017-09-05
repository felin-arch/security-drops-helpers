var App = require('ghost-app');

const SecurityDropsHelpers = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {
      this.ghost.helpers.register('ifeq', this._ifEq);
    },

    deactivate: function () {},

    _ifEq: function(a, b, options) {
      return (a === b) ? options.fn(this) : options.inverse(this);
    }

});

module.exports = SecurityDropsHelpers;
