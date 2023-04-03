import "../../styles/main.css";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-carbon overflow-x-hidden">{children}</body>
    </html>
  );
}
