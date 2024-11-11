import React from 'react';

type ResultItemProps = {
  title: string;
  description: string;
  onClick: () => void;
};

const ResultItem: React.FC<ResultItemProps> = ({ title, description, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="p-4  border-gray-200 cursor-pointer hover:bg-gray-100"
    >
      <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </li>
  );
};

export default ResultItem;
