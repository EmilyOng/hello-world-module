'use strict';

var expect = require('chai').expect;
var helloworld = require('../index.js');

describe('Hello World Test', () => {
	it('should return Hello World', () => {
		var result = helloworld.hello();
		expect(result).to.equal('Hello World');
	});
});