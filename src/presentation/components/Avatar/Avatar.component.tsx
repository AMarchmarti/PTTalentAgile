import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  size?: string; 
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'w-10 h-10' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${size} border border-gray-300`}
    />
  );
};

export default Avatar;
