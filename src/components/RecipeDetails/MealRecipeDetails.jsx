import PropTypes from 'prop-types';
import React from 'react';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';

export default function MealRecipeDetails({ recipe }) {
  function getIngredients() {
    const ingredients = Object.entries(recipe)
      .filter((par) => (par[0]
        .includes('strIngredient') && par[1] !== '' && par[1] !== null))
      .map((item) => item[1]);
    return ingredients;
  }
  function getMeasurements() {
    const measuments = Object.entries(recipe)
      .filter((par) => (par[0]
        .includes('strMeasure') && par[1] !== '' && par[1] !== null))
      .map((item) => item[1]);
    return measuments;
  }

  const { strYoutube, strInstructions, strCategory } = recipe;
  return (
    <section className="p-3">
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        className="w-25"
        data-testid="recipe-photo"
      />
      <p
        data-testid="recipe-title"
      >
        {recipe.strMeal}

      </p>
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorito
      </button>
      <p
        data-testid="recipe-category"
      >
        {strCategory}

      </p>
      <ul>
        {getIngredients().map((ing, i) => (
          <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
        ))}
      </ul>
      <ul>
        {getMeasurements().map((ing, i) => (
          <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
        ))}
      </ul>
      <p data-testid="instructions">
        {strInstructions}
      </p>
      <iframe
        width="240"
        data-testid="video"
        src={ strYoutube }
        title="youtube-video"
      />
      <RecommendedRecipes type="meals" />
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita

      </button>
    </section>
  );
}

MealRecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
