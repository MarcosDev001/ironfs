import React from "react";
import { FaCalendar, FaUser, FaTags, FaClock } from "react-icons/fa";

interface NewsCardProps {
  category: string;
  theme: string;
  description: string;
  date: string;
  author: string;
  imageUrl: string;
}

const PurpleNewsCard: React.FC<NewsCardProps> = ({
  category,
  theme,
  description,
  date,
  author,
  imageUrl,
}) => {
  return (
    <div className="relative bg-[#52227e] w-[16rem] mx-auto overflow-hidden rounded-lg shadow-lg">
      <img className="object-cover w-full h-28" src={imageUrl} alt={category} />
      <div className="p-4">
        <div className="flex items-center mb-1 text-white text-sm">
          <FaTags className="mr-1" />
          {category}
        </div>
        <div className="mb-2 text-base font-bold text-white">{theme}</div>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="flex items-center mt-2 text-gray-300 text-xs">
          <div className="flex items-center mr-2">
            <FaCalendar className="mr-1" />
            {date}
          </div>
          <div className="flex items-center mr-2">
            <FaUser className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            12:00 PM
          </div>
        </div>
        <button className="mt-2 px-3 py-1 bg-white text-[#52227e] rounded-full text-xs">
          Ver mais
        </button>
      </div>
    </div>
  );
};

const PurpleNewsSection: React.FC = () => {
  const newsData = [
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
    },
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
    },
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
    },
  ];

  return (
    <div className="container mx-auto mt-20 ml-[354px]">
      <div className="flex items-center mt-4">
        <img src="" alt="Ícone" className="icon w-8 h-8" />
        <h1 className="text-2xl font-semibold ml-2 text-white">Agenda Iron</h1>
      </div>

      <div className="grid grid-cols-1 gap-[17.5rem] sm:grid-cols-2 lg:grid-cols-5 ml-[57px] mt-[-106px]">
        {newsData.map((news, index) => (
          <PurpleNewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default PurpleNewsSection;
