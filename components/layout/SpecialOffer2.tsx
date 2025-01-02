import SpecialOfferCard from "@/components/module/SpecialOfferCard";
import { offer } from "@/Data/offerData2";

const SpecialOffer2: React.FC = () => {
  return (
    <div className="w-[980px] mx-auto pb-24">
      <div className="flex justify-center py-14">
        <h1 className="text-3xl font-semibold text-start w-1/2 px-7">
          Try this delicious recipe to make your day
        </h1>
        <p className=" mx-auto text-sm font-normal text-start text-black/60 pt-5 px-7 w-1/2 ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-4 gap-y-10 gap-x-8">
          {offer.map((item, index) => (
            <SpecialOfferCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer2;
