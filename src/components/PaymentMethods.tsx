import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Payment } from "../models/Item";

const items = [
  {
    id: 0,
    label: "Наличными",
  },
  {
    id: 1,
    label: "Перечислением",
  },
  {
    id: 2,
    label: "Терминал UzCard",
  },
  {
    id: 3,
    label: "Терминал HUMO",
  },
  {
    id: 4,
    label: "POS терминал",
  },
  {
    id: 5,
    label: "Рayme",
  },
  {
    id: 6,
    label: "Перечислением",
  },
  {
    id: 7,
    label: "Терминал UzCard",
  },
  {
    id: 8,
    label: "Терминал HUMO",
  },
  {
    id: 9,
    label: "POS терминал",
  },
  {
    id: 10,
    label: "Рayme",
  },
];

export default function PaymentMethods() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);

  const [filteredItem, setFilteredItems] = useState<Payment[]>([]);

  useEffect(() => {
    if (!isExpanded) {
      setFilteredItems(items.slice(0, 6));
    } else {
      setFilteredItems(items);
    }
  }, [isExpanded]);

  return (
    <>
      <h4 className="font-bold text-md md:text-lg pt-6 px-6">Способы оплаты</h4>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <tbody>
            {filteredItem.map((item) => (
              <tr key={item.id} className="  border-gray-200">
                <td className="px-6 py-4 flex justify-between items-center">
                  {`- ${item.label}`}
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
