import { NextResponse } from 'next/server';

// middleware.ts() & {config} are reserved names
export function middleware(request: Request) {
  console.log(request);
  return NextResponse.next();
}

export const config = {
  matcher: '/news', // filter requests
};
