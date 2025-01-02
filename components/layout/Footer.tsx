import Link from "next/link";
import Image from "next/image";
import facebookLogo from "@/assets/image/facebook-logo-24.png";
import twitterLogo from "@/assets/image/twitter-logo-24.png";
import instagramLogo from "@/assets/image/instagram-logo-24.png";

const Footer = () => {
  return (
    <div className="w-[980px] mx-auto my-10">
      <div className=" flex justify-between items-center  py-10">
        <h1 className="font-semibold text-lg italic">foodieland</h1>
        <div className="flex gap-10">
          <Link href="/Recipes">Recipes</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/About-us">About us</Link>
        </div>
      </div>
      <hr className="h-0.5 border-t-0 bg-black" />

      <div className="flex justify-end py-10">
        <div className="flex gap-5">
          <Link href="https://www.facebook.com">
            <Image
              src={facebookLogo}
              alt="foodieland-facebook"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.twitter.com">
            <Image
              src={twitterLogo}
              alt="foodieland-twitter"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.instagram.com">
            <Image
              src={instagramLogo}
              alt="foodieland-instagram"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
