'use client';

export default function Error({ error }: { error: Error }) {
  console.log('CATCH', error);
  return <p>An error has occured</p>
}
