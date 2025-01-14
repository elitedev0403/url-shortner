"use client";

import { Transition } from "@headlessui/react";
import { ReactElement, ReactNode, useRef, useState } from "react";

interface DropdownProps {
  children: ReactNode | ((isOpen: boolean) => ReactNode);
  items?: any[];
  renderItem?: (item: any) => ReactNode;
  position?: "left" | "right";
}

function Dropdown({ children, items = [], renderItem = (item) => item.label, position = "left" }: DropdownProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  return (
    <div className="relative flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleMouseEnter} onBlur={handleMouseLeave}>
      <button
        className={`relative transition duration-300 before:w-full before:h-[20px] before:absolute before:top-[95%] ${
          isOpen ? "before:block" : "before:hidden"
        }  `}
        ref={dropdownRef}
      >
        {typeof children === "function" ? children(isOpen) : children}
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-300"
        enterFrom="scale-95 opacity-0"
        enterTo="opacity-100"
        leave="transition duration-300"
        leaveFrom="opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <ul
          className={`w-max max-w-[200px] p-2 rounded shadow-[1px_1px_5px_rgb(0,0,0,.3)] absolute top-full bg-white translate-y-[10px] list-none ${POSITIONS[position]}`}
        >
          {items.map((item, index) => (
            <li key={index}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
}

export default Dropdown;

const POSITIONS = {
  left: "left-[0]",
  right: "right-[0]",
};
