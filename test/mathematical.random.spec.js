(function() {
	'use strict';

	const Mathematical = require('../src-handler.js').Mathematical;
	const assert = require('chai').assert;

	describe('Mathematical.random', function() {

		it('should return a random integer when fed no arguments', () => {
			for (let i = 1000; i; i--) /*do*/ assert.notEqual(Mathematical.random(), Mathematical.random());
		});

		it('should return a random number lesser than 1 when fed with no arguments', () => {
			for (let i = 1000; i; i--) /*do*/ assert.isTrue(Mathematical.random() < 1);
		});

		it('should return a random number lesser than the required number when fed with 1 argument', () => {
			let max = 5;
			for (let i = 1000; i; i--) /*do*/ assert.isTrue(Mathematical.random(max) < max);
		});

		it('should return a random number between (including) the 2 required numbers when fed with 2 arguments', () => {
			let min = 2;
			let max = 5;
			for (let i = 1000, value; i; i--) {
				value = Mathematical.random(min, max);
				assert.isTrue(value >= min && value < max);
			}
		});

		it('should always return a number as a value', () => {
			let test1 = Mathematical.random();
			let test2 = Mathematical.random(3);
			let test3 = Mathematical.random(3,5);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
			assert.equal(typeof test3, 'number');
		});
	});
})();
