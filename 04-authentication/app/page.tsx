import AuthForm from '@/components/form/AuthForm';

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ signup: string }>;
}) {
  const { signup } = await searchParams;

  return <AuthForm signup={signup === 'true'} />;
}
