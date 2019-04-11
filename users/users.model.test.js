const db = require('../data/dbConfig.js');
const Users = require('./users.model.js');

describe('user model', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  let arr; // value assigned to arr in the insert tests is now in the scope of the remove tests

  describe('insert()', () => {
    it('should insert the user', async () => {
      arr = await Users.insert({ username: 'test' });
      let resource = await Users.get(arr[0]);
      expect(resource).toEqual({ username: 'test' });
    });
  });

  describe('remove()', () => {
    it('should remove the user', async () => {
      result = await Users.remove(arr[0]);
      expect(result).toBe(1);
      let resource = await Users.get(arr[0]);
      expect(resource).toBeFalsy();
    });
  });
});