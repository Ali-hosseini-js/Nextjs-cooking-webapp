import Image from "next/image";
import kitchenHero from "@/assets/image/kitchenHero.png";
import Button from "@/components/module/Button";

function KitchenHero() {
  return (
    <div className="flex justify-center items-center rounded-xl w-[980px] mx-auto pb-24">
      <div className="gap-8 w-1/2">
        <h1 className="font-bold text-3xl mt-5">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="text-sm text-black/60 mt-5 pb-14">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <Button text="Learn More" />
      </div>
      <Image
        className="object-cover rounded-r-xl w-1/2"
        alt="be a kitchen"
        src={kitchenHero}
        width={500}
        height={500}
      />
    </div>
  );
}

export default KitchenHero;
