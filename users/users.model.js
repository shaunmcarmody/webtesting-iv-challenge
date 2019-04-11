const db = require('../data/dbConfig.js');

const insert = user =>
  db('users')
    .insert(user)

const get = id =>
  db('users')
    .where('id', id)
    .select('username')
    .first()

const remove = id =>
  db('users')
    .where('id', id)
    .del()

module.exports = {
  get,
  insert,
  remove,
};
