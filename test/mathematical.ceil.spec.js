import {Mathematical} from '../src/mathematical.js';
import {assert} from 'chai';

(function() {
	'use strict';

	describe('Mathematical.ceil', function() {

		it('should return the same result as Math.ceil if provided with only one argument', () => {
			let num = 0.123456;
			let mathTest = Math.ceil(num);
			let mathematicalTest = Mathematical.ceil(num);

			assert.equal(mathTest, mathematicalTest);
		});

		it('should return a Math.ceil result with the specific number of decimals passed in the second argument', () => {
			let num = 0.5555555555;
			let test = Mathematical.ceil(num, 5);

			assert.equal(0.55556, test);
		});

		it('should always return a number as a value', () => {
			let num = 0.123456;
			let test1 = Mathematical.ceil(num);
			let test2 = Mathematical.ceil(num, 2);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
		});
	});
})();
