[![Build Status](https://travis-ci.org/clovislima/mathematical.svg?branch=master)](https://travis-ci.org/clovislima/mathematical)
[![Dependency Status](https://david-dm.org/clovislima/mathematical.svg)](https://david-dm.org/clovislima/mathematical)
[![devDependency Status](https://david-dm.org/clovislima/mathematical/dev-status.svg)](https://david-dm.org/clovislima/mathematical#info=devDependencies)
## Objects

<dl>
<dt><a href="#Mathematical">Mathematical</a> : <code>object</code></dt>
<dd><p>Mathematical is a collection of methods to help dealing with the Number class in javascript</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#decimalsCurry">decimalsCurry(func)</a> ⇒ <code>function</code></dt>
<dd><p>A method factory to deal with decimals</p>
</dd>
</dl>

<a name="Mathematical"></a>

## Mathematical : <code>object</code>
Mathematical is a collection of methods to help dealing with the Number class in javascript

**Kind**: global namespace  
**this**: <code>HTMLStock</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| arrayLike | <code>object</code> | A NodeList, HTMLCollection or an Array Like object containing HTMLElements or undefined properties |


* [Mathematical](#Mathematical) : <code>object</code>
    * [.Utils](#Mathematical.Utils) : <code>object</code>
        * [.round(num, [decimals])](#Mathematical.Utils.round) ⇒ <code>Number</code>
        * [.ceil(num, [decimals])](#Mathematical.Utils.ceil) ⇒ <code>Number</code>
        * [.floor(num, [decimals])](#Mathematical.Utils.floor) ⇒ <code>Number</code>
        * [.roundToEven(num, [decimals])](#Mathematical.Utils.roundToEven) ⇒ <code>Number</code>
        * [.random([min], [max])](#Mathematical.Utils.random) ⇒ <code>Number</code>
        * [.randomInt([min], [max])](#Mathematical.Utils.randomInt) ⇒ <code>Number</code>
        * [.getDirection(num)](#Mathematical.Utils.getDirection) ⇒ <code>Number</code>

<a name="Mathematical.Utils"></a>

### Mathematical.Utils : <code>object</code>
Utilities to deal with numbers

**Kind**: static namespace of <code>[Mathematical](#Mathematical)</code>  
**this**: <code>HTMLStock</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| arrayLike | <code>object</code> | A NodeList, HTMLCollection or an Array Like object containing HTMLElements or undefined properties |


* [.Utils](#Mathematical.Utils) : <code>object</code>
    * [.round(num, [decimals])](#Mathematical.Utils.round) ⇒ <code>Number</code>
    * [.ceil(num, [decimals])](#Mathematical.Utils.ceil) ⇒ <code>Number</code>
    * [.floor(num, [decimals])](#Mathematical.Utils.floor) ⇒ <code>Number</code>
    * [.roundToEven(num, [decimals])](#Mathematical.Utils.roundToEven) ⇒ <code>Number</code>
    * [.random([min], [max])](#Mathematical.Utils.random) ⇒ <code>Number</code>
    * [.randomInt([min], [max])](#Mathematical.Utils.randomInt) ⇒ <code>Number</code>
    * [.getDirection(num)](#Mathematical.Utils.getDirection) ⇒ <code>Number</code>

<a name="Mathematical.Utils.round"></a>

#### Utils.round(num, [decimals]) ⇒ <code>Number</code>
A proxy to Math.round method, but with scientific notation to deal with decimals

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The number to be rounded |
| [decimals] | <code>number</code> | The number of decimals that will be used |

<a name="Mathematical.Utils.ceil"></a>

#### Utils.ceil(num, [decimals]) ⇒ <code>Number</code>
A proxy to Math.ceil method, but with scientific notation to deal with decimals

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The number to be rounded to the next bigger value |
| [decimals] | <code>number</code> | The number of decimals that will be used |

<a name="Mathematical.Utils.floor"></a>

#### Utils.floor(num, [decimals]) ⇒ <code>Number</code>
A proxy to Math.floor method, but with scientific notation to deal with decimals

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The number to be rounded to the next lesser value |
| [decimals] | <code>number</code> | The number of decimals that will be used |

<a name="Mathematical.Utils.roundToEven"></a>

#### Utils.roundToEven(num, [decimals]) ⇒ <code>Number</code>
Rounds a number to the nearest even number

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The number to be rounded to the next even value |
| [decimals] | <code>number</code> | The number of decimals that will be used |

<a name="Mathematical.Utils.random"></a>

#### Utils.random([min], [max]) ⇒ <code>Number</code>
Generates a random float number

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>number</code> | The minimum value to be generated. If only one value is passed as an argument then this value is considered a max. |
| [max] | <code>number</code> | The maximum value to be generated. |

<a name="Mathematical.Utils.randomInt"></a>

#### Utils.randomInt([min], [max]) ⇒ <code>Number</code>
Generates a random integer number

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>number</code> | The minimum value to be generated. If only one value is passed as an argument then this value is considered a max. |
| [max] | <code>number</code> | The maximum value to be generated. |

<a name="Mathematical.Utils.getDirection"></a>

#### Utils.getDirection(num) ⇒ <code>Number</code>
Returns -1 if the number passed is negative, +1 e its positive or 0 if its 0

**Kind**: static method of <code>[Utils](#Mathematical.Utils)</code>  
**Throws**:

- <code>TypeError</code> 

**Access:** public  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | A number on which the direction will be discovered |

<a name="decimalsCurry"></a>

## decimalsCurry(func) ⇒ <code>function</code>
A method factory to deal with decimals

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function that will deal with decimals |

