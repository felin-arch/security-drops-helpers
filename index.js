const App = require('ghost-app');

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pills = [
  '<svg width="32" height="38" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M61.688 28.092c-.03-1.372-.693-2.71-1.903-3.558-2.02-1.414-4.803-.923-6.217 1.096l-13.52 19.31c-1.415 2.02-.924 4.803 1.096 6.217 1.156.81 2.564.995 3.82.626-3.022 1.972-7.064 2.03-10.202-.168L33.884 51c-4.12-2.885-5.12-8.564-2.236-12.684l12.906-18.432c2.885-4.12 8.564-5.12 12.684-2.236l.878.614c3.227 2.26 4.54 6.234 3.572 9.83zm-3.132-1.803c1.05.735 1.306 2.182.57 3.233l-13.52 19.31c-.736 1.05-2.183 1.304-3.233.57-1.05-.736-1.306-2.184-.57-3.234l13.52-19.31c.735-1.05 2.183-1.306 3.233-.57z" id="pill1"/></defs><use fill="#E6E6E6" fill-rule="nonzero" xlink:href="#pill1" transform="translate(-30.000000, -16.000000)"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M29.35 20c-1.296.355-2.52 1.04-3.538 2.06-3.126 3.126-3.126 8.194 0 11.32l9.056 9.056c3.126 3.126 8.194 3.126 11.32 0 2.93-2.928 3.114-7.562.555-10.706l2.162 2.163c4.127 4.126 4.127 10.816 0 14.942-4.126 4.127-10.816 4.127-14.943 0L23.095 37.968c-4.127-4.126-4.127-10.817 0-14.943 1.753-1.753 3.97-2.762 6.255-3.025zm-2.18 3.418c2.376-2.376 6.228-2.376 8.604 0l9.056 9.056c2.376 2.376 2.376 6.228 0 8.604-2.376 2.376-6.228 2.376-8.604 0l-9.056-9.056c-2.376-2.376-2.376-6.228 0-8.604z" id="pill2"/></defs><use fill="#E6E6E6" fill-rule="nonzero" xlink:href="#pill2" transform="translate(-20.000000, -20.000000)"/></svg>',
  '<svg width="24" height="41" viewBox="0 0 32 56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M70 6c8.837 0 16 7.163 16 16v23.273c0 8.836-7.163 16-16 16s-16-7.164-16-16V22c0-8.837 7.163-16 16-16zm0 3.88c-6.694 0-12.12 5.426-12.12 12.12v19.394c0 6.694 5.426 12.12 12.12 12.12 6.694 0 12.12-5.426 12.12-12.12V22c0-6.694-5.426-12.12-12.12-12.12zm0 2.908c5.088 0 9.212 4.124 9.212 9.212v19.394c0 5.088-4.124 9.212-9.212 9.212s-9.212-4.124-9.212-9.212V22c0-5.088 4.124-9.212 9.212-9.212z" id="pill3"/></defs><use fill="#E6E6E6" fill-rule="nonzero" xlink:href="#pill3" transform="translate(-54.000000, -6.000000)"/></svg>'
]

const SecurityDropsHelpers = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {
      this.ghost.helpers.register('ifeq', this._ifEq);
      this.ghost.helpers.register('pill', this._pill);
    },

    deactivate: function () {},

    _ifEq: function(a, b, options) {
      return (a === b) ? options.fn(this) : options.inverse(this);
    },

    _pill: function(a, b, options) {
      return pills[randomIntFromInterval(0, 2)];
    }

});

module.exports = SecurityDropsHelpers;
