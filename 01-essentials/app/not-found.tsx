import ErrorComponent from '@/components/Error';

export default function NotFound() {
  return (
    <ErrorComponent
      {...{ title: 'Not Found!', msg: 'The page you were looking for does not exist' }}
    />
  );
}
