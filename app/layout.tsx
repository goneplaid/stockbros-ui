import "./globals.css";
import fonts from "./fonts";

const fontVars = fonts.map((f) => f.variable).join(" ");

export const metadata = {
  title: "Stock Bro's",
  description: "A fun game of reckless capitalism!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontVars}>{children}</body>
    </html>
  );
}
