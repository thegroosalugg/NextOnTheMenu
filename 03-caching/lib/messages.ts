import sql from 'better-sqlite3';
import { unstable_cache as nextCache } from 'next/cache';
import { cache } from 'react';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

// *unstable_cache (Next) stores the db res data
export const getMessages = nextCache(
  // *Cache (React) db ops (non fetch) manually. Stores request (deduplication)
  cache(async function getMessages() {
    console.log(new Date().toISOString(), 'Fetching messages from DB');
    return await Promise.resolve(db.prepare('SELECT * FROM messages').all());
  }),
  ['messages'], // unstable_cache uses this as an internal key
  {
    revalidate: 3, // like fetch { next } - only works on refresh
    tags: ['msg'], // just like fetch tags - can call revalidateTags()
  }
);
