// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="absolute top-0 left-10 flex ml-4 mt-2 items-center h-screen p-3">
      <div className="relative bg-white shadow shadow-slate-400 mt-[-100px] p-2 rounded-md overflow-hidden group">
        <img
          src="https://media.discordapp.net/attachments/1193773120050446437/1194318474651115560/baccons.png?ex=65afeac1&is=659d75c1&hm=f004bbd04141500d4a214238371ea74d6296a07ca8f5e186de458399ce475af3&=&format=webp&quality=lossless"
          alt="Imagem"
          className="mx-auto w-[220px] h-[220px] object-cover transition-transform transform group-hover:scale-110"
        />
        <div className="absolute w-full inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-center">
            Descubra o sabor único de Iron Biscoito. Feito com ingredientes de alta qualidade, nosso biscoito é uma deliciosa explosão de sabores. Experimente a perfeição crocante hoje mesmo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
