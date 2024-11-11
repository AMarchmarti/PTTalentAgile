import React from 'react';

const SquareGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-1 w-6 h-6 items-center">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="w-1.5 h-1.5 bg-gray-600 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default SquareGrid;
