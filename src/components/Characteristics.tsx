import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Character } from "../models/Item";

const items = [
  {
    id: 0,
    label: "Код товара",
    value: "MGN93RU/A ",
  },
  {
    id: 1,
    label: "Производитель",
    value: "Apple ",
  },
  {
    id: 2,
    label: "Разрешение экрана ",
    value: "2560x1600",
  },
  {
    id: 3,
    label: "Количество ядер процессора",
    value: "8",
  },
  {
    id: 4,
    label: "Оптический привод",
    value: "Отсутствует",
  },
  {
    id: 5,
    label: "Код товара",
    value: "MGN93RU/A ",
  },
  {
    id: 6,
    label: "Производитель",
    value: "Apple ",
  },
  {
    id: 7,
    label: "Разрешение экрана ",
    value: "2560x1600",
  },
  {
    id: 8,
    label: "Количество ядер процессора",
    value: "8",
  },
  {
    id: 9,
    label: "Оптический привод",
    value: "Отсутствует",
  },
];

export default function Characteristics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);

  const [filteredItem, setFilteredItems] = useState<Character[]>([]);

  useEffect(() => {
    if (!isExpanded) {
      setFilteredItems(items.slice(0, 6));
    } else {
      setFilteredItems(items);
    }
  }, [isExpanded]);

  return (
    <>
      <h4 className="font-bold text-md md:text-lg pt-6 px-6">Характеристики</h4>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <tbody>
            {filteredItem.map((item) => (
              <tr
                key={item.id}
                className="odd:bg-white  even:bg-gray-50   border-gray-200"
              >
                <td className="px-6 py-4 flex justify-between items-center">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isExpanded && (
        <button
          type="button"
          onClick={toggleText}
          className="text-[#2D47A3] px-6 pb-6 text-sm md:text-md cursor-pointer flex items-center gap-2 mt-2"
        >
          <span>Показать все</span>
          <IoIosArrowDown />
        </button>
      )}
      {isExpanded && (
        <button
          onClick={toggleText}
          type="button"
          className="text-[#2D47A3] px-6 pb-6 text-sm md:text-md cursor-pointer flex items-center gap-2 mt-2"
        >
          <span>Скрыть</span>
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
}
