const User = require('../../src/models/User');

describe('User Model', () => {
  describe('has attributes', () => {
    const user = new User({
      name: 'Steven',
      password: 'encrypted password'
    });
    
    it('has a name', () => {
      expect(user.name).toBeDefined();
    });

    it('has a password', () => {
      expect(user.password).toBeDefined();
    });
  });
});