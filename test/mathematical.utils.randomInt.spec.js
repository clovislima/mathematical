import {Mathematical} from '../src/mathematical.js';
import {assert} from 'chai';

(function() {
	'use strict';

	describe('Mathematical.Utils.randomInt', function() {

		it('should return a random integer when fed with no arguments', () => {
			for (let i = 1000, test1, test2; i; i--) {
				test1 = Mathematical.Utils.randomInt();
				test2 = Mathematical.Utils.randomInt();

				assert.notEqual(test1, test2);
				assert.isNotOk(test1.toString().match(/\./));
				assert.isNotOk(test2.toString().match(/\./));
			}
		});

		it('should return a random integer bigger than 0 when fed with no arguments', () => {
			for (let i = 1000; i; i--) /*do*/ assert.isTrue(Mathematical.Utils.randomInt() > 0);
		});

		it('should return a random integer lesser or equal to the required number when fed with 1 argument', () => {
			let max = 5;
			for (let i = 1000; i; i--) /*do*/ assert.isTrue(Mathematical.Utils.randomInt(max) <= max);
		});

		it('should return a random number between the 2 required numbers when fed with 2 arguments', () => {
			let min = 2;
			let max = 5;
			for (let i = 1000, value; i; i--) {
				value = Mathematical.Utils.randomInt(min, max);
				assert.isTrue(value >= min && value <= max);
			}
		});

		it('should always return a number as a value', () => {
			let test1 = Mathematical.Utils.randomInt();
			let test2 = Mathematical.Utils.randomInt(3);
			let test3 = Mathematical.Utils.randomInt(3,5);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
			assert.equal(typeof test3, 'number');
		});
	});
})();
