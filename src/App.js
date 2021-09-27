import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import ProviderCategories from './context/ContextCategories';
import ProviderModalVist from './context/ContextModalVist';

import ProviderRecipes from './context/ContextRecipes';

const App = () => {
  return (
    <ProviderRecipes>
      <ProviderCategories>
        <ProviderModalVist>
          <Header />

          <div>
            <div className="container mx-auto">
              <Form />
            </div>

            <RecipeList />
          </div>
        </ProviderModalVist>
      </ProviderCategories>
    </ProviderRecipes>
  );
};

export default App;
