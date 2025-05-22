import ErrorComponent from '@/components/boundary/Error';
import { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Article not found',
  description: 'unable to find article',
};

export default function NotFound() {
  return (
    <ErrorComponent
      {...{
        title: 'Article not found!',
          msg: 'The article you were looking for does not exist',
      }}
    />
  );
}
