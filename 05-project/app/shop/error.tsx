'use client';

export default function Error({ error }: { error: Error }) {
  console.log('CATCH', error);
  return <p className="text-center mt-[5%]">Products couldn&apos;t be loaded</p>
}
