'use client';

export default function Error({ error }: { error: Error }) {
  console.log('CATCH', error);
  return <p>Products couldn&apos;t be loaded</p>
}
