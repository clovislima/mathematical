'use strict';
/**
 * Mathematical is a collection of methods to help dealing with the Number class in javascript
 * @namespace Mathematical
 * @public
 * @param {object} arrayLike - A NodeList, HTMLCollection or an Array Like object containing HTMLElements or undefined properties
 * @this HTMLStock
 * @since 0.1.0
 */
export var Mathematical = {};

/**
 * A method factory to deal with decimals
 * @method decimalsCurry
 * @param {function} func - The function that will deal with decimals
 * @return {function}
 * @since 1.0.0
 */
function decimalsCurry(func) {
	return function(value, decimals) {
		if (!decimals) /*then*/ return func(value);
		return Number(func(value + 'e' + decimals) + 'e-' + decimals);
	};
}

/**
 * A proxy to Math.round method, but with scientific notation to deal with decimals
 * @method round
 * @memberof Mathematical
 * @public
 * @param {number} num - The number to be rounded
 * @param {number} [decimals] - The number of decimals that will be used
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.round = decimalsCurry(Math.round);
/**
 * A proxy to Math.ceil method, but with scientific notation to deal with decimals
 * @method ceil
 * @memberof Mathematical
 * @public
 * @param {number} num - The number to be rounded to the next bigger value
 * @param {number} [decimals] - The number of decimals that will be used
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.ceil = decimalsCurry(Math.ceil);
/**
 * A proxy to Math.floor method, but with scientific notation to deal with decimals
 * @method floor
 * @memberof Mathematical
 * @public
 * @param {number} num - The number to be rounded to the next lesser value
 * @param {number} [decimals] - The number of decimals that will be used
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.floor = decimalsCurry(Math.floor);

/**
 * Rounds a number to the nearest even number
 * @method roundToEven
 * @memberof Mathematical
 * @public
 * @param {number} num - The number to be rounded to the next even value
 * @param {number} [decimals] - The number of decimals that will be used
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.roundToEven = function(value,decimals) {
	var testValue= this.round(value, decimals ? decimals + 2 : 2).toString();
	var nearest = testValue.slice(-2, -1);
	nearest = Number(nearest === '.' ? testValue.slice(-3, -2) : nearest);

	if (nearest % 2 === 0) /*then*/ return this.floor.apply(this, arguments);

	return this.ceil.apply(this, arguments);
};

/**
 * Generates a random float number
 * @method random
 * @memberof Mathematical
 * @public
 * @param {number} [min] - The minimum value to be generated. If only one value is passed as an argument then this value is considered a max.
 * @param {number} [max] - The maximum value to be generated.
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.random = (function(_rand) {
	return function(min, max) {
		if (!arguments.length) /*then*/ return _rand();
		if (!max) /*then*/ return _rand() * min;

		return (_rand() * (max - min)) + min;
	};
})(Math.random);

/**
 * Generates a random integer number
 * @method randomInt
 * @memberof Mathematical
 * @public
 * @param {number} [min] - The minimum value to be generated. If only one value is passed as an argument then this value is considered a max.
 * @param {number} [max] - The maximum value to be generated.
 * @return {Number}
 * @since 1.0.0
 */
Mathematical.randomInt = function(min, max) {
	if (!arguments.length) /*then*/ return Number(this.random().toString().replace('0.', ''));

	return this.ceil(this.random.call(this, min, max));
};

/**
 * Returns -1 if the number passed is negative, +1 e its positive or 0 if its 0
 * @method getDirection
 * @memberof Mathematical
 * @public
 * @param {number} num - A number on which the direction will be discovered
 * @return {Number}
 * @throws {TypeError}
 * @since 1.0.0
 */
Mathematical.getDirection = function(num) {
	if (typeof num !== 'number') /*then*/ throw TypeError('Expected a Number, but found ' + typeof num);

	return num ? num/Math.abs(num) : 0;	
};