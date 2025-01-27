import React from 'react';
import './About.css';
import './About.css';
// import './app.css';

const AboutCard = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-card__image-section">
          <img 
            src="/images/About.jpg" 
            alt="Traditional Pakistani Cuisine Spread" 
            className="about-card__hero-image" 
          />
         {/* <video src="About.mp4" controls='auto' /> */}
          <div className="about-card__badge">
            Authentic Pakistani Cuisine
          </div>
        </div>

        <div className="about-card__content">
          <h1 className="about-card__title">Pakistani Culinary Heritage</h1>
          
          <div className="about-card__section">
            <h2 className="about-card__subtitle">Our Mission</h2>
            <p className="about-card__text">
              We are dedicated to preserving and sharing the rich culinary heritage of Pakistan. 
              Our platform brings together traditional recipes passed down through generations, 
              helping food enthusiasts discover the authentic flavors of Pakistani cuisine.
            </p>
          </div>

          <div className="about-card__section">
            <h2 className="about-card__subtitle">What We Offer</h2>
            <div className="about-card__features">
              <div className="feature">
                <span className="feature__icon">🍲</span>
                <h3 className="feature__title">Traditional Recipes</h3>
                <p className="feature__text">Step-by-step guides to authentic Pakistani dishes</p>
              </div>
              <div className="feature">
                <span className="feature__icon">📝</span>
                <h3 className="feature__title">Cooking Techniques</h3>
                <p className="feature__text">Traditional methods and modern adaptations</p>
              </div>
              <div className="feature">
                <span className="feature__icon">🌶️</span>
                <h3 className="feature__title">Spice Guides</h3>
                <p className="feature__text">Essential spices in Pakistani cooking</p>
              </div>
            </div>
          </div>

          <div className="about-card__section">
            <h2 className="about-card__subtitle">Our Cuisine Categories</h2>
            <div className="about-card__categories">
              <span className="category-tag">Karachi Street Food</span>
              <span className="category-tag">Lahori Specialties</span>
              <span className="category-tag">Punjabi Cuisine</span>
              <span className="category-tag">Sindhi Delicacies</span>
              <span className="category-tag">Balochi Dishes</span>
              <span className="category-tag">KPK Traditions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;