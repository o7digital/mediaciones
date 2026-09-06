import React from 'react';

export default function OptimizedImage({ src, alt, className, webpSrcSet, sizes, ...props }) {
  // Convert image path to WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSrcSet || webpSrc} sizes={sizes} type="image/webp" />
      <img src={src} alt={alt} className={className} sizes={sizes} loading="lazy" decoding="async" {...props} />
    </picture>
  );
}
