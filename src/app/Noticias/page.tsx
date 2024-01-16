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

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  theme,
  description,
  date,
  author,
  imageUrl,
}) => {
  return (


    <div className="max-w-xs mx-auto mb-[50px] overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Imagem */}
      <img className="object-cover w-full h-28" src={imageUrl} alt={category} />

      <div className="p-4">
        {/* Categoria */}
        <div className="flex items-center mb-1 text-gray-500 text-sm">
          <FaTags className="mr-1" />
          {category}
        </div>

        {/* Destaque */}
        <div className="mb-2 text-base font-bold">{theme}</div>

        {/* Descrição */}
        <p className="text-gray-700 text-sm">{description}</p>

        {/* Informações adicionais */}
        <div className="flex items-center mt-2 text-gray-500 text-xs">
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

        {/* Botão da categoria */}
        <button className="mt-2 px-3 py-1 bg-purple-500 text-white rounded-full text-xs">
          Ver mais
        </button>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  const newsData = [
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "Todos são lindos da iron.",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
    },
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "Todos são lindos da iron.",
      date: "09/01/2024",
      author: "Ertell",
      imageUrl:
        "https://web.archive.org/web/20221211010331/https://habbletcreate.com.br/admin/assets/uploads/noticia-6ca6da494c433c6b009bc987fc8b1dc2.jpg",
    },
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "Todos são lindos da iron.",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
    },
    {
      category: "Categoria",
      theme: "A iron está chegando com fã site",
      description: "Todos são lindos da iron.",
      date: "09/01/2024",
      author: "Marcos Teste",
      imageUrl:
        "https://web.archive.org/web/20221211010331/https://habbletcreate.com.br/admin/assets/uploads/noticia-6ca6da494c433c6b009bc987fc8b1dc2.jpg",
    },
    {
        category: "Categoria",
        theme: "A iron está chegando com fã site",
        description: "Todos são lindos da iron.",
        date: "09/01/2024",
        author: "Marcos Teste",
        imageUrl:
          "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
      },
      {
        category: "Categoria",
        theme: "A iron está chegando com fã site",
        description: "Todos são lindos da iron.",
        date: "09/01/2024",
        author: "Ertell",
        imageUrl:
          "https://web.archive.org/web/20221211010331/https://habbletcreate.com.br/admin/assets/uploads/noticia-6ca6da494c433c6b009bc987fc8b1dc2.jpg",
      },
      {
        category: "Categoria",
        theme: "A iron está chegando com fã site",
        description: "Todos são lindos da iron.",
        date: "09/01/2024",
        author: "Marcos Teste",
        imageUrl:
          "https://web.archive.org/web/20221211010330/https://habbletcreate.com.br/admin/assets/uploads/noticia-572717f220ca5f22750509c1d53463a3.png",
      },
      {
        category: "Categoria",
        theme: "A iron está chegando com fã site",
        description: "Todos são lindos da iron.",
        date: "09/01/2024",
        author: "Marcos Teste",
        imageUrl:
          "https://web.archive.org/web/20221211010331/https://habbletcreate.com.br/admin/assets/uploads/noticia-6ca6da494c433c6b009bc987fc8b1dc2.jpg",
      },
  ];

  return (
    <div className="container mx-auto mt-[60px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {newsData.map((news, index) => (
        <NewsCard key={index} {...news} />
      ))}
    </div>
  );
};

export default NewsSection;
