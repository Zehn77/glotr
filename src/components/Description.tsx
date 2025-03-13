import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const text = `Оптический привод С новой силой. С появлением чипа Apple M1 наш самый
        тонкий и лёгкий ноутбук полностью преобразился. Центральный процессор
        теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря
        нашей передовой системе Neural Engine скорость машинного обучения
        возросла до 9 раз. Новый Mac. Book Air работает без подзарядки дольше,
        чем предыдущие модели.Оптический привод С новой силой. С появлением чипа
        Apple M1 наш самый тонкий и лёгкий ноутбук полностью преобразился.
        Центральный процессор теперь работает до 3,5 раза быстрее. Графический —
        до 5 раз. А благодаря нашей передовой системе Neural Engine скорость
        машинного обучения возросла до 9 раз. Новый Mac. Book Air работает без
        подзарядки дольше, чем предыдущие модели. Оптический привод С новой
        силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук
        полностью преобразился. Центральный процессор теперь работает до 3,5
        раза быстрее. Графический — до 5 раз. А благодаря нашей передовой
        системе Neural Engine скорость машинного обучения возросла до 9 раз.
        Новый Mac. Book Air работает без подзарядки дольше, чем предыдущие
        модели.`;

export default function Description() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);

  const shortLength = 300;

  return (
    <>
      <h4 className="font-bold text-md md:text-lg ">Описание</h4>

      <p className=" text-sm md:text-md leading-6">
        {" "}
        {isExpanded
          ? text
          : text.slice(0, shortLength) +
            (text.length > shortLength ? "..." : "")}
      </p>

      {!isExpanded && (
        <button
          type="button"
          onClick={toggleText}
          className="text-[#2D47A3] text-sm md:text-md cursor-pointer flex items-center gap-2 mt-2"
        >
          <span>Показать все</span>
          <IoIosArrowDown />
        </button>
      )}
      {isExpanded && (
        <button
          onClick={toggleText}
          type="button"
          className="text-[#2D47A3] text-sm md:text-md cursor-pointer flex items-center gap-2 mt-2"
        >
          <span>Скрыть</span>
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
}
