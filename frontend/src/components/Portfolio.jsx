import React, {useState, useEffect} from "react";
// import data from "../data/data.json"
import MyCarousel from "./Carousel";

function Portfolio({ selectedView }) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    console.log("portfolio rendered")
    const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/api/data');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    }
    
    fetchData();
  }, []);
    // console.log(data)
    // console.log(data.paintings[0]); // Logs the first item in the array
    // console.log(data.paintings.length); // Logs the number of items in the array
    return (
        <div className="background-container">
          { data !== null ? (
        <MyCarousel items = {data.paintings}
        currentIndex={carouselIndex} 
        setCurrentIndex={setCarouselIndex}/>
          ): <></>
        }
    </div>
    )
    }
    
    export default Portfolio;