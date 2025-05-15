'use client'; // error.tsx must use client so it can catch server & client side errors
import ErrorComponent from '@/components/boundary/Error';

// error.tsx can be defined at page nest to display an all current & segemented routes
export default function Error({ error }: { error: Error }) {
  // Next also passes the error automatically to the Error Boundary component
  console.log('CATCH', error);
  return (
    <ErrorComponent {...{ title: 'Fetching failed', msg: "Data couldn't be loaded." }} />
  );
}
