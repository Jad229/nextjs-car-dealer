import "../styles/main.css";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="bg-carbon">{children}</body>
    </html>
  );
}
