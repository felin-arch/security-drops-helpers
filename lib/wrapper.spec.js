'use strict';

const Wrapper = require('./wrapper');
const expect = require('chai').expect;

describe('Wrapper', function() {
  let wrapper = new Wrapper();

  describe('#wrap', function() {

    it('returns an empty string if nothing is passed', function() {
      expect(wrapper.wrap('')).to.eql('');
    });

    it('wraps a single non-special letter within span tags', function() {
      expect(wrapper.wrap('A')).to.eql('<span>A</span>');
    });

    it('wraps a multiple non-special letter within span tags', function() {
      expect(wrapper.wrap('And')).to.eql('<span>And</span>');
    });

    it('wraps a single special letter within special span tags', function() {
      expect(wrapper.wrap('g')).to.eql('<span class="X">g</span>');
    });

    it('wraps multiple special letter within special span tags', function() {
      expect(wrapper.wrap('gy')).to.eql('<span class="X">gy</span>');
    });

    it('wraps title correctly', function() {
      expect(wrapper.wrap('Defense in depth')).to.eql('<span>Defense in de</span><span class="X">p</span><span>th</span>');
    });

    it('wraps title correctly various letters', function() {
      expect(wrapper.wrap('ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz,')).to.eql(
        '<span>ABCDEFGHIJKLMNOP</span><span class="X">Q</span>' +
        '<span>RSTUVXYZabcdef</span><span class="X">g</span><span>hi</span>' +
        '<span class="X">j</span><span>klmno</span><span class="X">pq</span>' +
        '<span>rstuvx</span><span class="X">y</span><span>z</span>' +
        '<span class="X">,</span>'
      );
    });

  });

});
