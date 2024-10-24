// components/NewsBlock.js
import React from "react";

const NewsBlock = ({ article }) => {
  return (
    <div key={article.id} className="bg-blue-100 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{article.title}</h2>
      <p className="text-sm text-gray-600">
        {new Date(article.date).toLocaleDateString()}
      </p>
      <p className="mt-2">{article.content}</p>
    </div>
  );
};

export default NewsBlock;
