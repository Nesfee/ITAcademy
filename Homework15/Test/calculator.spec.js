const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let calculator = new Calculator();

  describe('add', () => {
    test.each`
      input              | expected
      ${[1, 2, 3]}       | ${6}
      ${[4, -1, 0]}      | ${3}
      ${[-4, -4, 4]}     | ${-4}
    `('returns the sum of $input', async ({ input, expected }) => {
      const result = await calculator.add(...input);
      await expect(result).toBe(expected);
    });
  });

  describe('multiply', () => {
    test.each`
      input              | expected
      ${[0, 0, 4]}       | ${0}
      ${[-1, 0, 1]}      | ${0}
      ${[-3, -4, 1]}     | ${12}
    `('returns the product of $input', async ({ input, expected }) => {
      const result = await calculator.multiply(...input);
      await expect(result).toBe(expected);
    });
  });

  describe('subtraction', () => {
    test.each`
      reduced | subtrahend | expected
      ${10}   | ${2}       | ${8}
      ${0}    | ${5}       | ${-5}
      ${-4}   | ${-6}      | ${2}
    `('subtracts $subtrahend from $reduced', async ({ reduced, subtrahend, expected }) => {
      const result = await calculator.subtraction(reduced, subtrahend);
      await expect(result).toBe(expected);
    });

  });

  describe('divide', () => {
    test.each`
      dividend  | divider | expected
      ${10}     | ${2}    | ${5}
      ${-25}    | ${5}    | ${-5}
      ${-4}     | ${-4}   | ${1}
    `('divides $dividend by $divider', async ({ dividend, divider, expected }) => {
      const result = await calculator.divide(dividend, divider);
      await expect(result).toBe(expected);
    });
  });

  describe('exponentiation', () => {
    test.each`
      number  | expected
      ${2}    | ${4}
      ${-6}   | ${36}
      ${0}    | ${0}
    `('returns the square of $number', async ({ number, expected }) => {
      const result = await calculator.exponentiation(number);
      await expect(result).toBe(expected);
    });
  });

  describe('Negative test', () => {
    test('returns NaN for non-numeric arguments', async () => {
      const addResult = await calculator.add('abc', 'bar', 'jgt');
      await expect(addResult).toBeNaN();

      const multiplyResult = await calculator.multiply('abc', 'bar', 'jgt');
      await expect(multiplyResult).toBeNaN();

      const subtractionResult = await calculator.subtraction('abc', 'bar');
      await expect(subtractionResult).toBeNaN();

      const divideResult = await calculator.divide('abc', 'bar');
      await expect(divideResult).toBeNaN();

      const exponentiationResult = await calculator.exponentiation('abc');
      await expect(exponentiationResult).toBeNaN();
    });

    test('returns Infinity for division by zero', async () => {
      const result = await calculator.divide(10, 0);
      await expect(result).toBe(Infinity);
    });
  });
});