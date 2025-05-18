import sql from 'better-sqlite3';

const db = sql('news.db');

export default class News {
       id: string;
     slug: string;
    title: string;
    image: string;
     date: string;
  content: string;

  constructor({
         id,
       slug,
      title,
      image,
       date,
    content,
  }: {
         id: string;
       slug: string;
      title: string;
      image: string;
       date: string;
    content: string;
  }) {
    this.id      = id ?? '';
    this.slug    = slug;
    this.title   = title;
    this.image   = image;
    this.date    = date;
    this.content = content;
  }

  // simulate async loading & errors
  private static async promise(delay: number = 500, chance: number = 0) {
    await new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() > chance) {
          resolve();
        } else {
          reject(new Error('Fetching meals failed'));
        }
      }, delay)
    );
  }

  static async getAll() {
    await this.promise();
    const rows = db.prepare('SELECT * FROM news').all() as News[];
    return rows.map(row => new News(row));
  }
}
