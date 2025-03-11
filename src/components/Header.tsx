import logo from "./../assets/g-logo.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  return (
    <header className="flex items-center justify-around px-2 md:px-8 py-3 max-w-[1300px] mx-auto">
      {/* menu button  */}

      <button
        type="button"
        className="md:hidden cursor-pointer py-2.5 px-2 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-gray-200 hover:bg-gray-100"
      >
        <GrMenu className="w-[24px] h-[24px]" />
      </button>

      <div className="md:flex hidden items-center gap-4">
        <img src={logo} className="w-[180px]" />
        <button
          type="button"
          className="cursor-pointer flex items-center justify-center gap-2 focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-100 font-medium rounded-lg px-5 py-2.5 "
        >
          <RiMenu2Line className="inline font-bold text-xl" />
          <span>Каталог</span>
        </button>
      </div>

      <div className="relative flex-1 mx-4">
        <div className="absolute inset-y-0 end-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
          placeholder="Искать"
          required
        />
      </div>

      <div className="hidden items-center gap-2.5 md:flex">
        <div className="bg-gray-100 p-3.5  inline-block rounded-b-md shadow cursor-pointer">
          <IoMdHeartEmpty className="w-[20px] h-[20px] text-gray-500" />
        </div>

        <div className="bg-gray-100 p-3.5 inline-block rounded-b-md shadow cursor-pointer">
          <BsCart3 className="w-[20px] h-[20px] text-gray-500" />
        </div>
        <div className="bg-gray-100 p-3.5 inline-block rounded-b-md shadow cursor-pointer">
          <BsPerson className="w-[20px] h-[20px] text-gray-500" />
        </div>
      </div>
    </header>
  );
}
