const uppercase = require('./script');

describe('Check the return of function uppercase', () => {
  it('should return a word uppercase', done => {
    uppercase('javascript', (result) => {
      expect(result).toBe('JAVASCRIPT');
      done();
    });
  });
});