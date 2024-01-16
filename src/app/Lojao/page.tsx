// pages/index.js (or any other page)

'use client'
import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Produto 1",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
  {
    id: 2,
    name: "Produto 2",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/cadeira-coqueiro-ltd-726f8f1a587bc54a39b59cf1dd90c15c.gif",
  },
  {
    id: 3,
    name: "Produto 3",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/cadeira-coqueiro-ltd-726f8f1a587bc54a39b59cf1dd90c15c.gif",
  },
  {
    id: 4,
    name: "Produto 4",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
  {
    id: 5,
    name: "Produto 5",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
  {
    id: 6,
    name: "Produto 6",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
  {
    id: 7,
    name: "Produto 7",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/cadeira-coqueiro-ltd-726f8f1a587bc54a39b59cf1dd90c15c.gif",
  },
  {
    id: 8,
    name: "Produto 8",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/cadeira-coqueiro-ltd-726f8f1a587bc54a39b59cf1dd90c15c.gif",
  },
  {
    id: 9,
    name: "Produto 9",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
  {
    id: 10,
    name: "Produto 10",
    image:
      "https://ppanel.radiohabblet.com.br/imagem/valores/mob/img-deusa-das-flores-1665279487.png",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 4) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 4 + products.length) % products.length
    );
  };

  const handleAdquirirClick = () => {
    if (isLoggedIn) {
      setShowMessage(true);
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="relative">
      <div className="flex items-center absolute top-0 left-1/2 mt-[-368px] ml-[500px] transform -translate-x-1/2 z-10">
        <img src="https://habbletdreams.com/assets/img/visto-icon.png" alt="Ícone" className="icon w-8 h-8" />
        <h1 className="text-2xl font-semibold ml-2 text-[#52227e]"></h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-sm">
        {showMessage && (
          <div className="bg-gray-500 bg-opacity-50 w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md">
              {isLoggedIn
                ? "Compra realizada com sucesso!"
                : "Para comprar, você precisa estar logado no site."}
            </div>
          </div>
        )}
      </div>

      <img
        src="https://media.discordapp.net/attachments/1137473909583786035/1195905665638600784/tenda.png?ex=65b5b0f1&is=65a33bf1&hm=cdceb65ede2d76cfd94fd6067a959980ea200542aac5ea5a4c0eca508dd97d45&=&format=webp&quality=lossless"
        alt="Tenda"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[926px] max-h-60 object-cover mt-[-409px] ml-[174px]" // Adjusted margin-top
      />

      <div className="absolute bottom-[2rem] left-1/2 ml-[134px] transform -translate-x-1/2">
        <div className="flex items-center space-x-4 ml-[72px] mb-[-183px] "> {/* Adjusted margin-bottom */}
          <button
            onClick={prevSlide}
            className="text-white rounded-full bg-purple-500  p-2"
          >
            {"<"}
          </button>

          <div className="flex space-x-2 items-center mb-[190px] bg-[#f3f3f3] ">
            {products.slice(currentSlide, currentSlide + 4).map((product) => (
              <div key={product.id} className="flex-shrink-0 rounded p-2">
                <div className="bg-white p-3 text-center w-[180px] rounded-[18px] ">
                  <div className="price bg-purple-500 w-[40px] h-[20px] text-white rounded ">
                    $100
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[-17.5rem] h-[7.5rem] mb-8 object-cover mx-auto"
                  />
                  <h3 className="text-sm font-semibold">{product.name}</h3>

                  <button
                    onClick={handleAdquirirClick}
                    className="bg-purple-500 rounded-[11px]  text-white p-1 mt-2 w-[183px] ml-[-9px] "
                  >
                    Adquirir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white rounded-full bg-purple-500 p-2"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
