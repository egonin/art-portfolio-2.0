import React from "react";
import "./home.css";

function Home({ selectedView }) {

  return (
    <div className="background-container">
        {/* <Header/>
        <div className="abril-fatface-regular" style={{ color: 'white', fontSize: '110px' }}>
            Emma Casagrande</div>
            <div className="abril-fatface-regular" style={{ color: 'white', fontSize: '60px' }}>
            <i>peintures</i></div> */}
          <div className="content-wrapper">
        <h1 className="name">Emma Casagrande</h1>
        <p className="tagline"><i>peintures</i></p>
      </div>
  </div>
)
}


export default Home;
