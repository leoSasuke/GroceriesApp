import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Contador from '../component/Contador';

import Btn from '../component/btn_buy';
import Dairy from '../service/dairy';

export default function Page() {
  const [produtos, setProdutos] = useState([]);
  
  

  useEffect(() => {
    setProdutos(Dairy);
  },[])

  return (
    <div className="body">
     <Header />
     <div className="main">
       <h1>Dairy</h1>
       <p>Um café da manhã saudável tem todos os macronutrientes em equilíbrio, ou seja, proteínas de alto valor biológico, como ovos, queijos magros, iogurtes, proteínas de soja e grão de bico; carboidratos saudáveis, como cereais integrais, aveia, frutas; além de gorduras boas como sementes oleaginosas e azeite de oliva</p>
       <div className="main-card">
        {produtos.map((el, idx) => (
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