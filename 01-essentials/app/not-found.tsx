import ErrorComponent from '@/components/boundary/Error';
import { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'not found',
  description: 'unable to find page',
};

export default function NotFound() {
  return (
    <ErrorComponent
      {...{ title: 'Not Found!', msg: 'The page you were looking for does not exist' }}
    />
  );
}
