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

const getCookie = async () => (await cookies()).get(lucia.sessionCookieName)?.value;

const setCookie = async (sessionId?: string) => {
  const { name, value, attributes } = sessionId
    ? lucia.createSessionCookie(sessionId)
    : lucia.createBlankSessionCookie();
  (await cookies()).set(name, value, attributes);
};

export const createAuthSession = async (userId: string) => {
  const session = await lucia.createSession(userId, {});
  await setCookie(session.id);
};

export const verifySession = async () => {
  const sessionId = await getCookie();
  if (!sessionId) return { user: null, session: null };

  const { user, session } = await lucia.validateSession(sessionId);

  try { // Next.Js throws error when you set cookie as part of render process
         if (!session)       await setCookie(); // blank
    else if (session?.fresh) await setCookie(session.id); // refresh
  } catch {} // error can be ignored

  return { user, session };
};

export const destroySession = async () => {
  const sessionId = await getCookie();
  if (!sessionId) return { error: 'unauthorized' };
  await lucia.invalidateSession(sessionId);
  await setCookie();
};
