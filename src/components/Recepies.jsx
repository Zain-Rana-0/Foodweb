import React, { useState } from 'react';
import './RecipeList.css';
import recipesData from '../data/recipesData.json';

function RecipeList() {
    const { recipes } = recipesData;
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <div className="recipe-list">
            <header className="recipe-list__header">
                <h1 className="recipe-list__title">Recipes</h1>
                <p className="recipe-list__subtitle">Discover how to make these delicious dishes step by step.</p>
            </header>

            <div className="recipe-grid">
                {recipes.map((recipe, index) => (
                    <article key={index} className="recipe-card">
                        <div className="recipe-card__image-wrapper">
                            <img 
                                className="recipe-card__image" 
                                src={recipe.image} 
                                alt={recipe.name} 
                            />
                            <div className="recipe-card__overlay">
                                <button
                                    className="recipe-card__button"
                                    onClick={() => setSelectedRecipe(recipe)}
                                >
                                    View Recipe
                                </button>
                            </div>
                        </div>
                        <div className="recipe-card__content">
                            <h3 className="recipe-card__title">{recipe.name}</h3>
                            <p className="recipe-card__description">{recipe.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            {selectedRecipe && (
                <div className="recipe-modal">
                    <div className="recipe-modal__content">
                        <button 
                            className="recipe-modal__close"
                            onClick={() => setSelectedRecipe(null)}
                        >
                            ×
                        </button>
                        <h2 className="recipe-modal__title">{selectedRecipe.name}</h2>
                        <div className="recipe-modal__body">
                            <div className="recipe-modal__ingredients">
                                <h3>Ingredients</h3>
                                <ul>
                                    {selectedRecipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="recipe-modal__steps">
                                <h3>Steps</h3>
                                <ol>
                                    {selectedRecipe.steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeList;