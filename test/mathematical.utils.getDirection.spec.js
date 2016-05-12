import {Mathematical} from '../src/mathematical.js';
import {assert} from 'chai';

(function() {
	'use strict';

	describe('Mathematical.Utils.getDirection', function() {

		it('should return 1 when the number passed is a positive one', () => {
			let num = 0.00001;

			assert.equal(Mathematical.Utils.getDirection(num), 1);
		});

		it('should return 0 when the number passed is 0 (zero)', () => {
			let num = 0;

			assert.equal(Mathematical.Utils.getDirection(num), 0);
		});

		it('should return -1 when the number passed is a negative one', () => {
			let num = -0.00001;

			assert.equal(Mathematical.Utils.getDirection(num), -1);
		});

		it('should throw a TypeError is anything is passed as num other than a number', () => {
			try {
				Mathematical.Utils.getDirection();
			} catch (e) {
				assert.isTrue(/TypeError.*?Expected\sa\sNumber,\sbut\sfound/.test(e));
			}

		});

		it('should always return a number as a value', () => {
			let test1 = Mathematical.Utils.getDirection(0);
			let test2 = Mathematical.Utils.getDirection(0.00001);
			let test3 = Mathematical.Utils.getDirection(-9000);

			assert.equal(typeof test1, 'number');
			assert.equal(typeof test2, 'number');
			assert.equal(typeof test3, 'number');
		});
	});
})();
