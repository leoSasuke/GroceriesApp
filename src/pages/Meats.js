import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Contador from '../component/Contador';
import Meats from '../service/meats';
import Btn from '../component/btn_buy';

export default function Page() {
  const [produtos, setProdutos] = useState([]);
  
  

  useEffect(() => {
    setProdutos(Meats);
  },[])

  return (
    <div className="body">
     <Header />
     <div className="main">
       <h1>Carnes</h1>
       <p>As carnes formam o conjunto de tecidos de cor e consistência que recobre o esqueleto de animais.
          O corte de carne apresenta tecido muscular, tecido conjuntivo, gorduras e às vezes ossos. Os órgãos internos são chamados de miúdos e também podem ser classificados como carnes.
          As carnes são fontes de proteínas de alto valor biológico, gorduras, vitaminas do complexo B, vitamina A e minerais como ferro, zinco, cálcio, fósforo, magnésio, sódio e potássio.
        </p>
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