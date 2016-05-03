(function() {
	'use strict';

	const Mathematical = require('../src-handler.js').Mathematical;
	const assert = require('chai').assert;

	describe('Mathematical.round', function() {

		it('should return the same result as Math.round if provided with only one argument', () => {
			let num = 0.123456;
			let mathTest = Math.round(num);
			let mathematicalTest = Mathematical.round(num);

			assert.equal(mathTest, mathematicalTest);
		});

		it('should return a Math.round result with the specific number of decimals passed in the second argument', () => {
			let num = 0.5555555555;
			let test = Mathematical.round(num, 5);

			assert.equal(0.55556, test);
		});

		it('should always return a number as a value', () => {
			let num = 0.123456;
			let test1 = Mathematical.round(num);
			let test2 = Mathematical.round(num, 2);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
		});
	});
})();
