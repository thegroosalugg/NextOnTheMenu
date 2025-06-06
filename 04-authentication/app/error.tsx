'use client'; // error.tsx must use client
import ErrorComponent from '@/components/boundary/Error';

export default function Error({ error }: { error: Error }) {
  console.log('CATCH', error);
  return (
    <ErrorComponent {...{ title: 'Fetching failed', msg: "Data couldn't be loaded." }} />
  );
}
