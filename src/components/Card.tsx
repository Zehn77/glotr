import { IoIosHeartEmpty } from "react-icons/io";
import { Item } from "../models/Item";

export default function Card({ item }: { item: Item }) {
  return (
    <div className="max-w-[300px] rounded-lg shadow  relative bg-white">
      <button className="absolute right-1.5 top-1.5 md:right-3.5 md:top-3.5 cursor-pointer">
        <IoIosHeartEmpty className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-gray-700" />
      </button>
      {item.discount && (
        <p className="absolute top-10 left-0 bg-red-400 px-4 py-1 rounded-r-md text-white">
          -{item.discount}%
        </p>
      )}

      <div className="px-2 md:px-4 pb-2 md:pb-4">
        <img className="w-full" src={item.img} alt="Laptop" />

        <h4 className="text-gray-700 text-md md:text-xl">{item.name}</h4>
        <p className="text-gray-700 text-md md:text-xl my-1">Professional</p>
        <p
          className={`
            text-md md:text-lg
            ${item.paymentMethod === "Под заказ" ? "text-yellow-500" : ""}
          ${item.paymentMethod === "В наличии" ? "text-green-500" : ""}
          ${item.paymentMethod === "Нет в наличии" ? "text-red-500" : ""}
          `}
        >
          {item.paymentMethod}
        </p>
        <p className="text-red-500 text-md md:text-xl my-2">
          <span className="font-bold">
            {new Intl.NumberFormat("ru-RU").format(item.price)}
          </span>{" "}
          <span>сум</span>
        </p>
      </div>
      <div className="bg-gray-100 h-[0.5px]"></div>
      <div className="p-2 md:p-4">
        <h4 className="text-md md:text-lg">{item.company}</h4>
        <p className="text-gray-400 text-sm md:text-md">{item.city}</p>
      </div>
    </div>
  );
}
