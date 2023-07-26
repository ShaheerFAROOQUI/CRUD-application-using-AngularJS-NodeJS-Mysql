

module.exports = class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static fetchAll() {

    return db.execute('SELECT * FROM groceries');

  }

  static update(id, item) {

    return db.execute('update groceries SET item = ? WHERE id = ?', [item, id]);

  }

  static post(item) {
    return db.execute('INSERT into groceries (item) VALUES (?)', [item]);
  }

  static delete(id) {

    return db.execute('Delete from groceries where id = ?', [id]);

  }
};
