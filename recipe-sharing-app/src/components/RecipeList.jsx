import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link للتنقل بين الصفحات
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
