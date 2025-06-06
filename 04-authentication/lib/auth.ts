import { Lucia } from 'lucia';
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import db from './db';
import { cookies } from 'next/headers';

// create SQL adapter
const adapter = new BetterSqlite3Adapter(db, {
     user: 'users', // set to table rows
  session: 'sessions',
});

// configure Lucia
const lucia = new Lucia(adapter, {
  sessionCookie: {
       expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
});

export const createAuthSession = async (userId: string) => {
  const session = await lucia.createSession(userId, {});
  const { name, value, attributes } = lucia.createSessionCookie(session.id);
  (await cookies()).set(name, value, attributes);
};
