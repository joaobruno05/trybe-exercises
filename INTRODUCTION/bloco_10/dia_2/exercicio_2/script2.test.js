const getUserName = require('./script2');

describe('Check the function getUserName', () => {
  it('should return the user Mark if ID 4 is finded', () => {
    expect.assertions(1);
    return getUserName(4).then(userName => {
      expect(userName).toEqual('Mark');
    });
  });
  it('should return the user Paul if ID 5 is finded', () => {
    expect.assertions(1);
    return getUserName(5).then(userName => {
      expect(userName).toBe('Paul');
    });
  });
  it('should return a error message when it does not find an ID', () => {
    return getUserName(8).catch(error => {
      expect(error).toEqual({error: 'User with 8 not found.'});
    });
  });
});