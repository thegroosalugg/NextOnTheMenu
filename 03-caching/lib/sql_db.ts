import sql from 'better-sqlite3';
import { unstable_cache as nextCache } from 'next/cache';
import { cache } from 'react';

const db = new sql('data.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      text TEXT,
      liked INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS images (
      id INTEGER PRIMARY KEY,
      url TEXT NOT NULL
    );
  `);
}

initDb();

export function addImage(url: string) {
  db.prepare('INSERT INTO images (url) VALUES (?)').run(url);
}

export function getImages() {
  return db.prepare('SELECT * FROM images').all() as { id: string, url: string }[];
}

export type Message = {
     id: string;
   text: string;
  liked: 0 | 1;
};

export async function addMessage(message: string) {
  await new Promise(res => setTimeout(res, 1000)); // dummy promise delay
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export async function likeMessage(id: string) {
  await new Promise(res => setTimeout(res, 1000)); // dummy promise delay
  db.prepare('UPDATE messages SET liked = NOT liked WHERE id = ?').run(id);
}

// *unstable_cache (Next) stores the db res data
export const getMessages = nextCache(
  // *Cache (React) db ops (non fetch) manually. Stores request (deduplication)
  cache(async function getMessages() {
    console.log(new Date().toISOString(), 'Fetching messages from DB');
    await new Promise(res => setTimeout(res, 1000)); // dummy promise delay
    return db.prepare('SELECT * FROM messages').all() as Message[];
  }),
  ['messages'], // unstable_cache uses this as an internal key
  {
    revalidate: 3, // like fetch { next } - only works on refresh
    tags: ['msg'], // just like fetch tags - can call revalidateTags()
  }
);
