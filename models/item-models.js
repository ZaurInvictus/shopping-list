const db = require('../database/db-config.js')

module.exports = {
  add,
  find,
  deleteById,
  findBy,
  findById,
  updateById,
}


async function add(item) {
  let ids = await db('items').insert(item, 'id')
  const [id] = ids
  return findById(id) // returns the newly added record
}


function find() {
  return db('items').select('*')
}

function findBy(filter) {
  return db('items').select('*').where(filter).first()
}

function findById(id) {
  return db('items')
  .select('*').where({id}).first()
}


async function deleteById(id) {
  try {
      const delItemCount = await db('items').where({
          id
      }).del()
      return delItemCount
  } catch (error) {
      return {
          code: error.code,
          errno: error.errno,
          message: error.message,
      }
  }
}


async function updateById(id, item) {
  try {
    const count = await db('items').where({ id }).update(item)
    return count
  } catch (error) {
      return {
          message: error.message
      }
  }
}





