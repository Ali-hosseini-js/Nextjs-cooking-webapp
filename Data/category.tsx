import { StaticImageData } from "next/image";
import meat from "@/assets/image/meat.png";
import breakfast from "@/assets/image/breakfast.png";
import lunch from "@/assets/image/lunch.png";
import vegan from "@/assets/image/vegan.png";
import dessert from "@/assets/image/dessert.png";
import chocolate from "@/assets/image/chocolate.png";

export interface category {
  name: string;
  image: StaticImageData;
}

export const category: category[] = [
  {
    name: "Meat",
    image: meat, // Use the imported image
  },
  {
    name: "Breakfast",
    image: breakfast, // Use the imported image
  },
  {
    name: "Lunch",
    image: lunch, // Use the imported image
  },
  {
    name: "Vegan",
    image: vegan, // Use the imported image
  },
  {
    name: "Dessert",
    image: dessert, // Use the imported image
  },
  {
    name: "Chocolate",
    image: chocolate, // Use the imported image
  },
];
