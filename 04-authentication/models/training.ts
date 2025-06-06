import db from '../lib/db';

export default class Training {
     id = '';
  title = '';
  image = '';
   desc = '';

  static getAll() {
    return db.prepare('SELECT * FROM trainings').all() as Training[];
  }
}
