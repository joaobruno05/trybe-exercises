const getUserName = require('./script3');

describe('Check the function getUserName', () => {
  it('should return the user Mark if ID 4 is found', async () => {
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
  });
  it('should return the user Paul if ID 5 is found', async () => {
    const userName = await getUserName(5);
    expect(userName).toEqual('Paul');
  });
  it('should return a error message when it does not find an ID', async () => {
    expect.assertions(1);
    try {
      await getUserName(8);
    } catch (error) {
      expect(error).toEqual({error: 'User with 8 not found.'})
    }
  });
});