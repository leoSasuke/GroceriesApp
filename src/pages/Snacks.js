import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Contador from '../component/Contador';
import Snacks from '../service/snacks';
import Btn from '../component/btn_buy';

export default function Page() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(Snacks);
  },[])

  return (
    <div className="body">
     <Header />
     <div className="main">
       <h1>Snacks</h1>
       <p>Seja após o almoço ou jantar, ou apenas para “matar” a vontade de comer um doce durante o dia, as sobremesas dificilmente faltam nas geladeiras dos brasileiros. Para quem não abre mão dessas delícias, </p>
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