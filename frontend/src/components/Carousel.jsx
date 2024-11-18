import React, { useState, useEffect, useCallback, useRef, useReducer } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageDisplay from './ImageDisplay';
import StackCarousel from './StackCarousel';


const MyCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([items[0], items[1]]);
  const [isLoading, setIsLoading] = useState(true);
  const globalIndexRef = useRef(currentIndex)
  const containerRef = useRef(null);

  // preloading of the images to avoid loading images issues
  useEffect(() => {
    const preloadImages = async () => {
      const visibleItemIndices = [currentIndex, (currentIndex + 1) % items.length];

      const preloadPromises = visibleItemIndices.map(index =>
        loadImage(items[index])
      );

      await Promise.all(preloadPromises);

      setIsLoading(false);
      setVisibleItems(visibleItemIndices.map(index => items[index]));
    };

    preloadImages();
  }, [currentIndex]);

  const loadImage = async (item) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${item.img_url}`));
      img.src = item.img_url;
    });
  };

  // key events for the carousel
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     console.log("we have a key down event")
  //     switch (event.key) {
  //       case 'ArrowLeft':
  //         goToPreviousSlide();
  //         break;
  //       case 'ArrowRight':
  //         goToNextSlide();
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [currentIndex]);

  // const handleKeypress = useCallback(
  //   (e) => {
  //     if (e.keyCode === 37) {
  //       goToPreviousSlide();
  //     } else if (e.keyCode === 39) {
  //       goToNextSlide();
  //     }
  //   },
  //   []
  // );

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeypress);
  //   return () => document.removeEventListener("keydown", handleKeypress);
  // }, []);

  // when the user clicks on the left arrow
  const goToPreviousSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    console.log(prevIndex, "prevIndex", currentIndex, "currentIndex")
    globalIndexRef.current = currentIndex;
    containerRef.current.focus();
    setCurrentIndex(prevIndex);
  });

  // when the user clicks on the right arrow
  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    console.log(nextIndex, "nextIndex", currentIndex, "currentIndex global")
    globalIndexRef.current = currentIndex;
    containerRef.current.focus();
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  // useEffect(() => {
  //   // Cette fonction sera appelée à chaque rafraîchissement du DOM
  //   console.log("DOM rafraîchi", globalIndexRef.current);
  // }, [currentIndex]);

  const renderItems = (items) => {
    let index = currentIndex;
    // Push the current configuration
    setVisibleItems(items[index], items[(index + 1) % items.length]);
    console.log("Visible items :", visibleItems);
    return visibleItems
  };

  return (
    <Box
      ref={containerRef}
      display={"flex"} flexDirection={"horizontal"} alignContent={"center"}
      sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <IconButton onClick={goToPreviousSlide} sx={{ position: 'absolute', top: "40vh", left: 10 }}>
        <NavigateBeforeIcon fontSize='large' />
      </IconButton>
      {visibleItems.map((item, index) => (
        <Box className="HOLA-QUE-TAL" key={index} sx={{ width: '50%' }} marginLeft={2} marginRight={2}>
          <StackCarousel item={item} />
        </Box>
      ))}
      <IconButton onClick={goToNextSlide} sx={{ position: 'absolute', top: "40vh", right: 10 }}>
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </Box>
  )
};

export default MyCarousel;
