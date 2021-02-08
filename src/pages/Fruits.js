import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Contador from '../component/Contador';
import Array from '../service/fruits';
import Btn from '../component/btn_buy';

import '../App.css';

export default function Page() {
  const [fruitas, setFruitas] = useState([]);
  
  

  useEffect(() => {
    setFruitas(Array);
     
    
  },[])

  return (
    <div className="body">
     <Header />
     <div className="main">
       <h1>Fruits & Vegetables</h1>
       <p>Os vegetais são uma excelente fonte de fibra, o que é bom para a digestão saudável. Eles também ajudam na redução de seu colesterol. Comer vegetais irá mantê-lo saciado, ajudando-o a reduzir a sua vontade de comer “besteira” fora de hora. Automaticamente isso irá, por sua vez, ajudá-lo na perda de peso.</p>
       <div className="main-card">
        {fruitas.map((el, idx) => (
          <div key={idx} className="card">
            <div className="imgCard">
              <img src={el.url} alt="img" />
            </div>
            <h2>{ el.name }</h2>
            <h4>{ el.weigth }</h4>
            <h3>{ `$ ${el.price}` }</h3>
            <div className="count"><Contador /></div>
            <div><Btn /></div>
          </div>
        ))}
       </div>
     </div>
    </div>
  )
}