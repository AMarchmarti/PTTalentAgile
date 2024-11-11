import React from 'react'
type SkeletonResultItemProps = {
    isLoading: boolean;
  };
const SkeletonResultItem: React.FC<SkeletonResultItemProps> = ({ isLoading }) => {
    if (isLoading) {
      return (
        <li className="p-4 border-gray-200 cursor-pointer hover:bg-gray-100 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </li>
      );
    }
  
    return <></>;
  };

  export default SkeletonResultItem;