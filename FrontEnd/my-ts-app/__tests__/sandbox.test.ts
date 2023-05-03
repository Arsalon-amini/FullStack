import { add }from '../src/sandbox';
import { describe, it, expect } from '@jest/globals';


describe('sum module', () => {
  it('adds two numbers together', () => {
    const firstNum = 2;
    const secondNum = 3;

    const expectedValue = firstNum + secondNum

    const actualValue = add(2, 3);

    expect(expectedValue).toEqual(actualValue);


  });
});