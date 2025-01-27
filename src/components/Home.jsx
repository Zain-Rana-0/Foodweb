import React from 'react';
import './Home.css';
import foodData from '../data/foodData.json';

const Home = () => {
  const { breakfast, lunch, dinner, desert, dishes } = foodData;

  return (
    <div className="food-menu">
      <section className="food-menu__section menu-section">
        <div className="menu-section__category">
          <h2 className="menu-section__title">Breakfast</h2>
          <div className="menu-section__grid">
            {breakfast.map((item, index) => (
              <div key={index} className="menu-item">
                <img className="menu-item__image" src={item.image} alt={item.title} />
                <h3 className="menu-item__title">{item.title}</h3>
                <p className="menu-item__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section__category">
          <h2 className="menu-section__title">Lunch</h2>
          <div className="menu-section__grid">
            {lunch.map((item, index) => (
              <div key={index} className="menu-item">
                <img className="menu-item__image" src={item.image} alt={item.title} />
                <h3 className="menu-item__title">{item.title}</h3>
                <p className="menu-item__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section__category">
          <h2 className="menu-section__title">Dinner</h2>
          <div className="menu-section__grid">
            {dinner.map((item, index) => (
              <div key={index} className="menu-item">
                <img className="menu-item__image" src={item.image} alt={item.title} />
                <h3 className="menu-item__title">{item.title}</h3>
                <p className="menu-item__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section__category">
          <h2 className="menu-section__title">Desert</h2>
          <div className="menu-section__grid">
            {desert.map((item, index) => (
              <div key={index} className="menu-item">
                <img className="menu-item__image" src={item.image} alt={item.title} />
                <h3 className="menu-item__title">{item.title}</h3>
                <p className="menu-item__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="food-menu__section popular-dishes">
        <h2 className="popular-dishes__title">Popular Dishes</h2>
        <div className="popular-dishes__grid">
          {dishes.map((dish, index) => (
            <div key={index} className="popular-dish">
              <img className="popular-dish__image" src={dish.image} alt={dish.name} />
              <h3 className="popular-dish__title">{dish.name}</h3>
              <p className="popular-dish__description">{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;