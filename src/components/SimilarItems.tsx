import { HiOutlineChevronRight } from "react-icons/hi2";
import { similarItems, additionalItems } from "../data";
import Card from "./Card";

export default function SimilarItems() {
  return (
    <section className="max-w-[1300px] mx-auto px-7 ">
      <div className="flex items-center justify-between py-3">
        <span className="font-semibold text-lg">Похожие товары продавца</span>
        <HiOutlineChevronRight className="w-[20px] h-[20px] cursor-pointer hover:text-red-500 transition-transform duration-200 hover:translate-x-1" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between my-5">
        <span className="font-semibold text-lg">Рекомендуем</span>
        <HiOutlineChevronRight className="w-[20px] h-[20px] cursor-pointer hover:text-red-500 transition-transform duration-200 hover:translate-x-1" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-5">
        <span className="font-semibold text-lg">У нас ищут</span>
        <HiOutlineChevronRight className="w-[20px] h-[20px] cursor-pointer hover:text-red-500 transition-transform duration-200 hover:translate-x-1" />
      </div>

      <div className="flex flex-wrap gap-3 pt-4 pb-6">
        {additionalItems.map((item) => (
          <button
            key={item.id}
            className="bg-white border border-gray-200 px-4 py-2 rounded-lg cursor-pointer 
        transition-all duration-200 
        hover:border-red-500 hover:text-red-500 hover:shadow-md"
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
