import ProTypes from 'prop-types'
import { useState } from 'react';
import images from '~/assets/images/images';

function Images({ className, src, alt , fallback: customFallback =images.noImage }) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return <img src={fallback || src} alt={alt} className={className} onError={handleError}></img>;
}

Images.proTypes = {
  className: ProTypes.string,
  src: ProTypes.string,
  alt: ProTypes.string,
  fallback: ProTypes.node,
}

export default Images;
