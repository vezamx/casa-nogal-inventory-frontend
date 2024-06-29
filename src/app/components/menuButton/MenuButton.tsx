"use client";
import Image from "next/image";
import { useState } from "react";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={toggleDropdown}>
        <Image
          className="ml-2 *flex items-start"
          src="/hamburguerMenu.svg"
          alt="clock"
          width={50}
          height={50}
        />
      </button>
      {isOpen && (
        <div className="origin-top-left right-0 mt-0 ml-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Inventario
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Restaurante
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Abrir/Cerrar turno
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Corte de caja
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown}
              >
                Cerrar sistema
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
