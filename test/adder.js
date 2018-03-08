'use strict';

const { adder } = require('..');
const { expect } = require('chai');

describe('Adder', () => {
    it('adds two numbers', () => {
        expect(adder(1,2)).to.equal(3);
    });
});
