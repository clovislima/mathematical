(function() {
	'use strict';

	const Mathematical = require('../src-handler.js').Mathematical;
	const assert = require('chai').assert;

	describe('Mathematical.floor', function() {

		it('should return the same result as Math.floor if provided with only one argument', () => {
			let num = 0.123456;
			let mathTest = Math.floor(num);
			let mathematicalTest = Mathematical.floor(num);

			assert.equal(mathTest, mathematicalTest);
		});

		it('should return a Math.floor result with the specific number of decimals passed in the second argument', () => {
			let num = 0.5555555555;
			let test = Mathematical.floor(num, 5);

			assert.equal(0.55555, test);
		});

		it('should always return a number as a value', () => {
			let num = 0.123456;
			let test1 = Mathematical.floor(num);
			let test2 = Mathematical.floor(num, 2);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
		});
	});
})();
