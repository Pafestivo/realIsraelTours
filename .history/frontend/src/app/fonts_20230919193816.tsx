import { Inter, Merriweather } from "next/font/google";
import { Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
