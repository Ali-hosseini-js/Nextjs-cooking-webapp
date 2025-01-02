import CategoryCard from "@/components/module/CategoryCard";

function Category() {
  return (
    <div className="w-[980px] mx-auto py-24">
      <div className="flex justify-between">
        <h1 className="font-medium text-5xl">Categories</h1>
        <button className="bg-[#E7FAFE] rounded-2xl text-sm font-semibold px-5 py-3">
          View All Categories
        </button>
      </div>
      <div className="justify-center gap-9 flex flex-wrap pt-14">
        <CategoryCard />
      </div>
    </div>
  );
}

export default Category;
