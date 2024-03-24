import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';
import { Link } from 'react-router-dom';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    // Fetching random reviews from reviews.js
    const getRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      const selectedReviews = shuffledReviews.slice(0, 2);
      setRandomReviews(selectedReviews);
    };
    getRandomReviews();
  }, []);

  return (
    <section className="home-main-section">
      <div className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
        {/* <button onClick={() => console.log('Shop Now clicked')}>Shop Now</button> */}
        {/* <li><Link to="/products">Products</Link></li> */}

        <button style={{ textDecoration: 'none', color: 'black '}}><Link to="/products">Shop Now</Link></button>
        
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            {Array.from({ length: review.stars }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;
