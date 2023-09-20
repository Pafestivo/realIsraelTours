import { StaticImageData } from "next/image";

export interface Destination {
  name: string;
  description: string;
  image: StaticImageData;
}

export interface Review {
  name: string;
  date: string;
  review: string;
}
