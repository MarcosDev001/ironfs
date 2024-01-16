// SeuComponente.js
'use client'
import React, { useState } from "react";

const Emblemas = () => {
  const emblemas = [
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 1" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 2" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 3" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 4" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 5" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 6" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 7" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 8" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 9" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 10" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 11" },
    { url: "https://images.habblet.city/c_images/album1584/HBT2963.gif", nome: "Emblema 12" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const avancarImagem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emblemas.length);
  };

  const retrocederImagem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + emblemas.length) % emblemas.length
    );
  };

  const handleMouseEnter = (index: any) => {
    setCurrentIndex(index);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 200);
  };

  return (
    <div className="flex flex-col items-start mt-8 ml-8">
      <div className="flex items-center">
        <img src="https://habbletdreams.com/assets/img/shop-icon.png" alt="Ícone" className="icon w-8 h-8" />
        <h1 className="text-2xl font-semibold ml-2">Emblemas Novos</h1>
      </div>
      <div className="relative grid grid-cols-4 gap-4 mt-4">
        {emblemas.map((emblema, index) => (
          <div
            key={index}
            className={`bg-gray-200 p-4 text-center relative ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={emblema.url}
              alt={emblema.nome}
              className="w-full h-full object-cover cursor-pointer"
            />
            {index === currentIndex && showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
                {emblema.nome}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-start mt-4">
        <button className="mr-2" onClick={retrocederImagem}>
          &#8249;
        </button>
        <button onClick={avancarImagem}>
          &#8250;
        </button>
      </div>
   
    </div>
  );
};

export default Emblemas;
