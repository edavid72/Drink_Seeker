import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ProviderCategories from './context/ContextCategories';

const App = () => {
  return (
    <ProviderCategories>
      <Header />

      <div>
        <div className="container mx-auto">
          <Form />
        </div>
      </div>
    </ProviderCategories>
  );
};

export default App;
