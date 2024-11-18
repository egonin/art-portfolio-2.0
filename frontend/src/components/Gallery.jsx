import React, {useState, useEffect} from "react";
import "./home.css";
import { ImageList, ImageListItem, Box, Typography } from '@mui/material'
function Gallery({ selectedView }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/data');
      const result = await response.json();
      setData(result);
    }
    
    fetchData();
  }, []);

  useEffect(() => {
      const preloadImages = async () => {
        const visibleItemIndices = [currentIndex, (currentIndex + 1) % data.paintings.length];
        
        const preloadPromises = visibleItemIndices.map(index => 
          loadImage(data.paintings[index])
        );

        await Promise.all(preloadPromises);

        setIsLoading(false);
        setVisibleItems(visibleItemIndices.map(index => data.paintings[index]));
      }
    if (data !== null)
      {
    preloadImages();
      }
  }, [currentIndex]);

  const loadImage = async (item) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${item.img_url}`));
      img.src = item.img_url;
    });
  };

  useEffect(() => {
    if (!isLoading) {
      console.log("All images loaded and visibleItems updated");
    }
  }, [isLoading]);

  const handleMouseOver = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="background-container">
      {isLoading && data == null ? (
        <div/>
      ) : (
      <Box sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.paintings.map((item) => (
          <ImageListItem key={item.img_url} onMouseOver={() => handleMouseOver(item)} onMouseLeave={handleMouseLeave}>
            <img
              srcSet={`${item.img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img_url}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            {hoveredItem === item && (
                  <Box sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width:"96%",
                    height:"97%",
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '10px',
                    color: 'white',
                    display:"flex",
                    flexDirection:'column',
                    justifyContent:"center",
                    alignItems:"center",
                    textAlign:'center'
                  }}>
                    <Box marginBottom={2}>
                    <Typography variant="h4"  fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)">{item.title}</Typography>
                    </Box>
                    <Typography variant="h7" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)">{item.description}</Typography>
                  </Box>
                )}
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    )}
    </div>
  )
}


export default Gallery;
