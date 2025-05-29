import MessagesLayout from "@/components/shared/MessagesLayout";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // *1 requests with the identical config will be memoized
  });
  const msgs = await response.json();

  return (
    <MessagesLayout
      header='Fetching from a 3rd party API'
       count={msgs.length}
       navTo='/api'
    >
      {children}
    </MessagesLayout>
  );
}
