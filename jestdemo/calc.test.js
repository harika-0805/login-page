const Calc= require('./calc');
beforeAll(() => {
    console.log('before all tests...'); 
});
afterAll(() => {    
    console.log('after all tests...');
});
beforeEach(() => {
    console.log('before each test...');
});
afterEach(() => {
    console.log('after each test...');
});
test('add 1+2 to equal 3', () => {
    const calc = new Calc();
    expect(calc.add(1,2)).toBe(3);
});
test('add 1+2 to equal 3', () => {
    const calc = new Calc();
    expect(calc.add(1,2)).toBe(3);
});
test('subtract 5-2 to equal 3', () => {
    const calc = new Calc();
    expect(calc.subtract(5,2)).toBe(3);
});
test('multiply 2*3 to equal 6', () => {
    const calc = new Calc();
    expect(calc.multiply(2,3)).toBe(6);
});
test('divide 6/2 to equal 3', () => {
    const calc = new Calc();
    expect(calc.divide(6,2)).toBe(3);
});
test('divide by zero throws error', () => {
    const calc = new Calc();
    expect(() => calc.divide(6,0)).toThrow("cannot divide by zero");
});