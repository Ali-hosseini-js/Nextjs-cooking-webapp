import { offer } from "@/Data/offerData";
import SpecialOfferCard from "@/components/module/SpecialOfferCard";

const SpecialOffer: React.FC = () => {
  return (
    <div className="w-[980px] mx-auto pb-24">
      <div className="flex flex-col justify-center py-14">
        <h1 className="text-5xl font-semibold text-center">
          Simple and tasty recipes
        </h1>
        <p className=" mx-auto text-base font-normal text-center w-[706px] text-black/60 pt-5">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-3 gap-y-10 gap-x-8">
          {offer.map((item, index) => (
            <SpecialOfferCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
