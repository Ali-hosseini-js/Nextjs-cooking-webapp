import { StaticImageData } from "next/image";
import burger from "../assets/image/burger.png";
import fish from "../assets/image/fish.png";
import pancake from "../assets/image/pancake.png";
import salad from "../assets/image/salad.png";
import meetball from "../assets/image/meetball.png";
import pancake2 from "../assets/image/pancake2.png";
import rice from "../assets/image/rice.png";
import pasta from "../assets/image/pasta.png";
import ads from "../assets/image/Ads.png";

export interface Offer {
  caption: string;
  time: string;
  category: string;
  image: StaticImageData;
}

export const offer: Offer[] = [
  {
    caption: "Big and Juicy Wagyu Beef Cheeseburger",
    image: burger,
    time: "30",
    category: "Snack",
  },
  {
    caption: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: fish,
    time: "30",
    category: "Fish",
  },
  {
    caption: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: pancake,
    time: "30",
    category: "Breakfast",
  },
  {
    caption: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: salad,
    time: "30",
    category: "Healthy",
  },
  {
    caption: "Chicken Meatballs with Cream Cheese",
    image: meetball,
    time: "30",
    category: "Meat",
  },
  {
    caption: "",
    image: ads,
    time: "",
    category: "",
  },
  {
    caption: "Fruity Pancake with Orange & Blueberry",
    image: pancake2,
    time: "30",
    category: "Sweet",
  },
  {
    caption: "The Best Easy One Pot Chicken and Rice",
    image: rice,
    time: "30",
    category: "Snack",
  },
  {
    caption: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: pasta,
    time: "30",
    category: "Noodles",
  },
];
