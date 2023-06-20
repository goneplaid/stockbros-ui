import { Luckiest_Guy, Oswald, Quicksand, Inter } from "next/font/google";

const heading = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const subheading = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-subheading",
});

const secondaryHeading = Quicksand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-secondary-heading",
});

const primary = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
});

const fonts = [heading, subheading, secondaryHeading, primary];

export default fonts;
