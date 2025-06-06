import db from '../lib/db';

export default class User {
        id: string;
     email: string;
  password: string;

  constructor({
          id = '',
       email,
    password,
  }: {
         id?: string;
       email: string;
    password: string;
  }) {
    this.id       = id;
    this.email    = email;
    this.password = password;
  }


  save() {
    db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(
      this.email,
      this.password
    );
  }

  static findByEmail(email: string) {
    const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User;
    return new User(row);
  }
}
