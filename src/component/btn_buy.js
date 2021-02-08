import React, { useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';

import '../App.css';

export default function Buy(){
  const{ setCartNum, cartNum } = useContext(RecipesContext);
  // const [count, setCount] = useState(0);

  const click = () =>{
    if (localStorage.sub) {
      const numPosLocal = JSON.parse(localStorage.getItem('buy'));
      const numNegLocal = JSON.parse(localStorage.getItem('sub'));
      const numPos = numPosLocal['valor']['id'].length;
      const numNeg = numNegLocal['valor']['id'].length;
      setCartNum(numPos - numNeg);
    } else {
      const numPosLocal = JSON.parse(localStorage.getItem('buy'));
      const numPos = numPosLocal['valor']['id'].length;
      setCartNum(numPos );
    }
    
    console.log(cartNum)
  }
    
  return(
    <div>
      <button onClick={click}>Buy it!</button>
    </div>
  )
}
