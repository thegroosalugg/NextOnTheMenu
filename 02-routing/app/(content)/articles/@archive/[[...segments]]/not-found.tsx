import ErrorComponent from '@/components/boundary/Error';
import { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Uneventful time',
  description: 'No articles found',
};

export default function NotFound() {
  return (
    <ErrorComponent
      {...{
        title: 'Nothing happend during this time',
          msg: 'Nothing was recorded for this time period.',
      }}
    />
  );
}
