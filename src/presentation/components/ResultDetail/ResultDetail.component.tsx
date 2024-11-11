import React from 'react';

type ResultDetailsProps = {
  title: string;
  content: string;
    image: string;
    url: string;
};

const ResultDetails: React.FC<ResultDetailsProps> = ({ title, content, image, url }) => {
  return (
    <div className="p-6">
      <img src={image} alt={title} className="mb-4" />
      <span>{url}</span>
      <p className="text-2xl font-bold mb-4">{title}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default ResultDetails;
