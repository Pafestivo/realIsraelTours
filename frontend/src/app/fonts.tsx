import { Roboto, Abel } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const abel = Abel({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
