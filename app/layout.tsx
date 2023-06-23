import "./theme/globals.css";
import fonts, { Fonts } from "./theme/fonts";

const fontVars = Object.keys(fonts)
  .map((k: string) => fonts[k as keyof Fonts].variable)
  .join(" ");

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
    <html lang="en" data-theme="early-stage">
      <body className={fontVars}>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-stage-1 bg-no-repeat bg-cover bg-[center_bottom_25%]">
          {children}
        </main>
      </body>
    </html>
  );
}
