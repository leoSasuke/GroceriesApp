import React, { useState } from 'react';

import '../App.css';

export default function Count() {
  const [count, setCount] = useState(0);


  const sum = () => {
    setCount(count +1);
    if(localStorage.buy) {
      const bola = JSON.parse(localStorage.getItem('buy'));
      localStorage.buy = JSON.stringify({...bola,valor:{...bola.valor,id:[...bola.valor['id'],count+1]}});
    } else {
      
      localStorage.buy = JSON.stringify({valor:{id:[count+1]}});
    };
    
    
  };

  const sub = () => {
    if(count > 0 && localStorage.buy) {
      setCount(count -1);
      const bola = JSON.parse(localStorage.getItem('buy'));
      localStorage.sub = JSON.stringify({...bola,valor:{...bola.valor,id:[...bola.valor['id'].slice(0,count-1),]}});
    }

  }

  return (
    <div className="count">
      <button
        className="btn"
        onClick={ sum }
      >+
      </button>
      <h3>{ count }</h3>
      <button
        className="btn1"
        onClick={ sub }
      >-
      </button>
    </div>
  )
}
