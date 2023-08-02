import React from "react";

const Home = () => {
  return (
    <main className="home">

    {/* Left-side of main page */}

      <div className="left-side">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>  

      </div>

      {/* Right-side of main page */}

      <div className="right-side">
      <img src="/images/hero-image.png" alt="amazon-logo" />
      </div>
    </main>
  );
};

export default Home;
