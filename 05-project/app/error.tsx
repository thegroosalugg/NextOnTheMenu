'use client';

export default function Error({ error }: { error: Error }) {
  console.log('CATCH', error);
  return <p className="text-center mt-[5%]">An error has occured</p>
}
