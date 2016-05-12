import {Mathematical} from '../src/mathematical.js';
import {assert} from 'chai';

(function() {
	'use strict';

	describe('Mathematical.Utils.roundToEven', function() {

		it('should return a Math.round going to the nearest even number', () => {
			let num1 = 1.5;
			let num2 = 4.5;

			assert.equal(2, Mathematical.Utils.roundToEven(num1));
			assert.equal(4, Mathematical.Utils.roundToEven(num2));
		});

		it('should return a Math.roundToEven result with the specific number of decimals passed in the second argument', () => {
			let num1 = 0.555555;
			let num2 = 0.555545;

			assert.equal(0.55556, Mathematical.Utils.roundToEven(num1, 5));
			assert.equal(0.55554, Mathematical.Utils.roundToEven(num2, 5));
		});

		it('should always return a number as a value', () => {
			let num = 0.123456;
			let test1 = Mathematical.Utils.roundToEven(num);
			let test2 = Mathematical.Utils.roundToEven(num, 2);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
		});
	});
})();
