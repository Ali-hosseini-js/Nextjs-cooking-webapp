import Image from "next/image";
import fork from "@/assets/svg/bx-fork.svg";
import time from "@/assets/svg/bxs-time-five.svg";
import { Offer } from "@/Data/offerData";

interface SpecialOfferCardProps {
  data: Offer;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({ data }) => {
  return (
    <>
      {data.caption ? (
        <div className="relative w-[230px] h-[300px] rounded-2xl bg-gradient-to-b from-white to-[#E7F9FD]">
          <Image
            className="rounded-xl top-3 mx-auto"
            alt={data.category}
            src={data.image}
            width={200}
            height={150}
          />
          <h2 className="text-sm py-3 px-6 font-semibold mx-auto ">
            {data.caption}
          </h2>
          <div className="absolute bottom-9 left-4">
            <div className="flex w-[200px] mx-auto  gap-3">
              <p className="flex gap-1 text-sm text-black/60">
                <Image alt="time" src={time} width={16} height={16} />
                {data.time} Minute
              </p>
              <p className="flex gap-1 text-sm text-black/60">
                <Image alt="fork" src={fork} width={16} height={16} />
                {data.category}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-[230px] h-[300px] rounded-2xl">
          <Image
            className="object-cover rounded-2xl"
            alt="ads"
            src={data.image}
            width={270}
            height={150}
          />
        </div>
      )}
    </>
  );
};

export default SpecialOfferCard;
