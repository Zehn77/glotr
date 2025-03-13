import Description from "./components/Description";
import Characteristics from "./components/Characteristics";

import Header from "./components/Header";
import SimilarItems from "./components/SimilarItems";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import PaymentMethods from "./components/PaymentMethods";

export default function App() {
  return (
    <div className="bg-gray-100">
      <div className="shadow sticky top-0 z-10 bg-gray-100">
        <Header />
      </div>
      <div className="max-w-[1300px] mx-auto px-6 mt-4">
        <div className="bg-white border px-4 md:px-0 border-gray-200 rounded-lg shadow-sm mx-auto flex justify-center relative">
          <img
            src="./assets/laptop.webp"
            className="maw-w-[200px]"
            alt="laptop"
          />

          <button className="absolute right-3.5 top-3.5 cursor-pointer">
            <IoIosHeartEmpty className="w-[28px] h-[28px] text-gray-700" />
          </button>
        </div>

        <div className="bg-white p-6 border border-gray-200 mt-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-md md:text-lg ">
            Apple Macbook air, M1, 512 SSD gb, 32gb RAM
          </h4>
          <div className="flex items-center gap-6 mt-3">
            <p className="bg-red-100 px-4 py-2 text-sm rounded-xl text-red-500">
              Нет в наличии
            </p>
            <span className="text-sm md:text-md text-gray-600">Код 32453</span>
          </div>

          <h4 className="text-red-500 font-bold mt-3 text-lg">
            12 850 000 сум/шт
          </h4>
          <div className="flex items-center mt-4">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full cursor-pointer"
            >
              Уточнить наличие
            </button>
            <button
              type="button"
              className="focus:outline-none  bg-red-200  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              <LuMessageSquareMore className="text-red-500 w-[20px] h-[20px]" />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 border border-gray-200 mt-4 rounded-lg shadow-sm">
          <Description />
        </div>

        <div className="bg-white border border-gray-200 mt-4 rounded-lg shadow-sm">
          <Characteristics />
        </div>
        <div className="bg-white border border-gray-200 mt-4 rounded-lg shadow-sm">
          <PaymentMethods />
        </div>
      </div>

      <SimilarItems />
    </div>
  );
}
