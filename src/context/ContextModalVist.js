import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Todo::: Context
export const ContextModalVist = createContext();

//Todo::: Provider
const ProviderModalVist = ({ children }) => {
  //Todo::: State
  const [getId, setGetId] = useState(null);
  const [fullRecipe, setFullRecipe] = useState({});

  //Todo::: Effect
  useEffect(() => {
    const fullDrinkRecipe = async () => {
      if (!getId) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getId}`;

      const result = await axios.get(url);

      setFullRecipe(result.data.drinks[0]);
    };
    fullDrinkRecipe();
  }, [getId]);

  return (
    <ContextModalVist.Provider value={{ setGetId,fullRecipe,setFullRecipe }}>
      {children}
    </ContextModalVist.Provider>
  );
};

export default ProviderModalVist;
