import { StaticImageData } from "next/image";

export interface TabItem {
  name: string;
  description: string;
  image: string;
}

export interface Review {
  name: string;
  date: string;
  review: string;
}
