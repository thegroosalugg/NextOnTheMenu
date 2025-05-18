import sql from 'better-sqlite3';

const db = sql('meals.db');

export default class Meal {
            id!: string;
           slug: string;
          title: string;
          image: string;
        creator: string;
  creator_email: string;
        summary: string;
   instructions: string[];

  constructor({
    slug,
    title,
    image,
    creator,
    creator_email,
    summary,
    instructions,
  }: {
             slug: string,
            title: string,
            image: string,
          creator: string,
    creator_email: string,
          summary: string,
     instructions: string
  }) {
    this.slug          = slug;
    this.title         = title;
    this.image         = image;
    this.creator       = creator;
    this.creator_email = creator_email;
    this.summary       = summary;
    this.instructions  = instructions.split('.');
  }

  static async fetchAll(): Promise<Meal[]> {
    await new Promise<void>(
      (resolve, reject) =>
        setTimeout(() => {
          if (Math.random() > 0.02) {
            resolve();
          } else {
            reject(new Error('Fetching meals failed')); // simulate errors
          }
        }, 1500) // simulate data fetching
    );

    return db.prepare('SELECT * FROM meals').all() as Meal[];
  }

  static async find(slug: string): Promise<Meal | void> {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // dummy promise
    // SQL ? placeholder to avoid injection attacks
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal & {
      instructions: string; // SQL can't store arrays - asserted as string for parsing to array
    };
    if (!meal) return; // void
    // pasrse JSON string to array. Type inferred so client only knows string[]
    meal.instructions = JSON.parse(meal.instructions);
    return meal;
  }

  async save() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // dummy promise

    db.prepare(`
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES
        (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `).run({ ...this, instructions: JSON.stringify(this.instructions) });
  }
}
