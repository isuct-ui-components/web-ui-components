import React, { FC } from 'react';

export type ImageProps = {
  width?: React.CSSProperties['maxWidth'];
  height?: React.CSSProperties['flexDirection'];
  src: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
  className?: string;
};

export const ImageContainer: FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  loading,
  onClick,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className} 
      loading={loading} 
      onClick={onClick} 
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    >
    </img>
  );
};
