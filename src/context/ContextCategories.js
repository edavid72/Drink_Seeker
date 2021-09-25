import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//todo:::Context:
export const ContextCategories = createContext();

//todo::: Provider: here will be the functions and states
const ProviderCategories = ({ children }) => {
  //*States
  const [categories, setCategories] = useState([]);

  //*Call API
  useEffect(() => {
    const categoriesAPI = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

      const categories = await axios.get(url);

      setCategories(categories.data.drinks);
    };
    categoriesAPI();
  }, []);

  return (
    <ContextCategories.Provider value={{ categories }}>
      {children}
    </ContextCategories.Provider>
  );
};

export default ProviderCategories;
