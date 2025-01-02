import { StaticImageData } from "next/image";
import ramen from "@/assets/image/ramen.png";
import firecracker from "@/assets/image/firecracker.png";
import barbeque from "@/assets/image/barbeque.png";
import chickenSalad from "../assets/image/chickenSalad.png";
import taco from "@/assets/image/taco.png";
import japaneseRice from "@/assets/image/japaneseRice.png";
import cheeseburger from "@/assets/image/cheeseburger.png";
import fruitSalad from "@/assets/image/fruitSalad.png";

export interface Offer {
  caption: string;
  time: string;
  category: string;
  image: StaticImageData;
}

export const offer: Offer[] = [
  {
    caption: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: fruitSalad, // Use the imported image
    time: "30",
    category: "Healthy",
  },
  {
    caption: "Big and Juicy Wagyu Beef Cheeseburger",
    image: cheeseburger, // Use the imported image
    time: "30",
    category: "Western",
  },
  {
    caption: "Healthy Japanese Fried Rice with Asparagus",
    image: japaneseRice, // Use the imported image
    time: "30",
    category: "Healthy",
  },
  {
    caption: "Cauliflower Walnut Vegetarian Taco Meat",
    image: taco, // Use the imported image
    time: "30",
    category: "Eastern",
  },
  {
    caption: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    image: chickenSalad, // Use the imported image
    time: "30",
    category: "Healthy",
  },
  {
    caption: "Barbeque Spicy Sandwiches with Chips",
    image: barbeque, // Use the imported image
    time: "30",
    category: "Snack",
  },
  {
    caption: "Firecracker Vegan Lettuce Wraps - Spicy!",
    image: firecracker, // Use the imported image
    time: "30",
    category: "Seafood",
  },
  {
    caption: "Chicken Ramen Soup with Mushroom",
    image: ramen, // Use the imported image
    time: "30",
    category: "Japanese",
  },
];
