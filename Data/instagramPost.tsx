import { StaticImageData } from "next/image";
import post1 from "@/assets/svg/post-1.svg";
import post2 from "@/assets/svg/post-2.svg";
import post3 from "@/assets/svg/post-3.svg";
import post4 from "@/assets/svg/post-4.svg";

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
