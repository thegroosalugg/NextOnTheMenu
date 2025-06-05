import db from '../lib/db';

export default class User {
       id!: string;
     email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email    = email;
    this.password = password;
  }

  save() {
    db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(
      this.email,
      this.password
    );
  }
}
