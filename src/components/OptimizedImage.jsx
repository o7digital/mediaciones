import React from 'react';

export default function OptimizedImage({ src, alt, className, ...props }) {
  // Convert image path to WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
}
