export default function RootLayout({
  children, // page.tsx in current directory
     modal, // @modal parallel path. Allows modal to overlay on default content
}: Readonly<{
  children: React.ReactNode;
     modal: React.ReactNode;
}>) {
  return (
    <div>
      <div>{modal}</div>
      <div>{children}</div>
    </div>
  );
}
