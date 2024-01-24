import React, { FC } from 'react'

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  isSingle?: boolean;
  className?: string;
}

const handleSrc = ({ src }: { src: string; }) => {
  const srcArr = src.split('.');
  const ext = srcArr.pop();
  const path = srcArr.join('.')

  return { ext, path }
}

export const Image: FC<ImageProps> = ({ src, width, height, alt, isSingle, className='bq-image' }) => {
  const { path, ext } = handleSrc({ src });

  if (isSingle) {
    return (
      <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
        decoding="async"
        className={className}
      />
    )
  }

  return (
    <picture className='bq-picture'>
      <source srcSet={`${path}@2x.webp`} media="(max-width: 1023px)" type="image/webp" />
      <source srcSet={`${path}@3x.webp`} media="(min-width: 1024px)" type="image/webp" />
      <source srcSet={`${path}@2x.${ext}`} media="(max-width: 1023px)" type={`image/${ext}`} />
      <source srcSet={`${path}@3x.${ext}`} media="(min-width: 1024px)" type={`image/${ext}`} />
      <img src={`${path}@2x.${ext}`} alt={alt} width={width} height={height} decoding="async" className={className} />
    </picture>
  )
};
