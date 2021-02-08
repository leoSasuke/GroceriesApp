import React, { useState } from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Context
import RecipesContext from '../context/RecipesContext';

export default function GroceriesProvider({ children }) {
  const [cartNum, setCartNum] = useState(0);
  
  const context = {
    cartNum,
    setCartNum
  };
    
  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

GroceriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
