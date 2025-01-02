import { StaticImageData } from "next/image";
import post1 from "@/assets/image/post-1.png";
import post2 from "@/assets/image/post-2.png";
import post3 from "@/assets/image/post-3.png";
import post4 from "@/assets/image/post-4.png";

export interface Post {
  name: string;
  image: StaticImageData;
}

export const instagramPost: Post[] = [
  {
    name: "Post1",
    image: post1,
  },
  {
    name: "post2",
    image: post2,
  },
  {
    name: "post3",
    image: post3,
  },
  {
    name: "post4",
    image: post4,
  },
];
