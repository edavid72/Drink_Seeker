import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
//Todo::: Context
export const ContextRecipes = createContext();

//Todo::: Provider
const ProviderRecipes = ({ children }) => {
  //* State Recipes
  const [recipes, setRecipes] = useState([]);
  const [activeQuery, setActiveQuery] = useState(false);
  const [searchTerms, setSearchTerms] = useState({
    ingredient: '',
    category: '',
  });

  const { ingredient, category } = searchTerms;

  //* Call API
  useEffect(() => {
    if (activeQuery) {
      const recipesAPI = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const result = await axios.get(url);

        setRecipes(result.data.drinks);
      };
      recipesAPI();
    } 
  }, [searchTerms, activeQuery, category, ingredient]);

  return (
    <ContextRecipes.Provider
      value={{ recipes, setSearchTerms, setActiveQuery }}
    >
      {children}
    </ContextRecipes.Provider>
  );
};

export default ProviderRecipes;
