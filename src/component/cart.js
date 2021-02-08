import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

import Shop from '../image/cartShopIcon.png';

import '../App.css';

const CartFunc = () => {
  const{ cartNum } = useContext(RecipesContext);
  return (
    <div className="cartShop">
      <img src={ Shop } alt="ShopCart" />
      <span>{cartNum}</span>
    </div>
  )
};

export default CartFunc;