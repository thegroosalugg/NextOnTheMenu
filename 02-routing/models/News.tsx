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
        const success = Math.random() > chance;
        if (success) resolve();
        else         reject(new Error('500: Async request failed'));
      }, delay)
    );
  }

  static async getAll() {
    await this.promise();
    const rows = db.prepare('SELECT * FROM news').all() as News[];
    return rows.map(row => new News(row));
  }

  static async getLatest() {
    await this.promise();
    const rows = db.prepare(
     `SELECT * FROM news
      ORDER BY date DESC
      LIMIT 3`
    ).all() as News[];
    return rows.map(row => new News(row));
  }

  static async getByYear(year: string) {
    await this.promise();
    const rows = db.prepare(
     `SELECT * FROM news
      WHERE strftime('%Y', date) = ?
      ORDER BY date DESC`
    ).all(year) as News[];
    return rows.map(row => new News(row));
  }

  static async find(slug: string) {
    await this.promise();
    const row = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as News;
    if (!row) return;
    return new News(row);
  }

  static async getYears() {
    await this.promise();
    const rows = db.prepare(
     `SELECT DISTINCT strftime('%Y', date) AS year
      FROM news
      ORDER BY year DESC`
    ).all();
    return rows as { year: string }[];
  }

  static getMonths(news: News[]) {
    const months = new Set(news.map(({ date }) => new Date(date).getMonth()));
    return Array.from(months).sort();
  }

  static filterByMonth(news: News[], month: string) {
    return news.filter(({ date }) => new Date(date).getMonth() === +month);
  }

  formatDate() {
    return new Date(this.date).toLocaleDateString('en-GB', {
       year: 'numeric',
      month: 'long',
        day: 'numeric',
    });
  }
}
