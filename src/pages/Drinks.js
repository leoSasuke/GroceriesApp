import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Contador from '../component/Contador';
import Drinks from '../service/drinks';

export default function Page() {
  const [produto, setProduto] = useState([]);
  
  useEffect(() => {
    setProduto(Drinks );
  },[])

  return (
    <div className="body">
     <Header />
     <div className="main">
       <h1>Bebidas</h1>
       <p>As bebidas alcoólicas são drogas psicotrópicas lícitas com propriedades depressoras do sistema nervoso central, que podem causar dependência física e psíquica.
          Com efeito, são produzidas a partir do álcool (do árabe al-kohul, que significa “coisa subtil”), um composto orgânico que possui um ou mais grupos de hidroxilas (-OH) ligados em sua estrutura molecular aos carbonos saturados.
        </p>
       <div className="main-card">
        {produto.map((el, idx) => (
          <div key={idx} className="card">
            <div className="imgCard">
              <img src={el.url} alt="img" />
            </div>
            <h2>{ el.name }</h2>
            <h4>{ el.weigth }</h4>
            <h3>{ `$ ${el.price}` }</h3>
            <div className="count"><Contador /></div>
          </div>
        ))}
       </div>
     </div>
    </div>
  )
}