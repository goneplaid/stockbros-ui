import { Luckiest_Guy, Oswald, Quicksand, Inter } from "next/font/google";

const heading = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const subheading = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const secondaryHeading = Quicksand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-secondary-heading",
  display: "swap",
});

const primary = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const fonts = [heading, subheading, secondaryHeading, primary];

export default fonts;
