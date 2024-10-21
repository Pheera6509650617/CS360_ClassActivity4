const {add, subtract, multiply} = require('../math.js')

describe('Math test', () => {
	it('addition', async () => {
		expect(add(5, 3)).toEqual(8) ;
	}) ;

	it('subtract', async () => {
		expect(subtract(5, 1)).toEqual(4) ;
	}) ;

	it('multiply', async () => {
		expect(multiply(2, 3)).toEqual(6) ;
	}) ;
});
