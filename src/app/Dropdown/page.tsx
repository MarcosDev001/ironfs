"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaRss,
  FaStar,
  FaHotel,
  FaEllipsisH,
  FaCaretUp,
} from "react-icons/fa";

const DropdownContent: React.FC = () => (
  <div className="absolute left-1/2 mt-[200px] transform -translate-x-1/2 w-40 bg-white border border-gray-300 rounded shadow-md overflow-hidden">
    <div className="relative">
      <FaCaretUp className="absolute w-[10.5rem] h-6 mt-[8px] text-white top-[-30px] left-1/2 transform -translate-x-1/2 bg-purple-500  rounded-t" />
      <ul className="mt-2">
        <li
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
          style={{ marginTop: "20px" }}
        >
          Iron Stars
        </li>
        <li
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
          style={{ marginTop: "20px" }}
        >
          Iron Stars
        </li>
        <li
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
          style={{ marginTop: "20px" }}
        >
          Iron Stars
        </li>
      </ul>
    </div>
  </div>
);

const MenuItem: React.FC<{ label: string; icon: React.ElementType }> = ({
  label,
  icon: Icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  if (label === "Início") {
    return (
      <div className="relative flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
        <Icon
          className={`mr-2 text-lg ${
            isHovered ? "text-purple-500" : "text-gray-600"
          }`}
        />
        <span
          className={`text-base font-medium ${
            isHovered ? "text-purple-500" : "text-gray-800"
          }`}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        className={`mr-2 text-lg ${
          isHovered ? "text-purple-500" : "text-gray-600"
        }`}
      />
      <span
        className={`text-base font-medium ${
          isHovered ? "text-purple-500" : "text-gray-800"
        }`}
      >
        {label}
      </span>
      {isHovered && <DropdownContent />}
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="text-gray-800 font-poppins">
      <div className="container mx-auto gap-[92px] flex items-center justify-center">
        <MenuItem label="Início" icon={FaHome} />
        <MenuItem label="Feed" icon={FaRss} />
        <MenuItem label="IronStars" icon={FaStar} />
        <MenuItem label="IronHotel" icon={FaHotel} />
        <MenuItem label="Extras" icon={FaEllipsisH} />
      </div>
      <div className="flex items-center mt-[96px] ml-[49px]">
        <img
          src="https://web.archive.org/web/20221211010327im_/https://habbletcreate.com.br/img/icon12.cd7d515c.png"
          alt="Ícone"
          className="icon w-8 h-8"
        />
        <h1 className="text-2xl font-bold ml-2 text-[#52227e]">
          Iron Noticias
        </h1>

        <div className="ml-[49rem] flex items-center border-b border-[#52227e]">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="outline-none border-none px-2 py-1 text-[#52227e] bg-transparent"
          />
          <button className="ml-2">
       
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
