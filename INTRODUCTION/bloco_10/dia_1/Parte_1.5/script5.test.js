const { obj1, obj2, obj3 } = require('./script5');

// 5. Compare dois objetos para verificar se são idênticos ou não

describe('Compare if two objects are equals', () => {
  test('if obj1 and obj2 are equals', () => {
    expect(obj1).toEqual(obj2);
  });
  test('if obj1 and obj3 are not equals', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('if obj2 and obj3 are not equals', () => {
    expect(obj2).not.toEqual(obj3);
  });
});