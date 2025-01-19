// File: src/pages/RecipeList.js
import React from 'react';
import './RecipeList.css';

function RecipeList() {
    const recipes = [
        {
            name: 'Chicken Biryani',
            image: '/images/biryani.jpg',
            description: 'A flavorful rice dish made with marinated chicken, basmati rice, and spices.',
            ingredients: [
                '2 cups basmati rice',
                '500g chicken',
                '1 cup yogurt',
                '2 onions (sliced)',
                'Spices (garam masala, turmeric, chili powder, etc.)'
            ],
            steps: [
                'Marinate chicken with yogurt and spices for 1 hour.',
                'Fry onions until golden brown.',
                'Cook chicken with fried onions.',
                'Layer cooked chicken and parboiled rice in a pot.',
                'Steam on low heat for 20 minutes.'
            ]
        },
        {
            name: 'Nihari',
            image: '/images/nihari.jpg',
            description: 'A slow-cooked stew with tender beef and aromatic spices.',
            ingredients: [
                '500g beef shank',
                '4 cups water',
                '1 onion (sliced)',
                '1/2 cup wheat flour (roasted)',
                'Spices (ginger, garlic, garam masala, etc.)'
            ],
            steps: [
                'Fry onions until golden brown.',
                'Add beef and spices, and cook for 10 minutes.',
                'Add water and cook on low heat for 3 hours.',
                'Mix roasted flour with water to make a paste.',
                'Add flour paste to the stew and simmer until thickened.'
            ]
        },{
            name: 'Karahi Gosht',
            image: '/images/karahi.jpg',
            description: 'A traditional Pakistani dish made with mutton or chicken cooked in a wok with tomatoes and spices.',
            ingredients: [
              '500g mutton or chicken',
              '4 tomatoes (chopped)',
              '2 onions (sliced)',
              '4 green chilies',
              '1 tbsp ginger garlic paste',
              'Spices (red chili powder, black pepper, coriander powder, etc.)'
            ],
            steps: [
              'Heat oil in a wok and fry onions until golden.',
              'Add ginger garlic paste and cook for 1 minute.',
              'Add mutton or chicken and cook until tender.',
              'Add chopped tomatoes, green chilies, and spices.',
              'Cook on high heat until oil separates and garnish with coriander.'
            ]
          },
          {
            name: 'Haleem',
            image: '/images/haleem.jpg',
            description: 'A hearty dish made with wheat, lentils, and meat cooked to perfection.',
            ingredients: [
              '1 cup wheat',
              '1/2 cup lentils (split chickpeas, moong dal, etc.)',
              '500g beef or chicken',
              '2 onions (fried)',
              'Spices (ginger, garlic, garam masala, etc.)'
            ],
            steps: [
              'Soak wheat and lentils overnight.',
              'Cook meat with spices until tender.',
              'Boil wheat and lentils until soft and blend into a paste.',
              'Mix the meat and wheat-lentil paste together.',
              'Cook on low heat, stirring frequently, and garnish with fried onions and ginger.'
            ]
          },
          {
            name: 'Seekh Kebabs',
            image: '/images/seekh_kebab.jpg',
            description: 'Flavorful ground meat skewers seasoned with spices and grilled to perfection.',
            ingredients: [
              '500g ground beef or chicken',
              '1 onion (finely chopped)',
              '2 tbsp ginger garlic paste',
              'Spices (red chili powder, cumin powder, coriander powder, etc.)',
              'Fresh coriander and green chilies (finely chopped)'
            ],
            steps: [
              'Mix ground meat with onion, ginger garlic paste, and spices.',
              'Add chopped coriander and green chilies to the mixture.',
              'Shape the meat mixture onto skewers.',
              'Grill or cook on a stovetop until browned on all sides.',
              'Serve hot with chutney or yogurt sauce.'
            ]
          },
          {
            name: 'Chicken Karahi',
            image: '/images/chicken_karahi.jpg',
            description: 'A spicy and tangy chicken dish cooked with fresh tomatoes, green chilies, and aromatic spices.',
            ingredients: [
              '500g chicken (cut into pieces)',
              '4 tomatoes (chopped)',
              '2 green chilies (sliced)',
              '1 tbsp ginger garlic paste',
              'Spices (red chili powder, black pepper, garam masala, etc.)'
            ],
            steps: [
              'Heat oil in a wok and cook chicken until lightly browned.',
              'Add ginger garlic paste and cook for 1-2 minutes.',
              'Add chopped tomatoes and spices.',
              'Cook on medium heat until chicken is tender and oil separates.',
              'Garnish with sliced green chilies and fresh coriander.'
            ]
          },
          {
            name: 'Gulab Jamun',
            image: '/images/gulab_jamun.jpg',
            description: 'Sweet dumplings made with milk solids, deep-fried, and soaked in sugar syrup.',
            ingredients: [
              '1 cup milk powder',
              '1/4 cup all-purpose flour',
              '1/4 cup milk',
              '1/4 tsp baking soda',
              '2 cups sugar',
              '2 cups water',
              'Cardamom pods and rose water for syrup'
            ],
            steps: [
              'Make a dough by mixing milk powder, flour, baking soda, and milk.',
              'Shape into small balls and fry on low heat until golden brown.',
              'Prepare sugar syrup by boiling water, sugar, and cardamom pods.',
              'Soak the fried balls in the warm syrup for at least 30 minutes.',
              'Serve warm or chilled, garnished with pistachios.'
            ]
          }
    ];

    return (
        <div className="recipe-list">
            <h1>Recipes</h1>
            <p>Discover how to make these delicious dishes step by step.</p>

            <div className="recipe-cards">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>
                        <button
                            className="details-button"
                            onClick={() => alert(`Ingredients:\n${recipe.ingredients.join('\n')}\n\nSteps:\n${recipe.steps.join('\n')}`)}
                        >
                            View Recipe
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;