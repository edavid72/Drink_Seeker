import React, { useContext } from 'react';
import { ContextRecipes } from '../context/ContextRecipes';
import DrinkRecipe from './DrinkRecipe';

const RecipeList = () => {
  //?Context
  const { recipes } = useContext(ContextRecipes);

  return (
    <div className="laptop:w-10/12 mx-auto">
      <h1 className="text-4xl text-center font-bold mb-2 text-orange mt-4">
        Drinks Recipe
      </h1>
      <div className="flex flex-col laptop:grid laptop:grid-cols-3">
        {recipes.map((recipe) => {
          return <DrinkRecipe key={recipe.idDrink} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default RecipeList;
