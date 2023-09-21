import { StaticImageData } from "next/image";

export interface Destination {
  name: string;
  description: string;
  image: string;
}

export interface Review {
  name: string;
  date: string;
  review: string;
}
