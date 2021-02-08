import React from 'react';

import Meat from '../image/meats.png';
import Fruit from '../image/fruits.png';
import Snack from '../image/snacks.png';
import Drink from '../image/drinks.jpg';
import Dairy from '../image/dairy.png';
import Search from '../image/search1.webp';
// import Shop from '../image/cartShopIcon.png';
import Cart from '../component/cart';

import '../App.css';

export default function Header() {
  
  return(
    <header>
      <div className="logo_name">
       <h1>Grocer</h1>
      </div>
      <nav className="select_itens">
        <ul>
        <li>
          <a href="/">
            <img src={ Fruit } alt="imgMeat"/>
            Fruit & Veg
          </a>
        </li>
        <li>
          <a href="/meats">
            <img src={ Meat } alt="imgMeat"/>
            Meats
          </a>
        </li>
        <li>
          <a href="/dairy">
            <img src={ Dairy } alt="imgMeat"/>
            Dairy
          </a>
        </li>
        <li>
          <a href="/snacks">
            <img src={ Snack } alt="imgMeat"/>
            Snacks
          </a> 
        </li>
        <li>
          <a href="/Drinks">
            <img src={ Drink } alt="imgMeat"/>
            Drinks
          </a>
        </li>
        </ul>
        
      </nav>
      <div className="btn_head">
        <input
        className="in1"
        type="image"
        alt="1"
        src={ Search }
        >
        </input>
        <Cart />
      </div>
    </header>
  )
}