import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {LazyLoadImage} from "react-lazy-load-image-component"

const ImageDisplay = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  useEffect(() => {setImageSrc(src)
  },[src]
  )

  return (
    <Box>
       <LazyLoadImage 
        threshold={100} 
        offset={100}
        src={src} 
        alt={alt}
        style={{ width: 'auto', height: '75vh', objectFit: 'contain' }}
        onError={(e) => console.error('Erreur de chargement de l\'image:', e)}
        loading="lazy"
        />
    </Box>
  );
};

export default ImageDisplay;
