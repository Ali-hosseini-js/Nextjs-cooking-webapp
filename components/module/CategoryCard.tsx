import { category } from "@/Data/category";
import Image from "next/image";

function CategoryCard() {
  return (
    <>
      {category.map((food, index) => (
        <div
          key={index}
          className="w-[130px] h-[150px] items-center flex flex-col p-4 rounded-2xl justify-between bg-gradient-to-b from-white to-slate-500/10"
        >
          <Image
            className=""
            alt={food.name}
            src={food.image}
            width={70}
            height={70}
          />
          <p className="text-sm font-semibold">{food.name}</p>
        </div>
      ))}
    </>
  );
}

export default CategoryCard;
